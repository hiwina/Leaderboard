const scorevalue = [
  {
    Name: 'John',
    Score: 100,
  },
  {
    Name: 'John',
    Score: 100,
  },
  {
    Name: 'Peter',
    Score: 20,
  },
  {
    Name: 'Hope',
    Score: 50,
  },
  {
    Name: 'Faith',
    Score: 78,
  },
];

const viewScores = () => {
  const scoreBoardContainer = document.querySelector('#scoreslist');
  scoreBoardContainer.innerHTML = '';
  scorevalue.forEach((user) => {
    scoreBoardContainer.innerHTML += `<li>
        <p>${user.Name}: ${user.Score}</p>
        </li>`;
  });
};

exports.viewScores = viewScores;
