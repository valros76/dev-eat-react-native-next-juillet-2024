import { StyleSheet, Text, View } from "react-native";


export default function Localisation({roadNumber, roadName, postalCode, city}){

  return(
    <View style={styles.container}>
      <Text style={styles.localisation}>{roadNumber} {roadName}</Text>
      <Text style={styles.localisation}>{postalCode}, {city}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    alignItems:"center",
    marginVertical:8,
  },
  localisation: {
    fontSize:16,
    fontWeight:"bold",
    letterSpacing:.18,
  }
});