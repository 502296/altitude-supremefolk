// Smooth scroll للروابط الداخلية

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", (e) => {

    const id = link.getAttribute("href").slice(1);

    const target = document.getElementById(id);

    if (target) {

      e.preventDefault();

      target.scrollIntoView({ behavior: "smooth" });

    }

  });

});



// منع الإرسال الحقيقي الآن (فقط واجهة)

const form = document.getElementById("contact-form");

if (form) {

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Thank you! We'll get back to you shortly.");

  });

}
