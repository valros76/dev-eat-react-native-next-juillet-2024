export const mealsList = [
  {
    name: "Whopper",
    description: [
      "Craquez pour LE mythe.",
      "Une viande de boeuf grillé à la flamme, une sauce onctueuse, des tomates fraîches, une salade croquante, des cornichons et des oignons."
    ],
    image: {
      url: "assets/images/whopper.png"
    },
    stock:{
      quantity: 50,
    },
    prices: {
      hasInPromo: false,
      promotion: "34%",
      price: 6.75,
      currency: "€",
    },
    ingredients: [
      "Pain aux graines de sésame",
      "Sauce",
      "Salade ice berg",
      "Tranches de tomates fraîches (2 tranches)",
      "Ketchup",
      "Rondelles d'oignons frais",
      "Viande grillée à la flamme",
      "Rondelles de cornichons",
      "Pain aux graines de sésame"
    ],
    allergens: [
      "Gluten",
      "Graines de sésame",
      "Céleri",
      "Oeuf"
    ],
    canContainAllergens: [
      "Soja",
      "Lait",
      "Fruits à coques",
      "Moutarde"
    ],
    nutritonalValues: {
      part: {
        energeticValues: "629",
        energeticValuesUnit: "kcal",
        fattySubstances: "35",
        fattySubstanceUnit: "g",
        saturatedFattyAcids: "9.40",
        saturatedFattyAcidsUnit: "g",
        proteins: "28",
        proteinsUnit: "g",
        carbonhydrates: "49",
        carbonhydratesUnit: "g",
        fastSugars: "49",
        fastSugarsUnit: "g",
        salt: "2.50",
        saltUnit: "g"
      },
      perCentGrams: {
        energeticValues: "226",
        energeticValuesUnit: "kcal",
        fattySubstances: "13",
        fattySubstanceUnit: "g",
        saturatedFattyAcids: "3.40",
        saturatedFattyAcidsUnit: "g",
        proteins: "10",
        proteinsUnit: "g",
        carbonhydrates: "17",
        carbonhydratesUnit: "g",
        fastSugars: "4.20",
        fastSugarsUnit: "g",
        salt: "0.89",
        saltUnit: "g"
      }
    },
  },
  {
    name: "Cheesy Smoky BBQ",
    description: [
      "Voici le Cheesy Smoky BBQ : Un pain au blé torréfié, une sauce smoky chipotle, une viande grillée à la flamme, des tranches de bacon et un pané cheesy pour plus de gourmandise.",
    ],
    image: {
      url: "assets/images/cheesy-smoky-bbq.png"
    },
    stock:{
      quantity: 30,
    },
    prices: {
      hasInPromo: false,
      promotion: "34%",
      price: 9.40,
      currency: "€",
    },
    ingredients: [
      "Pain au blé torréfié",
      "Sauce smoky chipotle",
      "Rondelles d'oignons frais",
      "Tranches de tomates fraîches (2 tranches)",
      "Bacon fumé (3 tranches)",
      "Pané cheesy",
      "Viande grillée à la flamme",
      "Sauce smoky chipotle",
      "Pain au blé torréfié"
    ],
    allergens: [
      "Gluten",
      "Moutarde",
      "Oeuf",
      "Lait"
    ],
    canContainAllergens: [
      "Graines de sésame",
      "Céleri",
      "Soja",
      "Fruits à coques"
    ],
    nutritonalValues: {
      part: {
        energeticValues: "914",
        energeticValuesUnit: "kcal",
        fattySubstances: "53",
        fattySubstanceUnit: "g",
        saturatedFattyAcids: "16",
        saturatedFattyAcidsUnit: "g",
        proteins: "43",
        proteinsUnit: "g",
        carbonhydrates: "65",
        carbonhydratesUnit: "g",
        fastSugars: "9.9",
        fastSugarsUnit: "g",
        salt: "3.20",
        saltUnit: "g"
      },
      perCentGrams: {
        energeticValues: "290",
        energeticValuesUnit: "kcal",
        fattySubstances: "17",
        fattySubstanceUnit: "g",
        saturatedFattyAcids: "5.00",
        saturatedFattyAcidsUnit: "g",
        proteins: "14",
        proteinsUnit: "g",
        carbonhydrates: "21",
        carbonhydratesUnit: "g",
        fastSugars: "3.10",
        fastSugarsUnit: "g",
        salt: "1",
        saltUnit: "g"
      }
    },
  }
];

