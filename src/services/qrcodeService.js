import QRCode from 'qrcode';

export const generateQRCode = async (url, options = {}) => {
  const defaultOptions = {
    errorCorrectionLevel: 'H',
    margin: 1,
    color: {
      dark: '#000000',
      light: '#ffffff'
    },
    width: 300
  };

  const qrOptions = { ...defaultOptions, ...options };
  return await QRCode.toDataURL(url, qrOptions);
};