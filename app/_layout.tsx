import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Tabs } from "expo-router";
import { StyleSheet, Text } from "react-native";

export default function RootLayout(){
  return(
    <Tabs>
      <Tabs.Screen
        name="home/index"
        options={{
          title:"Accueil",
          tabBarLabel: () => (<Text>Accueil</Text>),
          tabBarIcon: () => (<TabBarIcon name="home-outline" size={14}/>),
          tabBarItemStyle: {
            ...styles.tabBarItemCustom,
            backgroundColor: "#FFFFFF"
          },
          tabBarIconStyle: {
            ...styles.tabBarIconCustom
          }
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarItemCustom:{
    flex:1,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  },
  tabBarIconCustom:{
    height:18,
  }
});