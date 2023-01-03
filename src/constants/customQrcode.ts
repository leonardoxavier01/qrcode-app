import { QRCodeDataURLType } from 'qrcode';

interface IColorsQrcode {
  color: string;
}

export const colorsQrcode: Array<IColorsQrcode> = [
  { color: '#05A8AA' },
  { color: '#3C1642' },
  { color: '#AFFC41' },
  { color: '#FF715B' },
  { color: '#000000' }
];

interface IExtensionsQrcode {
  extension: string;
  option: QRCodeDataURLType;
}

export const extensionsQrcode: Array<IExtensionsQrcode> = [
  { extension: 'png', option: 'image/png' },
  { extension: 'jpeg', option: 'image/jpeg' },
  { extension: 'webp', option: 'image/webp' }
];
