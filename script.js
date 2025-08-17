const textElement = document.getElementById('typed-text');
const phrases = ["Full stack DEV Here", "Welcome to my Portfolio.",
     "Yt channel Tech aur Code"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    textElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    textElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = 100; // Adjust for faster/slower typing

  if (isDeleting) {
    typingSpeed /= 2; // Faster deletion
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    typingSpeed = 1500; // Pause at end of typing
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 500; // Pause before typing next phrase
  }

  setTimeout(typeWriter, typingSpeed);
}

document.addEventListener('DOMContentLoaded', typeWriter);