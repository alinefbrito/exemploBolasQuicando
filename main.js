// gerencia o Canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth -5;
const height = canvas.height = window.innerHeight -5;
console.log(width);
console.log(height);
// gera um número aleatório

function random(min, max) {
    rdn = Math.random() * (max - min + 1);
    var r = Math.floor( rdn ) + min;
    //console.log(r);
  return r;
}

// gera uma cor aleatória

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}


//define um vetor de bolhas
const bolhas = [];
nbolhas = random(10, 100);
while (bolhas.length < nbolhas) {
   const size = random(10,20);
   const bolha = new Bolha(
      // posição de sempre uma bolha de distância
      // fora das bordas para evitar erros de desenho
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-6,6),
      random(-6,6),
      randomRGB(),
      size
   );

   //atualiza o vetor
  bolhas.push(bolha);
}

//realiza um loop em todas as bolhas geradas
function loop() {
   ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
   ctx.fillRect(0, 0,  width, height);

   for (const bolha of bolhas) {
    bolha.draw();
    bolha.update();
    bolha.collisionDetect(bolhas);
   }

   requestAnimationFrame(loop);
}

loop();
