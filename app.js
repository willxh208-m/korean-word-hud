// app.js
// This file handles the logic for displaying Korean words and their details, 
// as well as managing the rotation of words over time.

// Load the mastered words from localStorage
const masteredWords = loadProgression();

// Array initializes at 0, meaniing the first word in the array will be displayed first
let currentIndex = 0;

// Find the HTML elements by their IDs to update
const categoryElement = document.getElementById("word-category");
const koreanElement = document.getElementById("word-korean");
const meaningElement = document.getElementById("word-meaning");
const presentElement = document.getElementById("word-present");
const pastElement = document.getElementById("word-past");
const exampleElement = document.getElementById("word-example");
const translationElement = document.getElementById("word-translation");
const detailsElement = document.getElementById("word-details");
const nextButton = document.getElementById("next-button");
const masteredButton = document.getElementById("mastered-button");
const restoreButton = document.getElementById("restore-button");
const completionMessage = document.getElementById("completion-message");
const storageMessage = document.getElementById("storage-message");
const masteredList = document.getElementById("mastered-list");
const masteredEmpty = document.getElementById("mastered-empty");
const countdownElement = document.getElementById("rotation-countdown");
const speakButton = document.getElementById("speak-button");
const masteredSection = document.getElementById("mastered-section");
const formsElement = document.getElementById("word-forms");

// Some browsers don't support speech, so only show the speaker button where it works
const canSpeak = "speechSynthesis" in window;

// Read Korean text aloud using the browser's built-in voice
function speakKorean(text) {
    if (!canSpeak) {
        return;
    }
    // Stop anything still being spoken so clicks don't queue up
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ko-KR"; // Ask for a Korean voice
    utterance.rate = 0.9; // Slightly slower than normal to make it easier to follow

    speechSynthesis.speak(utterance);
}

// Hide the meaning so the user tries to recall it before seeing it
function hideMeaning() {
    meaningElement.classList.add("is-hidden");
    meaningElement.setAttribute("role", "button");
    meaningElement.tabIndex = 0;
    meaningElement.setAttribute("aria-label", "Meaning hidden. Activate to reveal.");
    meaningElement.title = "Click or press Space to reveal";
}

// Show the meaning and turn it back into plain text
function revealMeaning() {
    meaningElement.classList.remove("is-hidden");
    meaningElement.removeAttribute("role");
    meaningElement.removeAttribute("tabindex");
    meaningElement.removeAttribute("aria-label");
    meaningElement.removeAttribute("title");
}

// Function to update the displayed word details
function updateWordDetails() {
    const currentWord = words[currentIndex];

    saveCurrentWordId(currentWord.id);

    categoryElement.textContent = `DAILY KOREAN · ${currentWord.partOfSpeech.toUpperCase()}`;

    koreanElement.textContent = currentWord.korean;
    meaningElement.textContent = currentWord.meaning;
    // Hide the meaning so the user tries to recall it first
    hideMeaning();
    // Show the speaker button for real words (if the browser supports speech)
    speakButton.hidden = !canSpeak;
    // Creates a boolean that checks if current word has a present and past form
    const hasForms = Boolean(currentWord.present && currentWord.past);
    // Hides the forms section if the current word has no forms
    formsElement.hidden = !hasForms;
    // Updates the present and past forms, using empty strings if they are missing
    presentElement.textContent = currentWord.present ?? "";
    pastElement.textContent = currentWord.past ?? "";

    exampleElement.textContent = currentWord.example;
    translationElement.textContent = currentWord.translation;

    // Start each new word with details hidden
    detailsElement.open = false;

    // Ensure the details are visible when a new word is displayed
    detailsElement.hidden = false;
    // Ensure the next button is visible when a new word is displayed
    nextButton.hidden = false;
    // Ensure the mastered button is visible when a new word is displayed
    masteredButton.hidden = false;
    // Hide the completion message when a new word is displayed
    completionMessage.hidden = true; 
    // Show restore button only if there are mastered words
    restoreButton.hidden = masteredWords.size === 0;
}

// Timer to automatically move to the next word
// Counted in miliseconds, so 5000 = 5 seconds
const rotationInterval = 60 * 1000; // 5 minutes

// Rememeber the timer so we can reset it
let rotationTimer = null;

// The exact time (in ms since epoch) the current rotation timer will fire,
// so the on-screen countdown is calculated from the real timer, not counted separately
let rotationDeadline = 0;

