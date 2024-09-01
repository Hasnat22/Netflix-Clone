document.querySelector('.scroll-button.left').addEventListener('click', function() {
    document.querySelector('.show').scrollBy({ left: -220, behavior: 'smooth' });
  });
  
  document.querySelector('.scroll-button.right').addEventListener('click', function() {
    document.querySelector('.show').scrollBy({ left: 220, behavior: 'smooth' });
  });
  