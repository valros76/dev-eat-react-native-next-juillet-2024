import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { useRestaurantContext } from "@/shared/contexts/RestaurantContext";
import Feather from "@expo/vector-icons/Feather";
import { useEffect, useState } from "react";
import {
  RestaurantCard,
  RestaurantCardInfos,
} from "@/components/restaurant";
import { RestaurantCardInfosType } from "@/shared/types/RestaurantCardInfosType";

export default function RestaurantCardScreen() {
  const { restaurantCard, meals, restaurantMenus } =
    useRestaurantContext();

  const [infos, setInfos] =
    useState<RestaurantCardInfosType>({});

  const showInfos = (item: any) => {
    setInfos({
      title: item?.name,
      imageUrl: item?.image?.url,
      description: item?.description,
      ingredients: item?.ingredients,
      allergens: item?.allergens,
      canContainAllergens: item?.canContainAllergens,
      nutritonalValues: item?.nutritonalValues,
      composition: item?.composition,
    });
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

  useEffect(() => {}, [infos]);

  return (
    <SafeAreaView style={styles.container}>
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
            width:"auto",
            maxWidth:"100%",
            justifyContent:"center",
            alignItems:"center",
            flexWrap:"wrap",
            gap: 12,
            marginHorizontal:"auto",
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
    gap: 12,
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
