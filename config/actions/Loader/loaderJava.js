window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  const container = document.querySelector('.container');

  setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => {
          loader.style.display = 'none';
          container.style.display = 'flex';
          setTimeout(() => {
              container.style.opacity = 1;
          }, 100); 
      }, 1000); 
  }, 5000); 
});