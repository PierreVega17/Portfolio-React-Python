import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // If navigation is PUSH (forward) or REPLACE, scroll to top.
    // If navigation is POP (browser back/forward button), let the browser handle restoration.
    if (navType !== 'POP') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Instant is better for route changes to avoid seeing the jump
      });
    }
  }, [pathname, navType]);

  return null;
}
