// Before publishing, replace this placeholder with the business email for enquiries.
const BUSINESS_EMAIL = "Okuhle.int.solutions@gmail.com";
const menu = document.querySelector(".menu");
const nav = document.querySelector(".header nav");
if (menu && nav) menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
const form = document.querySelector("#contact-form");
const status = document.querySelector("#status");
if (form) form.addEventListener("submit", event => {
  event.preventDefault();
  
  const d = new FormData(form);
  const subject = encodeURIComponent("Website enquiry: " + d.get("service"));
  const body = encodeURIComponent("Name: " + d.get("name") + "\nEmail: " + d.get("email") + "\nService: " + d.get("service") + "\n\nRequest:\n" + d.get("message"));
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
  status.textContent = "Your email app should open with the enquiry prepared. Please send it from there.";
});
