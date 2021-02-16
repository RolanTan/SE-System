document.getElementById('createAcc').addEventListener('click',
function() {
  document.querySelector('.bg-modal').style.display = 'flex';

  document.querySelector('.login-body').style.filter = 'blur(30px)';
});

document.getElementById('close').addEventListener('click',
function() {
  document.querySelector('.bg-modal').style.display = 'none';

  
  document.querySelector('.login-body').style.filter = 'none';
});