const navbar = document.querySelector(".navbar");
const stickyObserver = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle("is-stuck", e.intersectionRatio < 1),
  { threshold: [1] }
);

stickyObserver.observe(navbar);