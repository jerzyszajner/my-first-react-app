const strContains = (str, substring) => {
  if (typeof str !== 'string' || typeof substring !== 'string') {

    return false;
  }

  return str.toLowerCase().includes(substring.toLowerCase());
};

export default strContains;
