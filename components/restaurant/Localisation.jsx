import { StyleSheet, View } from "react-native";
import {CustomText} from "@/components/globals";


export default function Localisation({ props = {} }){

  const {
    roadNumber = "28", 
    roadName = "rue d'Avron", 
    postalCode = "75020", 
    city = "Paris"
  } = props;

  return(
    <View style={styles.container}>
      <CustomText props={{
        boldMode: true,
      }} style={styles.localisation}>{roadNumber} {roadName}</CustomText>
      <CustomText props={{
        boldMode: true,
      }} style={styles.localisation}>{postalCode}, {city}</CustomText>
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
    fontSize:21,
    fontWeight:"bold",
    letterSpacing:.18,
  }
});