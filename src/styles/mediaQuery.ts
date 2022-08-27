export type Device = 'mobile' | 'desktop';
type DeviceQuery = {
  [key in Device]: string;
};

// 추후에 break-point 수정 필요
export const deviceQuery: DeviceQuery = {
  mobile: '(max-width: 703px)',
  desktop: '(min-width: 704px)',
};

export const applyMediaQuery = (...deviceList: Device[]) =>
  '@media screen and ' + deviceList.map((device) => deviceQuery[device]).join(',');
