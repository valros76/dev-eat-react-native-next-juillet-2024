import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useRestaurantContext } from "@/shared/contexts/RestaurantContext";
import Feather from "@expo/vector-icons/Feather";
import { useEffect, useState } from "react";
import {
  RestaurantCard,
  RestaurantCardInfos,
} from "@/components/restaurant";

type RestaurantCardInfos = {
  title?: string;
  imageUrl?: string;
  description?: string;
  ingredients?: string[];
  allergens?: string[];
  canContainAllergens?: string[];
  nutritonalValues?: {
    part?: {
      energeticValues?: string;
      energeticValuesUnit?: string;
      fattySubstances?: string;
      fattySubstanceUnit?: string;
      saturatedFattyAcids?: string;
      saturatedFattyAcidsUnit?: string;
      proteins?: string;
      proteinsUnit?: string;
      carbonhydrates?: string;
      carbonhydratesUnit?: string;
      fastSugars?: string;
      fastSugarsUnit?: string;
      salt?: string;
      saltUnit?: string;
    };
    perCentsGram?: {
      energeticValues?: string;
      energeticValuesUnit?: string;
      fattySubstances?: string;
      fattySubstanceUnit?: string;
      saturatedFattyAcids?: string;
      saturatedFattyAcidsUnit?: string;
      proteins?: string;
      proteinsUnit?: string;
      carbonhydrates?: string;
      carbonhydratesUnit?: string;
      fastSugars?: string;
      fastSugarsUnit?: string;
      salt?: string;
      saltUnit?: string;
    };
  };
};

export default function RestaurantCardScreen() {
  const { restaurantCard, meals, restaurantMenus } =
    useRestaurantContext();

  const [infos, setInfos] = useState<RestaurantCardInfos>({});

  const showInfos = (item: any) => {
    setInfos(
      {
        title: item?.name,
        imageUrl: item?.image?.url,
        description: item?.description,
        ingredients: item?.ingredients,
        allergens: item?.allergens,
        canContainAllergens: item?.canContainAllergens,
        nutritonalValues: item?.nutritonalValues,
      },
    );
  };

  const closeInfos = () => {
    setInfos({});
  };

  /**
   * TODO : Simuler la création d'un panier de commande.
   */

  const debug = (value: any) => {
    console.table(value);
    return true;
  };

  const generateKeyForListItem = (keyBase: string) => {
    const randomIDLength = 12;
    const randomID = Math.random()
      .toString(36)
      .substring(2, randomIDLength + 2);
    keyBase = keyBase.replaceAll(" ", "").trim();
    keyBase = `${keyBase}-${randomID}`;
    return keyBase;
  };

  useEffect(() => {
  }, [infos]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {Object?.hasOwn(infos, "title") && (
          <RestaurantCardInfos
            props={{
              ...infos,
              ctaAction: closeInfos,
            }}
          />
        )}

        {!Object?.hasOwn(infos, "title") && (
          <FlatList
          data={restaurantCard}
          horizontal={false}
          numColumns={2}
          contentContainerStyle={styles.restaurantCardGrid}
          columnWrapperStyle={{
            gap: 12,
          }}
          renderItem={(data: any) => (
            <RestaurantCard
              props={{
                name: data.item.name,
                imageUrl: data.item.image.url,
                price: data.item.prices.price,
                priceCurrency: data.item.prices.currency,
                ctaAction: showInfos,
                ctaTarget: data.item,
              }}
            />
          )}
          keyExtractor={(item) =>
            generateKeyForListItem(item.name)
          }
        />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F4E8",
  },
  scrollView: {
    width: "100%",
  },
  restaurantCardGrid: {
    width: "auto",
    marginHorizontal: "auto",
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  restaurantCardContainer: {
    width: 220,
    maxWidth: 220,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 10,
  },
  restaurantCardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.2,
  },
  restaurantCardImageContainer: {
    width: "100%",
  },
  restaurantCardImage: {
    width: "100%",
    height: "auto",
    aspectRatio: 1 / 1,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  restaurantCardPrice: {
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 0.16,
  },
});
