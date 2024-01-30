export const getBooksThunk = async (arg, thunkApi) => {
  const await5s = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
  await await5s();

  if (Math.random() < 0.5) {
    throw "Error";
  }

  return [
    {
      bookTitle: "Frankestein",
      year: 1800,
      author: " Mary Shelley",
    },
    {
      bookTitle: "Dracula",
      year: 1900,
      author: " Bran Stoker",
    },
    {
      bookTitle: "Le cosmicomiche",
      year: 1970,
      author: " Italo Calvino",
    },
  ];
};
