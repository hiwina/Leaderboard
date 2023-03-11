import './styles/style.css';
// import { addScore, displayScorevalue } from './score';
// import Scoresvalue from './fetchInput.js';
import displayScorevalue from './modules/UI.js';
import addScore from './modules/AddInput.js';

const form = document.querySelector('form');
const refresh = document.getElementById('refresh');
displayScorevalue();

refresh.addEventListener('click', () => {
  displayScorevalue();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('name-input').value;
  const score = document.getElementById('score-input').value;
  if (user !== '' && score !== '') {
    const data = {
      user,
      score,
    };
    addScore(data);
    form.reset();
  }
});