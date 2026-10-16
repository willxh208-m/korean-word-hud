const words = [
    {
        korean: "먹다",
        meaning: "to eat; to have a small meal",
        category: "DAILY KOREAN · VERB",
        present: "먹어요",
        past: "먹었어요",
        example: "아침에 빵을 먹어요.",
        translation: "I eat bread in the morning."
    },
    {
        korean: "마시다",
        meaning: "to drink",
        category: "DAILY KOREAN · VERB",
        present: "마셔요",
        past: "마셨어요",
        example: "저는 물을 마셔요.",
        translation: "I drink water."
    },
    {
        korean: "좋다",
        meaning: "to be good; to be nice; to be pleasant",
        category: "DAILY KOREAN · ADJECTIVE",
        present: "좋아요",
        past: "좋았어요",
        example: "이 영화가 좋아요.",
        translation: "This movie is good."
    },
    {
        korean: "보다",
        meaning: "to see; to watch",
        category: "DAILY KOREAN · VERB",
        present: "봐요",
        past: "봤어요",
        example: "영화를 봐요.",
        translation: "I watch a movie."
    },
    {
        korean: "듣다",
        meaning: "to hear; to listen",
        category: "DAILY KOREAN · VERB",
        present: "들어요",
        past: "들었어요",
        example: "음악을 들어요.",
        translation: "I listen to music."
    },
    {
        korean: "주다",
        meaning: "to give",
        category: "DAILY KOREAN · VERB",
        present: "줘요",
        past: "줬어요",
        example: "친구에게 선물을 줘요.",
        translation: "I give a gift to my friend."
    },
    {
        korean: "크다",
        meaning: "to be big; to be large",
        category: "DAILY KOREAN · ADJECTIVE",
        present: "커요",
        past: "컸어요",
        example: "이 집이 커요.",
        translation: "This house is big."
    },
    {
        korean: "작다",
        meaning: "to be small; to be little",
        category: "DAILY KOREAN · ADJECTIVE",
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

