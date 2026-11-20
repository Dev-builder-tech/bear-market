// Add the verified Solana address here after the token is deployed.
const CONTRACT_ADDRESS = '';
const input = document.querySelector('#contract-address');
const copyButton = document.querySelector('#copy-address');
const note = document.querySelector('#contract-note');
if (CONTRACT_ADDRESS) {
  input.value = CONTRACT_ADDRESS;
  copyButton.disabled = false;
  copyButton.textContent = 'Copy address';
  document.querySelector('.contract-top > span').textContent = 'OFFICIAL ADDRESS';
  note.textContent = 'Always verify the full contract address before interacting with a token.';
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      note.textContent = 'Contract address copied.';
    } catch {
      input.focus(); input.select();
      note.textContent = 'Select and copy the address manually.';
    }
  });
}
document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js-motion');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}
