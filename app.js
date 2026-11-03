// app.js
// This file handles the logic for displaying Korean words and their details, 
// as well as managing the rotation of words over time.

const words = [
    {
        id: "word_0001",
        korean: "먹다",
        meaning: "to eat; to have a small meal",
        partOfSpeech: "VERB",
        present: "먹어요",
        past: "먹었어요",
        example: "아침에 빵을 먹어요.",
        translation: "I eat bread in the morning."
    },
    {
        id: "word_0002",
        korean: "마시다",
        meaning: "to drink",
        partOfSpeech: "VERB",
        present: "마셔요",
        past: "마셨어요",
        example: "저는 물을 마셔요.",
        translation: "I drink water."
    },
    {
        id: "word_0003",
        korean: "좋다",
        meaning: "to be good; to be nice; to be pleasant",
        partOfSpeech: "ADJECTIVE",
        present: "좋아요",
        past: "좋았어요",
        example: "이 영화가 좋아요.",
        translation: "This movie is good."
    },
    {
        id: "word_0004",
        korean: "보다",
        meaning: "to see; to watch",
        partOfSpeech: "VERB",
        present: "봐요",
        past: "봤어요",
        example: "영화를 봐요.",
        translation: "I watch a movie."
    },
    {
        id: "word_0005",
        korean: "듣다",
        meaning: "to hear; to listen",
        partOfSpeech: "VERB",
        present: "들어요",
        past: "들었어요",
        example: "음악을 들어요.",
        translation: "I listen to music."
    },
    {
        id: "word_0006",
        korean: "주다",
        meaning: "to give",
        partOfSpeech: "VERB",
        present: "줘요",
        past: "줬어요",
        example: "친구에게 선물을 줘요.",
        translation: "I give a gift to my friend."
    },
    {
        id: "word_0007",
        korean: "크다",
        meaning: "to be big; to be large",
        partOfSpeech: "ADJECTIVE",
        present: "커요",
        past: "컸어요",
        example: "이 집이 커요.",
        translation: "This house is big."
    },
    {
        id: "word_0008",
        korean: "작다",
        meaning: "to be small; to be little",
        partOfSpeech: "ADJECTIVE",
        present: "작아요",
        past: "작았어요",
        example: "이 가방이 작아요.",
        translation: "This bag is small."
    }
];

const masteredWords = loadProgression(); // Load the mastered words from localStorage

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

// Function to update the displayed word details
function updateWordDetails() {
    const currentWord = words[currentIndex];

    categoryElement.textContent = `DAILY KOREAN · ${currentWord.partOfSpeech.toUpperCase()}`;

    koreanElement.textContent = currentWord.korean;
    meaningElement.textContent = currentWord.meaning;
    presentElement.textContent = currentWord.present;
    pastElement.textContent = currentWord.past;
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

        item.append(korean, ` — ${word.meaning}`);
        masteredList.append(item);
    }
}

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
    // Set the current index to the first unmastered word
    currentIndex = firstUnmasteredIndex;
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