import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useRestaurantContext } from "@/shared/contexts/RestaurantContext";
import Feather from '@expo/vector-icons/Feather';

export default function RestaurantCardScreen() {
  const { restaurantCard, meals, restaurantMenus } =
    useRestaurantContext();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={restaurantCard}
          renderItem={(item: any) => (
            <View>
              <Text>{item.name}</Text>
              <View>
                <Feather name="eye" size={24} color="black" />
                <Text>{item.prices.price.toFixed(2)} {item.prices.currency}</Text>
              </View>
            </View>
          )}
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
});
