import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
//get the current pathname using useLocation hook
const { pathname } = useLocation();
//scroll to the top of the page whenever the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop
