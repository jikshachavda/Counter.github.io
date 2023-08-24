const count = document.getElementById('count');
const counter = document.querySelector(".counter")
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const icon = sub.querySelector('.fas')
const reset = document.getElementById('reset');

add.addEventListener('click', () => {
  count.innerHTML++;
  applyColor();
});
sub.addEventListener('click', () => {
  count.innerHTML--;
  applyColor();
});
reset.addEventListener('click', () => {
  count.innerHTML = 0;
  applyColor();
});
function applyColor() {
  if (count.innerHTML > 0) {
    counter.style.background = '#65ec7f'; // #02bb88
    count.style.color = 'white' 
    icon.style.color = 'white'
  } else if (count.innerHTML < 0) {
    counter.style.background = '#8465f1';   //#6682b0 
    count.style.color = 'white' 
    icon.style.color = 'white'
  } else {
    counter.style.background = 'white';
    count.style.color = 'black'
  }
}