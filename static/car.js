  let translateX = -50; // Initial translateX value

  // Event listener for the keydown event
  document.addEventListener('keydown', (event) => {
    const carElement = document.querySelector('article.car');
    
    if (!carElement) return; // Exit if the .car element is not found

    // Check if the pressed key is the right arrow key
    if (event.key === 'ArrowRight') {
      translateX = Math.min(translateX + 10, 100); // Increase by 10%, max 100%
    }

    // Check if the pressed key is the left arrow key
    if (event.key === 'ArrowLeft') {
      translateX = Math.max(translateX - 10, -200); // Decrease by 10%, min 0%
      }
      
    // Check if the pressed key is the right arrow key
    if (event.key === 'd') {
      translateX = Math.min(translateX + 10, 100); // Increase by 10%, max 100%
    }

    // Check if the pressed key is the left arrow key
    if (event.key === 'a') {
      translateX = Math.max(translateX - 10, -200); // Decrease by 10%, min 0%
    }

    // Check if the spacebar is pressed
    if (event.code === 'Space') {
      carElement.classList.add('jump'); // Add the 'jump' class
      setTimeout(() => {
        carElement.classList.remove('jump'); // Remove the 'jump' class after 500ms
      }, 500); // Adjust the duration as needed
    }

    // Apply the updated translateX as a CSS variable
    carElement.style.setProperty('--translateX', `${translateX}%`);
  });