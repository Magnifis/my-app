let initialState = {
  friends: [
    {
      id: 1,
      name: "Igor",
      foto: "https://tl.rulate.ru/i/book/23/5/3714.jpg",
    },
    {
      id: 2,
      name: "Bogdan",
      foto: "https://tl.rulate.ru/i/book/23/5/3714.jpg",
    },
    {
      id: 3,
      name: "Literbol",
      foto: "https://tl.rulate.ru/i/book/23/5/3714.jpg",
    },
  ],
};

const siteBarReducer = (state = initialState, action) => {
  return state;
};

export default siteBarReducer;
