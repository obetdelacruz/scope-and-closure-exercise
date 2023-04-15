const factoryFunction = (string) => {
  const capitalizeString = () => string.toUpperCase();
  const printString = () => console.log(`${capitalizeString()}`);

  return { printString };
};

const cookies = factoryFunction("cookies");

cookies.printString();
