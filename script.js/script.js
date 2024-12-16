const questions = [
  {
    question: "Apakah hukum penggunaan teknologi untuk fatwa?",
    options: ["Diharuskan dengan syarat", "Haram", "Makruh"],
    correct: 0
  },
  {
    question: "Bolehkah solat di atas kapal terbang?",
    options: ["Boleh dengan tayamum", "Haram", "Wajib qada sahaja"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

function startGame() {
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('question-screen').classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestion];
  document.getElementById('question-text').textContent = question.question;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';

  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    optionsDiv.appendChild(button);
  });
}

function checkAnswer(index) {
  if (index === questions[currentQuestion].correct) {
    score += 10;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showFinalScore();
  }
  document.getElementById('score').textContent = score;
}

function showFinalScore() {
  document.getElementById('question-screen').classList.add('hidden');
  document.getElementById('final-score-screen').classList.remove('hidden');
  document.getElementById('final-score').textContent = score;
  document.getElementById('final-message').textContent = "Tahniah! Permainan Tamat!";
}
