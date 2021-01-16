let randomNumber = Math.round(Math.random() * 50);

function check() {

  let numberInput = document.querySelector('#numberInput').value;

  if (numberInput > randomNumber) {
    document.querySelector('#resultHint').innerHTML = ('Too big, select a lower number');

  } else if (numberInput < randomNumber) {
    document.querySelector('#resultHint').innerHTML = ('Too small, select a bigger number');

  } else if (numberInput == randomNumber) {
    document.querySelector('#resultHint').innerHTML = ('Well Done. The random number was: ' + randomNumber);
  }
}

function reloadPage() {
  window.location.reload();
}
