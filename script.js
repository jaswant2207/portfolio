document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const subject = this.subject.value.trim();

  if (!name || !email || !message || !subject) {
    alert('Thank you, ' + name + '! Your message has been sent.');
    return;
  }
  
  alert('Please fill in all fields.');
  this.reset();
});