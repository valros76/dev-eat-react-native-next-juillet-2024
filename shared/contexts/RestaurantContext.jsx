import { useEffect } from "react";
import { useState } from "react";
import { useContext, createContext } from "react";
import {
  mealsList,
  drinksList,
  sideDishesList,
  giftsList,
  menusList
} from "@/constants/RestaurantCardList";

const RestaurantContext = createContext();

const RestaurantProvider = ({children}) => {

  const [restaurantCard, setRestaurantCard] = useState([
    ...mealsList,
    ...menusList
  ]);
  const [meals, setMeals] = useState(mealsList);
  const [restaurantMenus, setRestaurantMenus] = useState(menusList);

  return(
    <RestaurantContext.Provider 
      value={{
        restaurantCard, 
        meals, 
        restaurantMenus,
        setRestaurantCard,
        setMeals,
        setRestaurantMenus
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export const useRestaurantContext = () => useContext(RestaurantContext);

export default RestaurantProvider;