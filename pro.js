document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const status = document.getElementById("status");
  status.innerHTML = "Sending...";

  const response = await fetch("https://formspree.io/f/your_form_id", {
    method: "POST",
    body: data,
    headers: { "Accept": "application/json" }
  });

  if (response.ok) {
    status.innerHTML = "✅ Message sent successfully!";
    form.reset();
  } else {
    status.innerHTML = "❌ Failed to send message. Try again!";
  }
});