// Move to the next word and update the visual card
function nextWord(){
    // Checks if there are any words left to learn, if not, 
    // show the completion message and return
    if (!hasLearningWordsLeft()) {
        showCompletion();
        return;
    }
    // Uses a do-while loop to ensure that the next word is not a mastered word
    do {
        currentIndex = (currentIndex + 1) % words.length; // Loop back to the start if at the end
    // Skip mastered words
    } while (masteredWords.has(words[currentIndex].id));
    // Once a non-mastered word is found, update the visual card with the new word's details
    updateWordDetails();
}
// Start a fresh countdown before changing the word
function scheduleRotation(){
    // Clear any existing timer
    clearTimeout(rotationTimer);

    rotationTimer = null; // Clear the timer reference
    
    if (!hasLearningWordsLeft()) {
        return;
    }

    rotationTimer = setTimeout(() => {
        nextWord();

        // Schedule the next rotation after changing the word
        scheduleRotation();
    }, rotationInterval);

    // Remember when this timer will fire and show the fresh countdown right away
    rotationDeadline = Date.now() + rotationInterval;
    renderCountdown();
}

// Show the time left until the next word in the top right corner, e.g. "0:42"
function renderCountdown() {
    // Hide the countdown whenever no rotation timer is running (e.g. all words mastered)
    countdownElement.hidden = rotationTimer === null;

    if (rotationTimer === null) {
        return;
    }

    // Round up so the display shows 1:00 at the start and only reaches 0:00 when the word changes
    const secondsLeft = Math.max(0, Math.ceil((rotationDeadline - Date.now()) / 1000));
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = String(secondsLeft % 60).padStart(2, "0");
    const text = `${minutes}:${seconds}`;

    // Only touch the page when the displayed value actually changes
    if (countdownElement.textContent !== text) {
        countdownElement.textContent = text;
    }
}

// Re-check the countdown often so it stays within a fraction of a second of the real timer
setInterval(renderCountdown, 100);

function renderMasteredList() {
    masteredList.replaceChildren(); // Clear the current list

    // Keep the original word order, only including mastered words
    const masteredWordList = words.filter(word => masteredWords.has(word.id));

    // Show the empty message only when nothing has been mastered
    masteredEmpty.hidden = masteredWordList.length > 0;

    // Add one list item per mastered word, e.g. "먹다 — to eat"
    for (const word of masteredWordList) {
        const item = document.createElement("li");

        const korean = document.createElement("span");
        korean.lang = "ko";
        korean.textContent = word.korean;

        // Create a button to restore a single selected word back into rotation
        const restoreWordButton = document.createElement("button");
        restoreWordButton.type = "button";
        restoreWordButton.className = "restore-word-button";
        restoreWordButton.textContent = "↺";
        restoreWordButton.title = 'Send ${word.korean} back into rotation';
        restoreWordButton.setAttribute("aria-label", 'restore ${word.korean}');
        // Add a click event listener to the restore button
        restoreWordButton.addEventListener("click", () => {
            restoreWord(word.id);
        });
        // Append the Korean word, its meaning, and the restore button to the list item
        item.append(korean, ` — ${word.meaning}`, restoreWordButton);
        masteredList.append(item);
    }
}

// Speak the current Korean word when the speaker button is clicked
speakButton.addEventListener("click", () => {
    speakKorean(words[currentIndex].korean);
});

// Click the hidden meaning to reveal it
meaningElement.addEventListener("click", revealMeaning);

// Pressing Enter while the hidden meaning has focus also reveals it
meaningElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        revealMeaning();
    }
});

// Pressing Space anywhere reveals the meaning while it's hidden
document.addEventListener("keydown", (event) => {
    // Only react to the Space bar
    if (event.code !== "Space") {
        return;
    }
    // Once the meaning is showing, let Space behave normally
    if (!meaningElement.classList.contains("is-hidden")) {
        return;
    }
    // Stop Space from scrolling the page or pressing a button
    event.preventDefault();
    // Remove focus from a button so it isn't clicked when Space is released
    document.activeElement.blur();

    revealMeaning();
});

// Keyboard shortcuts for the main actions
document.addEventListener("keydown", (event) => {
    // Leave browser and system shortcuts (like Cmd+R) alone
    if (event.metaKey || event.ctrlKey || event.altKey) {
        return;
    }
    // Holding a key down should only trigger the action once
    if (event.repeat) {
        return;
    }
    // Ignore keys while a Korean (or other) keyboard is still building a character
    if (event.isComposing) {
        return;
    }

    // event.code is the physical key, so shortcuts still work with a Korean keyboard layout
    switch (event.code) {
        case "ArrowRight":
        case "KeyN":
            // Clicking the real button reuses its logic; a disabled button ignores the click
            nextButton.click();
            break;
        case "KeyM":
            masteredButton.click();
            break;
        case "KeyS":
            // The speaker button is hidden on the completion screen and in unsupported browsers
            if (!speakButton.hidden) {
                speakButton.click();
            }
            break;
        case "KeyD":
            // Details are hidden on the completion screen
            if (!detailsElement.hidden) {
                detailsElement.open = !detailsElement.open;
            }
            break;
        case "KeyL":
            masteredSection.open = !masteredSection.open;
            break;
        default:
            // Not one of our shortcuts, so let the key behave normally
            return;
    }
    // Stop the key's default behavior (e.g. the right arrow scrolling the page)
    event.preventDefault();
});

