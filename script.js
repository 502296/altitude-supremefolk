// Smooth scroll for internal links

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", (e) => {

    const targetId = link.getAttribute("href").slice(1);

    const target = document.getElementById(targetId);

    if (target) {

      e.preventDefault();

      target.scrollIntoView({ behavior: "smooth" });

    }

  });

});



// Prevent real submit (حتى الآن فقط واجهة)

const form = document.getElementById("contact-form");

if (form) {

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Thank you! We'll get back to you shortly.");

  });

}
