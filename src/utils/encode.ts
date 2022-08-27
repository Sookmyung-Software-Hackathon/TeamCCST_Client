export const encodeFileToBase64 = async (file: Blob): Promise<string> => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  return new Promise((resolve, reject) => {
    reader.onload = () => {
      if (typeof reader.result !== 'string') {
        reject();
        return;
      }
      resolve(reader.result);
    };
  });
};
