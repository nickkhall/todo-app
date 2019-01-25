export const getNextNum = (val, amount) => {
  const splitVal = val.split('');
  const nextLetter = String.fromCharCode((parseInt(splitVal[0].charCodeAt(0), 10) + amount));
  const nextNum = parseInt(splitVal[1], 10) - amount;

  return `${nextLetter}${nextNum}`;
};
