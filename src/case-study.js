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

// Initialize on DOM load or immediately if already loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSwipeBadge);
} else {
  initSwipeBadge();
}