// Calls nextWord functinon when user clicks the "Next" button and resets timer
nextButton.addEventListener("click", () => {
    nextWord();
    scheduleRotation();
});

masteredButton.addEventListener("click", () => {
    // Checks if there are any learning words left, if not, return
    if (!hasLearningWordsLeft()) {
        return;
    }
    // Variable to hold the current word's ID
    const currentWord = words[currentIndex];
    // Add the current word's ID to the mastered set
    masteredWords.add(currentWord.id);
    // Save the updated mastered words to localStorage
    persistProgression();
    // Display the next unmastered word or show completion
    nextWord();
    // Give the next word a fresh countdown
    scheduleRotation();
});

restoreButton.addEventListener("click", () => {
    // Ask before wiping progress, since this can't be undone
    if (!confirm("Restore all mastered words?")) {
        return;
    }
    masteredWords.clear(); // Clear the mastered words set

    persistProgression(); // Save the cleared set to localStorage

    startLearning(); // Restart the learning process
});

// Restores a single word from the mastered set, updating the UI and localStorage accordingly
function restoreWord(wordId) {
    // Check if we are on the completion state before restoring the word
    const wasCompleted = !hasLearningWordsLeft();

    masteredWords.delete(wordId); // Remove the word from the mastered set

    persistProgression(); // Save the updated mastered words to localStorage

    // Hide the restore button if no words are mastered
    restoreButton.hidden = masteredWords.size === 0; 

    if (wasCompleted) {
        startLearning(); // Restart the learning process if we were on the completion state
    }
}

// Checks if any words are left to learn/not mastered
function hasLearningWordsLeft(){
    // Returns true if there are any words that are not mastered,
    // false if all words are mastered
    return words.some(word => !masteredWords.has(word.id));
}

// Uses saveProgression function to save the mastered words to localStorage 
// and shows/hides the storage message based on success
function persistProgression() {
    const savedSuccessfully = saveProgression(masteredWords);
    storageMessage.hidden = savedSuccessfully; // Hide the message if save was successful, show it if not
    // Keep the mastered list in sync whenever the mastered set changes
    renderMasteredList();
}

// Updates the app to the completed/mastered state when all words have been learned
function showCompletion(){
    clearTimeout(rotationTimer); // Stop the rotation timer

    rotationTimer = null; // Clear the timer reference
    
    // Replace the previous vocabulary with completion message
    categoryElement.textContent = "DAILY KOREAN · COMPLETED";
    koreanElement.textContent = "완료!";
    meaningElement.textContent = "All words mastered.";
    // The completion text isn't something to recall, so always show it
    revealMeaning();
    // There's no word to pronounce on the completion screen
    speakButton.hidden = true;
    // Hide the details section and ensure it's closed
    detailsElement.hidden = true; // Hide the details section
    detailsElement.open = false; // Ensure the details are closed
    // Disable actions that need a active word
    nextButton.disabled = true;
    masteredButton.disabled = true;
    // Show the completion message and restore button
    completionMessage.hidden = false; // Show the completion message
    restoreButton.hidden = false; // Show the restore button
}
// Function for starting the program, displaying the first unmastered word and starting the rotation timer
function startLearning(){
    clearTimeout(rotationTimer); // Stop the rotation timer
    rotationTimer = null; // Clear the timer reference
    // Show any mastered words loaded from localStorage
    renderMasteredList();
    // Marks the first unmastered word in the list to be displayed first
    const firstUnmasteredIndex = words.findIndex(
        word => !masteredWords.has(word.id)
    );
    // Checks if all words are mastered, if so, show the completion message and return
    if (firstUnmasteredIndex === -1) {
        showCompletion(); // Show completion only when all words are mastered
        return;
    }

    // Reads the saved ID from local storage
    const savedWordId = loadCurrentWordId();
    // Goes through words and returns the position of the first word whose ID matches
    const savedIndex = words.findIndex(word => word.id === savedWordId);
    // Checks BOTH if the word has been found AND it is not been mastered
    const canResume = savedIndex !== -1 && !masteredWords.has(words[savedIndex].id);

    // Set the current index to the first unmastered word
    currentIndex = canResume ? savedIndex : firstUnmasteredIndex;
    // Update the visual card with the first unmastered word's details
    updateWordDetails();
    // Enable the next and mastered buttons for user interaction
    nextButton.disabled = false;
    masteredButton.disabled = false;
    // Start the rotation timer
    scheduleRotation();
}



// Show the first word when the page loads
startLearning();