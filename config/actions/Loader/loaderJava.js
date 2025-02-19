window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  const heart = document.querySelector('.heart');
  const container = document.querySelector('.container');

  setTimeout(() => {
      const zigzag = document.createElement('div');
      zigzag.classList.add('zigzag');
      heart.appendChild(zigzag);

      setTimeout(() => {
          heart.classList.add('fall-apart');
          zigzag.classList.add('fall-apart-right');

          setTimeout(() => {
              loader.classList.add('hidden');
              setTimeout(() => {
                  loader.style.display = 'none';
                  container.style.display = 'flex';
                  setTimeout(() => {
                      container.style.opacity = 1;
                  }, 100);
              }, 1000); 
          }, 1000); 
      }, 1000); 
  }, 5000); 
});