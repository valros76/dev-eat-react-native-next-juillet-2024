import { Feather } from "@expo/vector-icons";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";


export default function RestaurantCard({props = {}}) {

  const {
    name,
    imageUrl,
    price,
    priceCurrency,
    ctaAction = undefined,
    ctaTarget = undefined,
  } = props;

  const initCardImage = (url = undefined) => {
    return url ? url : "https://cdn.pixabay.com/photo/2022/04/20/14/39/burger-7145332_1280.png";
  }

  useEffect(() => {
  });

  return (
    <View style={styles.restaurantCardContainer}>
      <Text style={styles.restaurantCardTitle}>
        {name ? name : "Inconnu"}
      </Text>

      <View
        style={styles.restaurantCardImageContainer}
      >
        <Image
          source={{
            uri: initCardImage(imageUrl),
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
          onLongPress={() => (ctaAction && ctaTarget) && ctaAction(ctaTarget)}
          onClick={() => (ctaAction && ctaTarget) && ctaAction(ctaTarget)}
        />
        <Text style={styles.restaurantCardPrice}>
          {price  ? price.toFixed(2) : "0.00"}{" "}
          {priceCurrency ? priceCurrency : "€"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    letterSpacing: .20,
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
    letterSpacing: .16,
  }
});