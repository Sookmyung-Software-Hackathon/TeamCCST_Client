import { ReactElement, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { deviceQuery } from 'src/constants/DeviceInfo';

interface ScreenProps {
  children: ReactElement;
  mobile?: boolean;
  tablet?: boolean;
  desktop?: boolean;
  wide?: boolean;
}

interface ScreenMap {
  [key: string]: boolean;
}

export function useMedia() {
  const isMobile = useMediaQuery({
    query: deviceQuery.mobile,
  });

  const isDesktop = useMediaQuery({
    query: deviceQuery.desktop,
  });

  return { isMobile, isDesktop };
}

function Responsive(props: ScreenProps) {
  const { children, ...screens } = props;
  const { isMobile, isDesktop } = useMedia();
  const [renderFlag, setRenderFlag] = useState(false);

  useEffect(() => {
    const responsiveMap: ScreenMap = {
      mobile: isMobile,
      desktop: isDesktop,
    };

    let shouldRender = false;

    Object.keys(screens).forEach((screen) => {
      if (responsiveMap[screen]) {
        setRenderFlag(true);
        shouldRender = true;
      }
    });

    if (!shouldRender) setRenderFlag(false);
  }, [isMobile, isDesktop, screens]);

  return renderFlag ? children : null;
}

export default Responsive;
