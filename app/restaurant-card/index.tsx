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
import { useEffect } from "react";

export default function RestaurantCardScreen() {
  const { restaurantCard, meals, restaurantMenus } =
    useRestaurantContext();

  /**
   * TODO : Améliorer la composition, en atomisant les composants de la page.
   * TODO : Créer un composant d'affichage de carte complète, un composant d'affichage de plat/menu, un composant modal qui affichera les informations du plat ou du menu.
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={restaurantCard}
          horizontal={false}
          numColumns={2}
          contentContainerStyle={styles.restaurantCardGrid}
          columnWrapperStyle={{
            gap:12,
          }}
          renderItem={(data: any) => (
            <View style={styles.restaurantCardContainer}>
              <Text style={styles.restaurantCardTitle}>
                {data.item.name}
              </Text>

              <View
                style={styles.restaurantCardImageContainer}
              >
                <Image
                  source={{
                    uri: data.item.image.url,
                  }}
                  style={styles.restaurantCardImage}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.priceContainer}>
                <Feather
                  name="eye"
                  size={24}
                  color="black"
                />
                <Text style={styles.restaurantCardPrice}>
                  {data.item.prices.price.toFixed(2)}{" "}
                  {data.item.prices.currency}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) =>
            generateKeyForListItem(item.name)
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    width: "100%",
  },
  restaurantCardGrid: {
    width: "auto",
    marginHorizontal: "auto",
    paddingVertical:24,
    paddingHorizontal:12,
  },
  restaurantCardContainer: {
    width: 220,
    maxWidth: 220,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 10,
  },
  restaurantCardTitle: {
    fontSize:20,
    fontWeight:"bold",
    letterSpacing:.20,
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
    fontSize:16,
    fontWeight:600,
    letterSpacing:.16,
  }
});
