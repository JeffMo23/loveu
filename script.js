const alternatives = [
  {text:"", images:"images/cat-01.gif"},
  {text:"Te prometo que te encantara ", images:"images/cat-02.gif"},
  {text:"Piénsalo de nuevo", images:"images/cat-03.gif"},
  {text:"Vamos, atrévete a decir que sí", images:"images/cat-04.gif"},
  {text:"Que el miedo no te detenga", images:"images/cat-05.gif"}
];
const ohyes = {text:"Tal vez no pueda coserte un vestido nuevo para el domingotal vez no esté a tu lado apoyándote en eso que haces, o quizás no esté simplemente viéndote sonreír... Pero siempre estaré aquí, en cada palabra que te digo, en cada pensamiento que te dedico. Lo más importante es que disfrutes la asamblea, que vivas cada momento con alegría, sabiendo que te amo con todo mi corazón. Eres especial para mí, y siempre estaré a tu lado, aunque sea desde la distancia.", images:"images/cat-yes.gif"};
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;
function updateDisplay(item) {
  console.log(item);
  cat.src = item.images;
  text.innerHTML = item.text;
}

errorButton.addEventListener('click', () => {
  count = 0;
  updateDisplay(alternatives[count]);
  buttons.forEach(btn => btn.style.display = 'inline-block');
  errorButton.style.display = 'none';
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
      if(button.textContent === 'Si'){  // Cambiar 'SÍ' a 'Si'
          updateDisplay(ohyes);
          buttons.forEach(btn => btn.style.display = 'none');
      }
      if (button.textContent === 'No'){  // Cambiar 'NO' a 'No'
          count++;
          if(count < alternatives.length){
              updateDisplay(alternatives[count]);
          } else {
              buttons.forEach(btn => btn.style.display = 'none');
              errorButton.style.display = 'inline-block';
          }
      }
  });
});
