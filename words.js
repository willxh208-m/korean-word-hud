// words.js
// The vocabulary list. Each word needs a unique, permanent id.
// level uses the National Institute of Korean Language (국립국어원) learner
// vocabulary grades: "A" = beginner, "B" = intermediate, "C" = advanced.

const words = [
    {
        id: "word_0001",
        korean: "먹다",
        meaning: "to eat",
        partOfSpeech: "VERB",
        level: "A",
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
        level: "A",
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
        level: "A",
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
        level: "A",
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
        level: "A",
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
        level: "A",
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
        level: "A",
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
        level: "A",
        present: "작아요",
        past: "작았어요",
        example: "이 가방이 작아요.",
        translation: "This bag is small."
    },
    {
        id: "word_0009",
        korean: "가다",
        meaning: "to go",
        partOfSpeech: "VERB",
        level: "A",
        present: "가요",
        past: "갔어요",
        example: "저는 학교에 가요.",
        translation: "I go to school."
    },
    {
        id: "word_0010",
        korean: "오다",
        meaning: "to come",
        partOfSpeech: "VERB",
        level: "A",
        present: "와요",
        past: "왔어요",
        example: "친구가 집에 와요.",
        translation: "My friend comes home."
    },
    {
        id: "word_0011",
        korean: "하다",
        meaning: "to do",
        partOfSpeech: "VERB",
        level: "A",
        present: "해요",
        past: "했어요",
        example: "숙제를 해요.",
        translation: "I do my homework."
    },
    {
        id: "word_0012",
        korean: "있다",
        meaning: "to be; to have",
        partOfSpeech: "VERB",
        level: "A",
        present: "있어요",
        past: "있었어요",
        example: "책이 가방에 있어요.",
        translation: "The book is in the bag."
    },
    {
        id: "word_0013",
        korean: "없다",
        meaning: "to not be; to not have",
        partOfSpeech: "VERB",
        level: "A",
        present: "없어요",
        past: "없었어요",
        example: "시간이 없어요.",
        translation: "I don't have time."
    },
    {
        id: "word_0014",
        korean: "자다",
        meaning: "to sleep",
        partOfSpeech: "VERB",
        level: "A",
        present: "자요",
        past: "잤어요",
        example: "밤에 자요.",
        translation: "I sleep at night."
    },
    {
        id: "word_0015",
        korean: "읽다",
        meaning: "to read",
        partOfSpeech: "VERB",
        level: "A",
        present: "읽어요",
        past: "읽었어요",
        example: "책을 읽어요.",
        translation: "I read a book."
    },
    {
        id: "word_0016",
        korean: "쓰다",
        meaning: "to write",
        partOfSpeech: "VERB",
        level: "A",
        present: "써요",
        past: "썼어요",
        example: "이름을 써요.",
        translation: "I write my name."
    },
    {
        id: "word_0017",
        korean: "사다",
        meaning: "to buy",
        partOfSpeech: "VERB",
        level: "A",
        present: "사요",
        past: "샀어요",
        example: "과일을 사요.",
        translation: "I buy fruit."
    },
    {
        id: "word_0018",
        korean: "만나다",
        meaning: "to meet",
        partOfSpeech: "VERB",
        level: "A",
        present: "만나요",
        past: "만났어요",
        example: "친구를 만나요.",
        translation: "I meet a friend."
    },
    {

        id: "word_0019",
        korean: "사과",
        meaning: "apple",
        partOfSpeech: "NOUN",
        level: "A",
        example: "사과를 먹어요.",
        translation: "I eat an apple."
    },
    {
        id: "word_0020",
        korean: "배우다",
        meaning: "to learn",
        partOfSpeech: "VERB",
        level: "A",
        present: "배워요",
        past: "배웠어요",
        example: "한국어를 배워요.",
        translation: "I learn Korean."
    },
    {
        id: "word_0021",
        korean: "가르치다",
        meaning: "to teach",
        partOfSpeech: "VERB",
        level: "A",
        present: "가르쳐요",
        past: "가르쳤어요",
        example: "선생님이 한국어를 가르쳐요.",
        translation: "The teacher teaches Korean."
    },
    {
        id: "word_0022",
        korean: "일하다",
        meaning: "to work",
        partOfSpeech: "VERB",
        level: "A",
        present: "일해요",
        past: "일했어요",
        example: "저는 회사에서 일해요.",
        translation: "I work at a company."
    },
    {
        id: "word_0023",
        korean: "공부하다",
        meaning: "to study",
        partOfSpeech: "VERB",
        level: "A",
        present: "공부해요",
        past: "공부했어요",
        example: "도서관에서 공부해요.",
        translation: "I study at the library."
    },
    {
        id: "word_0024",
        korean: "알다",
        meaning: "to know",
        partOfSpeech: "VERB",
        level: "A",
        present: "알아요",
        past: "알았어요",
        example: "그 사람을 알아요.",
        translation: "I know that person."
    },
    {
        id: "word_0025",
        korean: "모르다",
        meaning: "to not know",
        partOfSpeech: "VERB",
        level: "A",
        present: "몰라요",
        past: "몰랐어요",
        example: "저는 그 단어를 몰라요.",
        translation: "I don't know that word."
    },
    {
        id: "word_0026",
        korean: "살다",
        meaning: "to live",
        partOfSpeech: "VERB",
        level: "A",
        present: "살아요",
        past: "살았어요",
        example: "서울에 살아요.",
        translation: "I live in Seoul."
    },
    {
        id: "word_0027",
        korean: "앉다",
        meaning: "to sit",
        partOfSpeech: "VERB",
        level: "A",
        present: "앉아요",
        past: "앉았어요",
        example: "의자에 앉아요.",
        translation: "I sit on the chair."
    },
    {
        id: "word_0028",
        korean: "일어나다",
        meaning: "to get up; to wake up",
        partOfSpeech: "VERB",
        level: "A",
        present: "일어나요",
        past: "일어났어요",
        example: "아침 일곱 시에 일어나요.",
        translation: "I get up at seven in the morning."
    },
    {
        id: "word_0029",
        korean: "기다리다",
        meaning: "to wait",
        partOfSpeech: "VERB",
        level: "A",
        present: "기다려요",
        past: "기다렸어요",
        example: "버스를 기다려요.",
        translation: "I'm waiting for the bus."
    },
    {
        id: "word_0030",
        korean: "걷다",
        meaning: "to walk",
        partOfSpeech: "VERB",
        level: "A",
        present: "걸어요",
        past: "걸었어요",
        example: "공원에서 걸어요.",
        translation: "I walk in the park."
    },
    {
        id: "word_0031",
        korean: "만들다",
        meaning: "to make",
        partOfSpeech: "VERB",
        level: "A",
        present: "만들어요",
        past: "만들었어요",
        example: "엄마가 김치를 만들어요.",
        translation: "Mom makes kimchi."
    },
    {
        id: "word_0032",
        korean: "좋아하다",
        meaning: "to like",
        partOfSpeech: "VERB",
        level: "A",
        present: "좋아해요",
        past: "좋아했어요",
        example: "저는 커피를 좋아해요.",
        translation: "I like coffee."
    },
    {
        id: "word_0033",
        korean: "타다",
        meaning: "to ride; to take (a vehicle)",
        partOfSpeech: "VERB",
        level: "A",
        present: "타요",
        past: "탔어요",
        example: "지하철을 타요.",
        translation: "I take the subway."
    },
    {
        id: "word_0034",
        korean: "찾다",
        meaning: "to find; to look for",
        partOfSpeech: "VERB",
        level: "A",
        present: "찾아요",
        past: "찾았어요",
        example: "열쇠를 찾아요.",
        translation: "I'm looking for my keys."
    },
    {
        id: "word_0035",
        korean: "받다",
        meaning: "to receive",
        partOfSpeech: "VERB",
        level: "A",
        present: "받아요",
        past: "받았어요",
        example: "친구한테서 편지를 받아요.",
        translation: "I receive a letter from a friend."
    },
    {
        id: "word_0036",
        korean: "말하다",
        meaning: "to speak; to say",
        partOfSpeech: "VERB",
        level: "A",
        present: "말해요",
        past: "말했어요",
        example: "천천히 말해 주세요.",
        translation: "Please speak slowly."
    },
    {
        id: "word_0037",
        korean: "열다",
        meaning: "to open",
        partOfSpeech: "VERB",
        level: "A",
        present: "열어요",
        past: "열었어요",
        example: "창문을 열어요.",
        translation: "I open the window."
    },
    {
        id: "word_0038",
        korean: "닫다",
        meaning: "to close",
        partOfSpeech: "VERB",
        level: "A",
        present: "닫아요",
        past: "닫았어요",
        example: "문을 닫아요.",
        translation: "I close the door."
    },
    {
        id: "word_0039",
        korean: "씻다",
        meaning: "to wash",
        partOfSpeech: "VERB",
        level: "A",
        present: "씻어요",
        past: "씻었어요",
        example: "손을 씻어요.",
        translation: "I wash my hands."
    },
    {
        id: "word_0040",
        korean: "많다",
        meaning: "to be many; to be a lot",
        partOfSpeech: "ADJECTIVE",
        level: "A",
        present: "많아요",
        past: "많았어요",
        example: "사람이 많아요.",
        translation: "There are a lot of people."
    },
    {
        id: "word_0041",
        korean: "적다",
        meaning: "to be few; to be little",
        partOfSpeech: "ADJECTIVE",
        level: "A",
        present: "적어요",
        past: "적었어요",
        example: "오늘은 손님이 적어요.",
        translation: "There are few customers today."
    },
    {
        id: "word_0042",
        korean: "덥다",
        meaning: "to be hot (weather)",
        partOfSpeech: "ADJECTIVE",
        level: "A",
        present: "더워요",
        past: "더웠어요",
        example: "여름은 더워요.",
        translation: "Summer is hot."
    },
    {
        id: "word_0043",
        korean: "춥다",
        meaning: "to be cold (weather)",
        partOfSpeech: "ADJECTIVE",
        level: "A",
        present: "추워요",
        past: "추웠어요",
        example: "오늘 날씨가 추워요.",
        translation: "The weather is cold today."
    },
    {
        id: "word_0044",
        korean: "맛있다",
        meaning: "to be delicious",
        partOfSpeech: "ADJECTIVE",
        level: "A",
        present: "맛있어요",
        past: "맛있었어요",
        example: "이 음식은 맛있어요.",
        translation: "This food is delicious."
    },
    {
        id: "word_0045",
        korean: "바쁘다",
        meaning: "to be busy",
        partOfSpeech: "ADJECTIVE",
        level: "A",
        present: "바빠요",
        past: "바빴어요",
        example: "요즘 너무 바빠요.",
        translation: "I'm very busy these days."
    },
    {
        id: "word_0046",
        korean: "비싸다",
        meaning: "to be expensive",
        partOfSpeech: "ADJECTIVE",
        level: "A",
        present: "비싸요",
        past: "비쌌어요",
        example: "이 가방은 비싸요.",
        translation: "This bag is expensive."
    },
    {
        id: "word_0047",
        korean: "싸다",
        meaning: "to be cheap",
        partOfSpeech: "ADJECTIVE",
        level: "A",
        present: "싸요",
        past: "쌌어요",
        example: "시장 과일이 싸요.",
        translation: "Fruit at the market is cheap."
    },
    {
        id: "word_0048",
        korean: "예쁘다",
        meaning: "to be pretty",
        partOfSpeech: "ADJECTIVE",
        level: "A",
        present: "예뻐요",
        past: "예뻤어요",
        example: "꽃이 예뻐요.",
        translation: "The flowers are pretty."
    },
    {
        id: "word_0049",
        korean: "어렵다",
        meaning: "to be difficult",
        partOfSpeech: "ADJECTIVE",
        level: "A",
        present: "어려워요",
        past: "어려웠어요",
        example: "한국어 문법이 어려워요.",
        translation: "Korean grammar is difficult."
    },
    {
        id: "word_0050",
        korean: "쉽다",
        meaning: "to be easy",
        partOfSpeech: "ADJECTIVE",
        level: "A",
        present: "쉬워요",
        past: "쉬웠어요",
        example: "이 문제는 쉬워요.",
        translation: "This problem is easy."
    },
    {
        id: "word_0051",
        korean: "아프다",
        meaning: "to hurt; to be sick",
        partOfSpeech: "ADJECTIVE",
        level: "A",
        present: "아파요",
        past: "아팠어요",
        example: "머리가 아파요.",
        translation: "I have a headache."
    },
    {
        id: "word_0052",
        korean: "물",
        meaning: "water",
        partOfSpeech: "NOUN",
        level: "A",
        example: "물 한 잔 주세요.",
        translation: "A glass of water, please."
    },
    {
        id: "word_0053",
        korean: "밥",
        meaning: "cooked rice; meal",
        partOfSpeech: "NOUN",
        level: "A",
        example: "같이 밥을 먹어요.",
        translation: "Let's eat together."
    },
    {
        id: "word_0054",
        korean: "집",
        meaning: "house; home",
        partOfSpeech: "NOUN",
        level: "A",
        example: "집에 가요.",
        translation: "I'm going home."
    },
    {
        id: "word_0055",
        korean: "학교",
        meaning: "school",
        partOfSpeech: "NOUN",
        level: "A",
        example: "학교에 가요.",
        translation: "I go to school."
    },
    {
        id: "word_0056",
        korean: "친구",
        meaning: "friend",
        partOfSpeech: "NOUN",
        level: "A",
        example: "친구와 영화를 봐요.",
        translation: "I watch a movie with a friend."
    },
    {
        id: "word_0057",
        korean: "사람",
        meaning: "person",
        partOfSpeech: "NOUN",
        level: "A",
        example: "그 사람은 의사예요.",
        translation: "That person is a doctor."
    },
    {
        id: "word_0058",
        korean: "시간",
        meaning: "time; hour",
        partOfSpeech: "NOUN",
        level: "A",
        example: "시간이 없어요.",
        translation: "I don't have time."
    },
    {
        id: "word_0059",
        korean: "오늘",
        meaning: "today",
        partOfSpeech: "NOUN",
        level: "A",
        example: "오늘은 금요일이에요.",
        translation: "Today is Friday."
    },
    {
        id: "word_0060",
        korean: "내일",
        meaning: "tomorrow",
        partOfSpeech: "NOUN",
        level: "A",
        example: "내일 만나요.",
        translation: "See you tomorrow."
    },
    {
        id: "word_0061",
        korean: "어제",
        meaning: "yesterday",
        partOfSpeech: "NOUN",
        level: "A",
        example: "어제 영화를 봤어요.",
        translation: "I watched a movie yesterday."
    },
    {
        id: "word_0062",
        korean: "돈",
        meaning: "money",
        partOfSpeech: "NOUN",
        level: "A",
        example: "돈이 없어요.",
        translation: "I don't have money."
    },
    {
        id: "word_0063",
        korean: "책",
        meaning: "book",
        partOfSpeech: "NOUN",
        level: "A",
        example: "책을 읽어요.",
        translation: "I read a book."
    },
    {
        id: "word_0064",
        korean: "선생님",
        meaning: "teacher",
        partOfSpeech: "NOUN",
        level: "A",
        example: "우리 선생님은 친절해요.",
        translation: "Our teacher is kind."
    },
    {
        id: "word_0065",
        korean: "회사",
        meaning: "company; office",
        partOfSpeech: "NOUN",
        level: "A",
        example: "회사에 다녀요.",
        translation: "I work at a company."
    },
    {
        id: "word_0066",
        korean: "음식",
        meaning: "food",
        partOfSpeech: "NOUN",
        level: "A",
        example: "한국 음식을 좋아해요.",
        translation: "I like Korean food."
    },
    {
        id: "word_0067",
        korean: "이름",
        meaning: "name",
        partOfSpeech: "NOUN",
        level: "A",
        example: "이름이 뭐예요?",
        translation: "What is your name?"
    },
    {
        id: "word_0068",
        korean: "날씨",
        meaning: "weather",
        partOfSpeech: "NOUN",
        level: "A",
        example: "날씨가 좋아요.",
        translation: "The weather is nice."
    },
    {
        id: "word_0069",
        korean: "가족",
        meaning: "family",
        partOfSpeech: "NOUN",
        level: "A",
        example: "우리 가족은 네 명이에요.",
        translation: "There are four people in my family."
    }
];
