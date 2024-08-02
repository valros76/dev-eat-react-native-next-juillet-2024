import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Title } from "@/components/globals";
import {
  Localisation,
  Schedules,
} from "@/components/restaurant";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContentView}>
          <Title>Dev-Eat</Title>
          <Image
            style={styles.image}
            source={{
              uri: "https://images.unsplash.com/photo-1536523218403-e72792eb06a1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
          />
          <Localisation />

          <Schedules />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
  },
  mainContentView:{
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center",
    gap:12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    width: 256,
    height: 128,
  },
});
