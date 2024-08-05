import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useRestaurantContext } from "@/shared/contexts/RestaurantContext";
import Feather from "@expo/vector-icons/Feather";

export default function RestaurantCardScreen() {
  const { restaurantCard, meals, restaurantMenus } =
    useRestaurantContext();

  /**
   * TODO : Améliorer la composition, en atomisant les composants de la page.
   * TODO : Créer un composant d'affichage de carte complète, un composant d'affichage de plat/menu, un composant modal qui affichera les informations du plat ou du menu.
   * TODO : Simuler la création d'un panier de commande.
   */

  const debug = (value:any) => {
    console.table(value);
    return true;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
          <FlatList
            data={restaurantCard}
            renderItem={(data: any) => (
              <View style={styles.restaurantCardContainer}>
                <Text>{data.item.name}</Text>
                <View style={styles.priceContainer}>
                  <Feather
                    name="eye"
                    size={24}
                    color="black"
                  />
                  <Text>
                    {data.item.prices.price.toFixed(2)}{" "}
                    {data.item.prices.currency}
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item}
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
  restaurantCardContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
