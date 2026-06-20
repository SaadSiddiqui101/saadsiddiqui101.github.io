/**
 * Case Study JS Extension
 * Handles mobile interaction enhancements like the horizontal swipe indicator.
 */

function initSwipeBadge() {
  const imagesColumn = document.querySelector(".images-column");
  if (imagesColumn && window.innerWidth < 1024) {
    // Avoid double wrapping if already wrapped
    if (imagesColumn.parentNode.classList.contains("images-column-wrapper")) return;

    // Create wrapper
    const wrapper = document.createElement("div");
    wrapper.className = "images-column-wrapper";

    // Insert wrapper into DOM
    imagesColumn.parentNode.insertBefore(wrapper, imagesColumn);
    wrapper.appendChild(imagesColumn);

    // Create badge
    const badge = document.createElement("div");
    badge.className = "swipe-badge";
    badge.innerHTML = 'Swipe to explore layout <span class="swipe-badge-arrow">&rarr;</span>';
    wrapper.appendChild(badge);

    // Fade out logic on user interaction
    const fadeOut = () => {
      badge.classList.add("fade-out");
      
      // Clean up event listeners
      imagesColumn.removeEventListener("touchstart", fadeOut);
      imagesColumn.removeEventListener("scroll", fadeOut);

      // Remove element from DOM after transition finishes
      badge.addEventListener("transitionend", () => {
        badge.remove();
      });
    };

    // Listen to touch/scroll on the scroll container
    imagesColumn.addEventListener("touchstart", fadeOut, { passive: true });
    imagesColumn.addEventListener("scroll", fadeOut, { passive: true });
  }
}

function initLazyLotties() {
  const players = document.querySelectorAll("dotlottie-player[data-src]");
  if (players.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const player = entry.target;
        obs.unobserve(player);

        const src = player.getAttribute("data-src");
        if (src) {
          player.setAttribute("src", src);
          // If custom elements are upgraded, load programmatically
          if (typeof player.load === "function") {
            player.load(src);
          }
        }
      }
    });
  }, {
    rootMargin: "200px",
  });

  players.forEach((player) => observer.observe(player));
}

// Initialize on DOM load or immediately if already loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initSwipeBadge();
    initLazyLotties();
  });
} else {
  initSwipeBadge();
  initLazyLotties();
}
