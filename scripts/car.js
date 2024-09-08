  document.addEventListener('keydown', (event) => {
    if (event.key === 'd' || event.key === 'ArrowRight') {
        if (!isMoving) {
            isMoving = true;
            moveInterval = setInterval(() => {
                if (currentPosition < maxPosition) {
                    currentPosition += 1;  // Increase by 1% on each interval
                    car.style.transform = `translateX(${currentPosition}%)`;
                }
            }, 50);  // Move every 50ms (adjust as needed for smoothness)
        }
    }
});

  document.addEventListener('keyup', (event) => {
      if (event.key === 'd' || event.key === 'ArrowRight') {
          isMoving = false;
          clearInterval(moveInterval);  // Stop the movement
      }
  });