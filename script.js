document.addEventListener('DOMContentLoaded', () => {
  const packageBox = document.getElementById('package-box');
  const letterCard = document.getElementById('letter-card');
  const qrCard = document.getElementById('qr-card');
  const nextBtn = document.getElementById('next-btn');
  const tapHint = document.getElementById('tap-hint');

  let isOpened = false;

  // 1. OPEN PACKAGE & REVEAL LETTER
  const openPackage = () => {
    if (isOpened) return;
    isOpened = true;

    // Fade tap hint
    tapHint.style.opacity = '0';

    // Trigger flaps opening & shipping label flying off
    packageBox.classList.add('is-opening');
    packageBox.classList.add('is-open-scene');

    // Pop up letter card
    setTimeout(() => {
      letterCard.classList.remove('hidden');
    }, 500);
  };

  packageBox.addEventListener('click', openPackage);
  packageBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openPackage();
    }
  });

  // 2. CLICK NEXT BUTTON -> TUCK LETTER BACK & POP UP QR CODE
  nextBtn.addEventListener('click', () => {
    // Hide letter
    letterCard.classList.add('hidden');

    // Show QR card
    setTimeout(() => {
      qrCard.classList.remove('hidden');
    }, 450);
  });
});