// background animation functionality

// only run if user doesn't have motion settings
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion === false || prefersReducedMotion === undefined) {
    let bg = document.querySelector('.background');

    let scaleMove = 2.5;
    let scaleMoveHalf = scaleMove / 2;
    let scaleRotate = 4;
    let scaleRotateHalf = scaleRotate / 2;

    window.addEventListener('mousemove', e => {
        let x = 1 - e.clientX / window.innerWidth;
        let y = 1 - e.clientY / window.innerHeight;

        let xMove = (x * scaleMove) - scaleMoveHalf;
        let yMove = (y * scaleMove) - scaleMoveHalf;

        let xRotate = (x * scaleRotate) - scaleRotateHalf;
        let yRotate = (y * scaleRotate) - scaleRotateHalf;

        window.requestAnimationFrame(function() {
            bg.style.transform = `
            translateX(${xMove}em)
            translateY(${yMove}em)
            rotateX(${xRotate}deg)
            rotateY(${yRotate}deg)
        `;
        });
    });
}