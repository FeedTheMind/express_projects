var greet = document.getElementsByClassName('name')[0];

greet.addEventListener('keypress', function (event) {
  if (event.charCode === 13 && greet.value) {
    alert("Hello. You entered: " + greet.value);
  }
});

