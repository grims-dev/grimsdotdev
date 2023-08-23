// background animation functionality

// only run if user doesn't prefer reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches || false;
if (prefersReducedMotion === false) {
  const bg = document.querySelector('.background');

  const scaleMove = 0.5;
  const scaleMoveHalf = scaleMove / 2;
  const scaleRotate = 0.75;
  const scaleRotateHalf = scaleRotate / 2;

  window.addEventListener('mousemove', (e) => {
    const x = 1 - (e.clientX / window.innerWidth);
    const y = 1 - (e.clientY / window.innerHeight);

    const xMove = (x * scaleMove) - scaleMoveHalf;
    const yMove = (y * scaleMove) - scaleMoveHalf;
    const xRotate = (x * scaleRotate) - scaleRotateHalf;
    const yRotate = (y * scaleRotate) - scaleRotateHalf;

    window.requestAnimationFrame(() => {
      bg.style.transform = `
        translateX(${xMove}em)
        translateY(${yMove}em)
        rotateX(${xRotate}deg)
        rotateY(${yRotate}deg)
      `;
    });
  });
}
