// Reusable quiz: reads the session key from <main data-session="...">
// and the questions from questions.js.
(function () {
  var main = document.querySelector('[data-session]');
  if (!main) return;

  var questions = (window.QUIZZES || {})[main.dataset.session] || [];
  var letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  var idx = 0, score = 0, answered = false;

  var el = function (id) { return document.getElementById(id); };
  var card = el('quiz-card'), result = el('result');
  var num = el('q-num'), total = el('q-total'), scoreEl = el('q-score');
  var bar = el('progress-bar'), questionEl = el('question'), choicesEl = el('choices');
  var feedback = el('feedback'), fbBox = el('feedback-box'), fbTitle = el('feedback-title'), fbWhy = el('feedback-why');
  var nextBtn = el('next'), finalScore = el('final-score'), finalMsg = el('final-msg');

  function setProgress() {
    bar.style.width = ((idx + (answered ? 1 : 0)) / questions.length * 100) + '%';
  }

  function render() {
    var q = questions[idx];
    answered = false;
    num.textContent = idx + 1;
    total.textContent = questions.length;
    scoreEl.textContent = score;
    questionEl.textContent = q.q;
    feedback.hidden = true;
    choicesEl.innerHTML = '';

    q.choices.forEach(function (text, i) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'choice';
      btn.innerHTML = '<span class="choice-letter"></span><span class="choice-text"></span><span class="choice-mark"></span>';
      btn.querySelector('.choice-letter').textContent = letters[i];
      btn.querySelector('.choice-text').textContent = text;
      btn.addEventListener('click', function () { pick(i); });
      choicesEl.appendChild(btn);
    });
    setProgress();
  }

  function pick(i) {
    if (answered) return;
    answered = true;
    var q = questions[idx];
    var correct = i === q.answer;
    if (correct) score++;
    scoreEl.textContent = score;

    Array.prototype.forEach.call(choicesEl.children, function (btn, j) {
      btn.disabled = true;
      if (j === q.answer) {
        btn.classList.add('correct');
        btn.querySelector('.choice-mark').textContent = 'Correct answer';
      } else if (j === i) {
        btn.classList.add('wrong');
        btn.querySelector('.choice-mark').textContent = 'Your answer';
      }
    });

    fbBox.className = 'feedback-box ' + (correct ? 'correct' : 'wrong');
    fbTitle.textContent = correct ? 'Correct!' : 'Not quite.';
    fbWhy.textContent = q.why;
    nextBtn.textContent = idx + 1 >= questions.length ? 'See my score' : 'Next question';
    feedback.hidden = false;
    setProgress();
    nextBtn.focus();
  }

  function finish() {
    card.hidden = true;
    result.hidden = false;
    var n = questions.length;
    finalScore.textContent = score + ' / ' + n;
    finalMsg.textContent = score === n ? 'Perfect score. You could teach this session.'
      : score >= n - 2 ? 'Great job. Replay to catch the ones you missed.'
      : 'Good start. Go through the slides again and give it another try.';
  }

  nextBtn.addEventListener('click', function () {
    if (idx + 1 >= questions.length) finish();
    else { idx++; render(); }
  });

  el('replay').addEventListener('click', function () {
    idx = 0; score = 0;
    result.hidden = true;
    card.hidden = false;
    render();
  });

  if (questions.length) render();
})();
