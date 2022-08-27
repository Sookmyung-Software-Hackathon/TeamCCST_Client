import { useEffect, useState } from 'react';
import { availableWidths } from 'src/constants/availableWidths';

import useMedia from './useMedia';

function useWindowSize() {
  const [clientWidth, setClientWidth] = useState(0);
  const { isMobile, isDesktop } = useMedia();

  const getCurrentAvailableWidth = () => {
    if (isMobile) return availableWidths.mobile;
    if (isDesktop) return availableWidths.desktop;
    return availableWidths.wide;
  };

  useEffect(() => {
    function handleResize() {
      setClientWidth(document.documentElement.clientWidth);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { clientWidth, availableWidth: getCurrentAvailableWidth() };
}

export default useWindowSize;
