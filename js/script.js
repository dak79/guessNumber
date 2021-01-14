let randomNumber = Math.round(Math.random() * 50);
console.log(randomNumber);

function check() {

  let numberInput = document.querySelector('#numberInput').value;
  console.log(numberInput);

  if (numberInput > randomNumber) {
    console.log('Hint: too big, select a lower number');

  } else if (numberInput < randomNumber) {
    console.log('Hint: too small, select a bigger number');

  } else if (numberInput == randomNumber) {
    console.log('Well Done, the random number was ' + randomNumber);

  }
}

function reloadPage() {
  window.location.reload();
}
