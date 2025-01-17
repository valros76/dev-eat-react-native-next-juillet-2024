import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { CustomText } from "@/components/globals";

export default function Schedules({ props = {} }) {

  const { customDatas } = props;

  const schedulesDatas = [
    {
      day: "Lundi",
      lunch: "",
      dinner: "",
      isClosed: true,
    },
    {
      day: "Mardi",
      lunch: "11h30 - 15h30",
      dinner: "18h30 - 23h30",
      isClosed: false,
    },
    {
      day: "Mercredi",
      lunch: "11h30 - 13h30",
      dinner: "18h30 - 21h30",
      isClosed: false,
    },
    {
      day: "Jeudi",
      lunch: "",
      dinner: "",
      isClosed: true,
    },
    {
      day: "Vendredi",
      lunch: "11h30 - 15h30",
      dinner: "18h30 - 23h30",
      isClosed: false,
    },
    {
      day: "Samedi",
      lunch: "11h30 - 15h30",
      dinner: "18h30 - 23h30",
      isClosed: false,
    },
    {
      day: "Dimanche",
      lunch: "11h30 - 13h30",
      dinner: "18h30 - 21h30",
      isClosed: false,
    },
    {
      day: "Jours fériés",
      lunch: "11h30 - 14h30",
      dinner: "17h30 - 22h30",
      isClosed: false,
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={customDatas || schedulesDatas}
        horizontal={false} 
        scrollEnabled={false}
        renderItem={(data) => (
          <View style={styles.schedulesContainer}>
            <CustomText props={{
              titleMode: true,
            }} style={styles.day}>{data.item.day}</CustomText>
            {!data.item.isClosed && (
              <>
                <CustomText style={styles.schedules}>{data.item.lunch}</CustomText>
                <CustomText style={styles.schedules}>{data.item.dinner}</CustomText>
              </>
            )}
            {data.item.isClosed && (
              <CustomText style={styles.schedules}>Fermé</CustomText>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  schedulesContainer: {
    boxShadow:"0 1px 4px -3px #333",
    paddingVertical:12,
  },
  day: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: .66,
    textAlign:"center",
    marginBottom:6,
  },
  schedules: {
    fontSize: 16,
    letterSpacing: .33,
    fontWeight:500,
    textAlign:"center",
  }
});