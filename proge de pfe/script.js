const spaElements = document.querySelectorAll('.spa');

spaElements.forEach((spa) => {
  const value = parseInt(spa.getAttribute('data-value')); 
  let counter = 0;
  const speed = 5;
  let isAnimating = false; 
  let isInView = false; 

  spa.textContent = 0;

  function updateCounter() {
    counter += speed;
    spa.textContent = counter;

    if (counter >= value) {
      clearInterval(intervalId); 
      spa.textContent = value; 
      isAnimating = false; 
    }
  }

  let intervalId = null;

  window.addEventListener('scroll', () => {
    const rect = spa.getBoundingClientRect();  
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0; 

    if (isVisible && !isInView) {
      isInView = true;
      if (!isAnimating) {
        isAnimating = true; 
        intervalId = setInterval(updateCounter, 16); 
      }
    } else if (!isVisible && isInView) {
      isInView = false; 
      clearInterval(intervalId); 
    }
  });
});
