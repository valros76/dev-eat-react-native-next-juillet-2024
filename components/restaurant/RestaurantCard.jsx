import { Feather } from "@expo/vector-icons";
import { useEffect } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { CustomText } from "../globals";


export default function RestaurantCard({ props = {} }) {

  const {
    name,
    imageUrl,
    price,
    priceCurrency,
    ctaAction = undefined,
    ctaTarget = undefined,
  } = props;

  return (
    <View style={styles.restaurantCardContainer}>
      <CustomText style={styles.restaurantCardTitle}>
        {name ? name : "Inconnu"}
      </CustomText>

      <View
        style={styles.restaurantCardImageContainer}
      >
        <Image
          source={imageUrl}
          style={styles.restaurantCardImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.priceContainer}>
        <Pressable
          onLongPress={() => (ctaAction && ctaTarget) && ctaAction(ctaTarget)}
          onPress={() => (ctaAction && ctaTarget) && ctaAction(ctaTarget)}
          onClick={() => (ctaAction && ctaTarget) && ctaAction(ctaTarget)}
        >
          <Feather
            name="eye"
            size={24}
            color="black"
          />
        </Pressable>
        <CustomText props={{
          boldMode: true,
        }} style={{
          ...styles.restaurantCardPrice,
          fontSize: 18,
        }}>
          {price ? price.toFixed(2) : "0.00"}{" "}
          {priceCurrency ? priceCurrency : "€"}
        </CustomText>
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
    width: 350,
    maxWidth: 350,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 10,
  },
  restaurantCardTitle: {
    fontFamily: "Unna Bold",
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