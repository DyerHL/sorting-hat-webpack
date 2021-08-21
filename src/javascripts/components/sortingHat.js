const sortingHat = () => {
  const houses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
  const randomizer = houses[Math.floor(Math.random() * houses.length)];
  return randomizer;
};

export default sortingHat;