export const drinksList = [
  {
    name: "Coca-Cola sans sucres vanille",
    description: [
      "Edition limité : Coca-Cola sans sucre vanille",
    ],
    stock:{
      quantity: 25,
    },
    sizes:{
      small: "30cl",
      medium: "40cl",
      big: "50cl"
    },
    prices: {
      hasInPromo: false,
      promotion: "34%",
      price: 3.90,
      currency: "€",
    },
    allergens: [],
    canContainAllergens: [],
    nutritonalValues: {
      part: {
        energeticValues: "2.00",
        energeticValuesUnit: "kcal",
        fattySubstances: "0",
        fattySubstanceUnit: "g",
        saturatedFattyAcids: "0",
        saturatedFattyAcidsUnit: "g",
        proteins: "0",
        proteinsUnit: "g",
        carbonhydrates: "0",
        carbonhydratesUnit: "g",
        fastSugars: "0.80",
        fastSugarsUnit: "g",
        salt: "0.05",
        saltUnit: "g"
      },
      perCentGrams: {
        energeticValues: "0",
        energeticValuesUnit: "kcal",
        fattySubstances: "0",
        fattySubstanceUnit: "g",
        saturatedFattyAcids: "0",
        saturatedFattyAcidsUnit: "g",
        proteins: "0",
        proteinsUnit: "g",
        carbonhydrates: "0",
        carbonhydratesUnit: "g",
        fastSugars: "0",
        fastSugarsUnit: "g",
        salt: "0.01",
        saltUnit: "g"
      }
    },
  }
];

export const sideDishesList = [
  {
    name: "Frites",
    description: [
      "Comment résister ? Dorées, croustillantes et surtout généreuses... nos frites sont parfaites !",
    ],
    stock:{
      quantity: 50,
    },
    sizes:[
      "small",
      "medium",
      "big"
    ],
    prices: {
      hasInPromo: false,
      promotion: "34%",
      price: 2.65,
      currency: "€",
    },
    allergens: [],
    canContainAllergens: [
      "Fruits à coques",
      "Lait",
      "Gluten"
    ],
    nutritonalValues: {
      part: {
        energeticValues: "239",
        energeticValuesUnit: "kcal",
        fattySubstances: "10",
        fattySubstanceUnit: "g",
        saturatedFattyAcids: "3.20",
        saturatedFattyAcidsUnit: "g",
        proteins: "3",
        proteinsUnit: "g",
        carbonhydrates: "36",
        carbonhydratesUnit: "g",
        fastSugars: "0.50",
        fastSugarsUnit: "g",
        salt: "0.35",
        saltUnit: "g"
      },
      perCentGrams: {
        energeticValues: "266",
        energeticValuesUnit: "kcal",
        fattySubstances: "11",
        fattySubstanceUnit: "g",
        saturatedFattyAcids: "3.60",
        saturatedFattyAcidsUnit: "g",
        proteins: "3.30",
        proteinsUnit: "g",
        carbonhydrates: "40",
        carbonhydratesUnit: "g",
        fastSugars: "0.50",
        fastSugarsUnit: "g",
        salt: "0.40",
        saltUnit: "g"
      }
    },
  }
];

export const giftsList = [
  {
    name: "Jeu de cartes olé mains",
    description: "Jeu de cartes Olé Mains",
  },
  {
    name: "Livret Dreamworks",
    description: "Livre d'activités Dreamworks"
  }
];

export const menusList = [
  {
    name: "Menu Whopper",
    image: {
      url: "assets/images/menu-whopper.png"
    },
    prices: {
      hasInPromo: false,
      promotion: "34%",
      price: 9.25,
      currency: "€",
    },
    composition: {
      meal: mealsList.filter((item) => item.name.toLowerCase() === "whopper"),
      drink: drinksList.filter((item) => item.name.toLowerCase() === "coca-cola sans sucres vanille"),
      sideDish: sideDishesList.filter((item) => item.name.toLowerCase() === "frites"),
      gift: {
        ...giftsList
      }
    }
  },
];