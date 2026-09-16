document.addEventListener('DOMContentLoaded', function () {
  const els = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach((el) => observer.observe(el));

  const emailLink = document.getElementById('email-link');
  const toast = document.getElementById('copy-toast');
  if (emailLink && toast) {
    emailLink.addEventListener('click', function () {
      const email = emailLink.dataset.email;
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(email).then(function () {
        toast.classList.add('show');
        setTimeout(function () {
          toast.classList.remove('show');
        }, 2000);
      }).catch(function () {});
    });
  }
});
