// Basic smooth scroll or any future interactivity
console.log("Karthik's Portfolio Loaded");

// Frontend Form Submission Script
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form'); // Ensure your form has this ID
  const status = document.getElementById('form-status'); // Optional: show status message

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });

      const result = await response.json();

      if (response.ok) {
        status.textContent = '✅ Message sent! Check your email for a reply.';
        form.reset();
      } else {
        status.textContent = '❌ Error sending message.';
        console.error(result.message);
      }
    } catch (err) {
      status.textContent = '❌ Something went wrong.';
      console.error(err);
    }
  });
});
