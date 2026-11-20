// Official BMC contract address supplied by the project owner.
const CONTRACT_ADDRESS = '2DYwGk1CJo4ae4pYKnhUuGjqWzKxAwxc6rG3oPKWpump';
const input = document.querySelector('#contract-address');
const copyButton = document.querySelector('#copy-address');
const note = document.querySelector('#contract-note');
if (CONTRACT_ADDRESS) {
  input.value = CONTRACT_ADDRESS;
  copyButton.disabled = false;
  copyButton.textContent = 'Copy address';
  document.querySelector('.contract-top > span').textContent = 'OFFICIAL ADDRESS';
  note.textContent = 'Always verify the full contract address before interacting with a token.';
  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      note.textContent = 'Contract address copied.';
      copyButton.textContent = 'Copied!';
    } catch {
      input.focus(); input.select();
      note.textContent = 'Select and copy the address manually.';
    }
  };
  copyButton.addEventListener('click', copyAddress);
  input.addEventListener('click', copyAddress);
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
