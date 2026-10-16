const words = [
    {
        korean: "먹다",
        meaning: "to eat; to have a small meal",
        partOfSpeech: "VERB",
        present: "먹어요",
        past: "먹었어요",
        example: "아침에 빵을 먹어요.",
        translation: "I eat bread in the morning."
    },
    {
        korean: "마시다",
        meaning: "to drink",
        partOfSpeech: "VERB",
        present: "마셔요",
        past: "마셨어요",
        example: "저는 물을 마셔요.",
        translation: "I drink water."
    },
    {
        korean: "좋다",
        meaning: "to be good; to be nice; to be pleasant",
        partOfSpeech: "ADJECTIVE",
        present: "좋아요",
        past: "좋았어요",
        example: "이 영화가 좋아요.",
        translation: "This movie is good."
    },
    {
        korean: "보다",
        meaning: "to see; to watch",
        partOfSpeech: "VERB",
        present: "봐요",
        past: "봤어요",
        example: "영화를 봐요.",
        translation: "I watch a movie."
    },
    {
        korean: "듣다",
        meaning: "to hear; to listen",
        partOfSpeech: "VERB",
        present: "들어요",
        past: "들었어요",
        example: "음악을 들어요.",
        translation: "I listen to music."
    },
    {
        korean: "주다",
        meaning: "to give",
        partOfSpeech: "VERB",
        present: "줘요",
        past: "줬어요",
        example: "친구에게 선물을 줘요.",
        translation: "I give a gift to my friend."
    },
    {
        korean: "크다",
        meaning: "to be big; to be large",
        partOfSpeech: "ADJECTIVE",
        present: "커요",
        past: "컸어요",
        example: "이 집이 커요.",
        translation: "This house is big."
    },
    {
        korean: "작다",
        meaning: "to be small; to be little",
        partOfSpeech: "ADJECTIVE",
        present: "작아요",
        past: "작았어요",
        example: "이 가방이 작아요.",
        translation: "This bag is small."
    }
];

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

}

// Start each new word with details hidden
detailsElement.open = false;

// Timer to automatically move to the next word
// Counted in miliseconds, so 5000 = 5 seconds
const rotationInterval = 15 * 60 * 1000; // 15 minutes

// Rememeber the timer so we can reset it
let rotationTimer = null;

// Move to the next word and update the visual card
function nextWord(){
    currentIndex = (currentIndex + 1) % words.length; // Loop back to the start if at the end
    updateWordDetails();
}
// Start a fresh countdown before changing the word
function scheduleRotation(){
    // Clear any existing timer
    clearTimeout(rotationTimer);

    rotationTimer = setTimeout(() => {
        nextWord();

        // Schedule the next rotation after changing the word
        scheduleRotation();
    }, rotationInterval);
}

// Calls nextWord functinon when user clicks the "Next" button and resets timer
nextButton.addEventListener("click", () => {
    nextWord();
    scheduleRotation();
});

// Show the first word when the page loads
updateWordDetails();
scheduleRotation();