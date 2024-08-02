import { SafeAreaView, ScrollView, StyleSheet } from "react-native";


export default function RestaurantCardScreen(){
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  scrollView: {
    width:"100%",
  }
});