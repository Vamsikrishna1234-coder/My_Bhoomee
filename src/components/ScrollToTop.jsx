import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ selector } = {}) => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // prefer manual history restoration
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // choose scroll target: document.scrollingElement (usual) or provided selector
    const getScrollTarget = () => {
      if (selector) {
        const el = document.querySelector(selector);
        if (el) return el;
      }
      return document.scrollingElement || document.documentElement || document.body;
    };

    const target = getScrollTarget();

    const doScrollTop = (behavior = "auto", offset = 0) => {
      // if target is window/document scrollingElement
      if (target === document.scrollingElement || target === document.documentElement || target === document.body) {
        window.scrollTo({ top: offset, left: 0, behavior });
      } else {
        // element scroll
        target.scrollTo({ top: offset, left: 0, behavior });
      }
    };

    // If there's a hash, try to scroll to that element (respecting fixed header offset)
    if (hash) {
      const id = hash.replace("#", "");
      // wait for DOM paint so element exists
      requestAnimationFrame(() => {
        const el = document.getElementById(id) || document.querySelector(hash);
        if (el) {
          // compute offset if you have a fixed header: change headerSelector if needed
          const header = document.querySelector("header") || document.querySelector(".site-header");
          const headerHeight = header ? header.getBoundingClientRect().height : 0;
          const top = el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - headerHeight;
          window.scrollTo({ top, left: 0, behavior: "smooth" });
          return;
        }
        // fallback to top if element not found
        doScrollTop("auto");
      });
      return;
    }

    // Normal route change: attempt to scroll to top after paint
    // run multiple frames to handle late-loaded content
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        doScrollTop("auto", 0);
      });
    });
    // Extra safety: schedule another scroll shortly after (for slow images/lazy content)
    const t = setTimeout(() => doScrollTop("auto", 0), 300);

    return () => clearTimeout(t);
  }, [pathname, hash, selector]);

  return null;
};

export default ScrollToTop;