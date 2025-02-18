window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  const heart = document.querySelector('.heart');
  const container = document.querySelector('.container');

  setTimeout(() => {
      heart.classList.add('break');
      setTimeout(() => {
          loader.classList.add('hidden');
          setTimeout(() => {
              loader.style.display = 'none';
              container.style.display = 'flex';
              setTimeout(() => {
                  container.style.opacity = 1;
              }, 100); // Small delay to ensure display change is applied
          }, 1000); // Duration of the fade-out and shrink animation
      }, 1000); // Duration of the heart break animation
  }, 5000); // Display loader for 5 seconds
});