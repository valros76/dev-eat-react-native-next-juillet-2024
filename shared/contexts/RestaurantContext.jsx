import { useState } from "react";
import { useContext, createContext } from "react";

const RestaurantContext = createContext();

const RestaurantProvider = ({children}) => {

  const [restaurantCard, setRestaurantCard] = useState([]);
  const [meals, setMeals] = useState([]);
  const [restaurantMenus, setRestaurantMenus] = useState([]);

  const mealsList = [
    {
      name: "Whopper",
      description: [
        "Craquez pour LE mythe.",
        "Une viande de boeuf grillé à la flamme, une sauce onctueuse, des tomates fraîches, une salade croquante, des cornichons et des oignons."
      ],
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
    }
  ];

  return(
    <RestaurantContext.Provider 
      value={{
        restaurantCard, 
        meals, 
        restaurantMenus
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export const useRestaurantContext = () => useContext(RestaurantContext);

export default RestaurantProvider;