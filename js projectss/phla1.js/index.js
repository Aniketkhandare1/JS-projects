console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const h1   = document.querySelector('#heading');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
      h1.innerText="COLOR ="  +   e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
      h1.innerText="COLOR ="  +   e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor =  e.target.id;
      h1.innerText="COLOR="  +   e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor =e.target.id;
      h1.innerText="COLOR ="  +   e.target.id;
    }
    if (e.target.id === 'aqua') {
        body.style.backgroundColor =e.target.id;
        h1.innerText="COLOR ="  +   e.target.id;
      }
    
  });
});