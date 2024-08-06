import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import RestaurantContext from "@/shared/contexts/RestaurantContext";
import FontContext, {
  useFontContext,
} from "@/shared/contexts/FontContext";
import { CustomText } from "@/components/globals";

export default function RootLayout() {
  return (
    <FontContext>
      <RestaurantContext>
        <Tabs>
          <Tabs.Screen
            name="index"
            options={{
              title: "Accueil",
              headerTitleStyle: {
                fontFamily: "Unna Bold",
              },
              tabBarLabel: () => (
                <CustomText
                  style={{
                    fontFamily:
                      "Unna Regular",
                  }}
                >
                  Accueil
                </CustomText>
              ),
              tabBarIcon: () => (
                <TabBarIcon
                  name="home-outline"
                  size={14}
                />
              ),
              tabBarItemStyle: {
                ...styles.tabBarItemCustom,
                backgroundColor: "#FFFFFF",
              },
              tabBarIconStyle: {
                ...styles.tabBarIconCustom,
              },
            }}
          />
          <Tabs.Screen
            name="exemple/index"
            options={{
              title: "Exemple Responsive",
              headerTitleStyle: {
                fontFamily: "Unna Bold",
              },
              tabBarLabel: () => (
                <CustomText
                  style={{
                    fontFamily:
                      "Unna Regular",
                  }}
                >
                  Exemple Responsive
                </CustomText>
              ),
              tabBarIcon: () => (
                <TabBarIcon
                  name="document-text-outline"
                  size={14}
                />
              ),
              tabBarItemStyle: {
                ...styles.tabBarItemCustom,
                backgroundColor: "#FFFFFF",
              },
              tabBarIconStyle: {
                ...styles.tabBarIconCustom,
              },
              href: null,
            }}
          />
          <Tabs.Screen
            name="restaurant-card/index"
            options={{
              title: "Carte du restaurant",
              headerTitleStyle: {
                fontFamily: "Unna Bold",
              },
              tabBarLabel: () => (
                <CustomText
                  style={{
                    fontFamily:
                      "Unna Regular",
                  }}
                >
                  La carte
                </CustomText>
              ),
              tabBarIcon: () => (
                <TabBarIcon
                  name="fast-food-outline"
                  size={14}
                />
              ),
              tabBarItemStyle: {
                ...styles.tabBarItemCustom,
                backgroundColor: "#FFFFFF",
              },
              tabBarIconStyle: {
                ...styles.tabBarIconCustom,
              },
            }}
          />
        </Tabs>
      </RestaurantContext>
    </FontContext>
  );
}

const styles = StyleSheet.create({
  tabBarItemCustom: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarIconCustom: {
    height: 18,
  },
});
