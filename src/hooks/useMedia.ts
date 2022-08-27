import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { deviceQuery } from 'src/styles/mediaQuery';

function useMedia() {
  const _isMobile = useMediaQuery({
    query: deviceQuery.mobile,
  });
  const isDesktop = useMediaQuery({
    query: deviceQuery.desktop,
  });

  const [isMobile, setIsMobile] = useState(_isMobile);

  useEffect(() => {
    setIsMobile(_isMobile);
  }, [_isMobile]);

  return { isMobile, isDesktop };
}

export default useMedia;
