var buttonE = document.getElementById('playE')
var buttonA = document.getElementById('playA')
var buttonD = document.getElementById('playD')
var buttonG = document.getElementById('playG')



buttonE.addEventListener('click', function(){
  buttonE.play();
  buttonA.pause();
  buttonD.pause();
  buttonG.pause();
});

buttonA.addEventListener('click', function(){
  buttonE.pause();
  buttonA.play();
  buttonD.pause();
  buttonG.pause();
});

buttonD.addEventListener('click', function(){
  buttonE.pause();
  buttonA.pause();
  buttonD.play();
  buttonG.pause();
});

buttonG.addEventListener('click', function(){
  buttonE.pause();
  buttonA.pause();
  buttonD.pause();
  buttonG.play();
});
