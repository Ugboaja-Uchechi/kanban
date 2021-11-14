const mealsMock = () => {
  const result = Promise.resolve(
    new Array(25).fill({
      idMeal: '521594',
      strMeal: 'Mock for meal counter',
      strMealThumb: 'https://www.themealdb.com/images/media/meals/',
    }),
  );
  return result;
};

export default mealsMock;