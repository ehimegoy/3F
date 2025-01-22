// Vocabulary List: You can add more words and meanings
const vocabulary = [
    // Minggu 1
    { word: "泉田", meaning: "いずみだ" },{ word: "岡田　徳夫", meaning: "おかだ　とくお" },{ word: "濱本", meaning: "はまもと" },{ word: "和田", meaning: "わだ" },{ word: "福積", meaning: "ふくずみ" },{ word: "松本　和善", meaning: "まつもと　かずよし" },{ word: "山本　朝雄", meaning: "やまもと　あさお" },{ word: "吉岡", meaning: "よしおか" },{ word: "泉　イマヨ", meaning: "いずみ　イマヨ" },{ word: "松本　和子", meaning: "まつもと　かずこ" },{ word: "上野", meaning: "うえの" },{ word: "沖野", meaning: "おきの" },{ word: "山本　仁子", meaning: "やまもと　きみこ" },{ word: "山本　鈴子", meaning: "やまもと　すずこ" },{ word: "渡邉", meaning: "わたなべ" },{ word: "上田　サトミ", meaning: "うえだ　さとみ" },{ word: "大本", meaning: "おおもと" },{ word: "永左子", meaning: "ながさこ" },{ word: "藤長", meaning: "ふじなが" },{ word: "滝川", meaning: "たきがわ" },{ word: "黒住", meaning: "くろずみ" }, { word: "中田", meaning: "なかた" },{ word: "池田", meaning: "いけだ" },{ word: "寺谷", meaning: "てらたに" },{ word: "富永", meaning: "とみなが" }, { word: "横田", meaning: "よこた" },{ word: "亀井", meaning: "かめい" },{ word: "幸崎", meaning: "こうざき" },{ word: "水元", meaning: "みずもと" }, { word: "上田　レイコ", meaning: "うえだ　レイコ" },{ word: "北岡", meaning: "きたおか" },{ word: "後藤", meaning: "ごとう" },{ word: "矢野", meaning: "やの" }, { word: "山下", meaning: "やました" },{ word: "山根", meaning: "やまね" },{ word: "脇坂", meaning: "わきさか" },{ word: "徳本", meaning: "とくもと" }, { word: "片岡", meaning: "かたおか" },{ word: "岡田　輝美子", meaning: "おかだ　きみこ" },
    
];
  
  let currentVocabulary = {};
  
  function getRandomVocabulary() {
    const randomIndex = Math.floor(Math.random() * vocabulary.length);
    return vocabulary[randomIndex];
  }
  
  function nextVocabulary() {
    // Get a random vocabulary and display the word
    currentVocabulary = getRandomVocabulary();
    document.getElementById("word").textContent = currentVocabulary.word;
  
    // Enable the "Show Meaning" button and hide "Show Vocab"
    document.getElementById("show-meaning").style.display = "inline";
    document.getElementById("show-meaning").disabled = false;
    document.getElementById("show-vocab").style.display = "none";
  }
  
  function showMeaning() {
    // Show the meaning of the current vocabulary
    document.getElementById("word").textContent = currentVocabulary.meaning;
  
    // Disable the "Show Meaning" button and show "Show Vocab"
    document.getElementById("show-meaning").style.display = "none";
    document.getElementById("show-vocab").style.display = "inline-block";
  }
  
  function showVocab() {
    // Show the vocabulary word again
    document.getElementById("word").textContent = currentVocabulary.word;
  
    // Disable the "Show Vocab" button and enable the "Show Meaning" button
    document.getElementById("show-vocab").style.display = "none";
    document.getElementById("show-meaning").style.display = "inline";
  }
  
