const items = document.querySelectorAll('.timeline-item');

setInterval(createHeart, 600);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

items.forEach(item => observer.observe(item));

/* FLOATING HEARTS */
const heartContainer = document.getElementById('heart-container');
const hearts = ['🩷', '🤍'];

function createHeart() {
  const heart = document.createElement('span');
  heart.classList.add('floating-heart');
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

  // Random horizontal position
  heart.style.left = Math.random() * 90 + 5 + 'vw';

  // Random size
  const size = Math.random() * 50 + 80;
  heart.style.fontSize = size + 'px';

  // Random animation duration
  const duration = Math.random() * 4 + 6;
  heart.style.animationDuration = duration + 's';

  heartContainer.appendChild(heart);

  // Remove after animation
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

const photoFrames = document.querySelectorAll('.photo-frame');

function createSparkle(frame) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');

  const rect = frame.getBoundingClientRect();

  sparkle.style.left = Math.random() * rect.width + 'px';
  sparkle.style.top = Math.random() * rect.height + 'px';

  frame.style.position = 'relative';
  frame.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 3000);
}

// Gentle sparkle loop
photoFrames.forEach(frame => {
  setInterval(() => createSparkle(frame), 600);
});

/* HEARTS ON PHOTO HOVER */
const heartEmojis = ['❤️', '💖', '💕'];

photoFrames.forEach(frame => {
  frame.addEventListener('mousemove', e => {
    if (Math.random() > 0.92) {
      const heart = document.createElement('span');
      heart.classList.add('hover-heart');
      heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

      const rect = frame.getBoundingClientRect();
      heart.style.left = e.clientX - rect.left + 'px';
      heart.style.top = e.clientY - rect.top + 'px';

      frame.appendChild(heart);

      setTimeout(() => heart.remove(), 1200);
    }
  });
});


const typewriterText = `
Im so grateful to be with you for 9 months now. A lot can happen within 9 months, like a baby. Wild example, I know. 
Really, thank you for dealing with my incompetence and foreignness. Life has been going way better than I have ever expected. 
You are like a new chapter to me in this life. My whole life and decisions have changed so much. Im so glad to have moved here, and as you know, that's very important to me. 
Im sorry that Im incapable of making masterpieces, but you are gonna have to deal with the nerdy and not so artsy side of this man. Thank you my high school sweet heart.

`;

const textElement = document.getElementById('typewriter-text');
const cursor = document.querySelector('#typewriter-text .cursor');
let index = 0;
let hasTyped = false;

function typeText() {
  if (index < typewriterText.length) {
    textElement.textContent += typewriterText.charAt(index);
    index++;
    setTimeout(typeText, 40);
  } else {
    textElement.classList.add('done');
  }
}

const endingSection = document.querySelector('.ending');

const typeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasTyped) {
      hasTyped = true;
      typeText();
    }
  });
}, { threshold: 0.4 });

typeObserver.observe(endingSection);
