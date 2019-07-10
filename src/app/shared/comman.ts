export interface BookList {
    id: number;
    name: string;
    img: string;
    price: number;
    originalPrice: number;
    shortDetail: string;
    fulletail: string;
    Quentity: number,
    ingredients: any[];
}

export const bookList: BookList[] = [{
    id: 1,
    name: 'Prashad Cooking with Indian Masters',
    img: 'images1.jpg',
    price: 200,
    originalPrice: 300,
    shortDetail: 'Smoothie Recipes: The best smoothie recipes for',
    fulletail: 'Smoothie Recipes: The best smoothie recipes for increased energy, weight loss, cleansing and more! (smoothie recipes, smoothie recipes for weight loss, smoothie recipe book Book 1)',
    Quentity: 0,
    ingredients: ['one, two']
  },
  {
    id: 2,
    name: 'Nutrition Science (Multi Colour Edition)',
    img: 'images2.jpg',
    price: 3000,
    originalPrice: 4000,
    shortDetail: 'Nutrition is the science of food and its relationship to health.',
    fulletail: 'Nutrition is the science of food and its relationship to health. All the topics related to Nutrition Science with attractive illustrations and latest information are discussed in this multi colour edition.',
    Quentity: 0,
    ingredients: ['one, two']
  },
  {
    id: 3,
    name: 'Madhuras Recipe Veg Nonveg flavorful masalas',
    img: 'images3.jpg',
    price: 250,
    originalPrice: 350,
    shortDetail: 'Bring Madhuras flavorful masalas to your kitchen ',
    fulletail: 'Bring Madhuras flavorful masalas to your kitchen and master at Maharashtrian style food. Madhuras Masalas are now available for you all to purchase.That too three in one. Hurry!',
    Quentity: 0,
    ingredients: ['one, two']
  }];
