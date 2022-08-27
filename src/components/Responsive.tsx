import { ReactElement, useEffect, useState } from 'react';
import useMedia from 'src/hooks/useMedia';

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

function Screen(props: ScreenProps) {
  const { children, ...screens } = props;
  const { isMobile, isDesktop } = useMedia();

  const [renderFlag, setRenderFlag] = useState(false);
  useEffect(() => {
    const screenMap: ScreenMap = {
      mobile: isMobile,
      desktop: isDesktop,
    };
    let activated = false;
    Object.keys(screens).forEach((screen) => {
      if (screenMap[screen]) {
        setRenderFlag(true);
        activated = true;
      }
    });

    if (!activated) setRenderFlag(false);
  }, [isMobile, isDesktop, screens]);

  return renderFlag ? children : null;
}

export default Screen;
