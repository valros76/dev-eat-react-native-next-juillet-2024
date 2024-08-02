import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import { Title } from "@/components/globals";
import { Localisation } from "@/components/restaurant";

export default function HomeScreen(){
  return(
    <SafeAreaView style={styles.container}>
      <Title>Dev-Eat</Title>
      <Image
        style={styles.image}
        source={{
          uri: "https://images.unsplash.com/photo-1536523218403-e72792eb06a1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }}
      />
      <Localisation />

      <Text>Lundi : Fermé</Text>
      <Text>Mardi : 12h30 - 15h00 / 18h30 - 21h30</Text>
      <Text>Mercredi : 12h30 - 15h00 / 18h30 - 21h30</Text>
      <Text>Jeudi : Fermé</Text>
      <Text>Vendredi : 12h30 - 15h00 / 18h30 - 21h30</Text>
      <Text>Samedi : 12h30 - 15h00 / 18h30 - 21h30</Text>
      <Text>Dimanche : 12h30 - 15h00 / 18h30 - 21h30</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center",
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
  },
  image:{
    width:256,
    height:128,
  }
});