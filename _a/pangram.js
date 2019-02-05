const isPangram = (str) => {
  const pangramStr = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < pangramStr.length; i++) {
    if (!str.toLowerCase().includes(pangramStr[i])) {
      return false;
    }
  }
  return true;
};
