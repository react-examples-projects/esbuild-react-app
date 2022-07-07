/**
 * Lazy load to images
 * @param {HTMLElement} image - Node type image
 */
export default function lazyLoad(image) {
  if ("IntersectionObserver" in window) {
    function fn(entrie, observer) {
      const element = entrie[0].target;
      if (
        entrie[0].isIntersecting &&
        element.src !== element.getAttribute("data-src")
      ) {
        console.log("isIntercepting");
        element.src = element.getAttribute("data-src");

        element.addEventListener("load", (e) => {
          element.classList.add("loaded");
          observer.unobserve(e.target);
          element.removeAttribute("data-src");
        });
      }
    }
    const InObserver = new IntersectionObserver(fn);
    InObserver.observe(image);
  } else {
    console.error("IntersectionObserver no implemented this browser");
  }
}
