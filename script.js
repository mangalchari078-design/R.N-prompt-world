
document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', () => {
    // button ke parent ke andar ka prompt-text select karo
    const promptText = button.closest('.card-content').querySelector('.prompt-text').textContent;
    
    // copy to clipboard
    navigator.clipboard.writeText(promptText).then(() => {
      button.textContent = "Copied!";
      setTimeout(() => button.textContent = "Copy Prompt", 1500);
    }).catch(err => {
      alert("Copy failed: " + err);
    });
  });
});
