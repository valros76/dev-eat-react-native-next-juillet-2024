import { FlatList, StyleSheet, Text, View } from "react-native";


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
    <View style={styles.container}>
      <FlatList
        data={customDatas || schedulesDatas}
        renderItem={(item) => (
          <>
            <Text style={styles.day}>{item.day}</Text>
            {!item.isClosed && (
              <>
                <Text style={styles.schedules}>{item.lunch}</Text>
                <Text style={styles.schedules}>{item.dinner}</Text>
              </>
            )}
            {item.isClosed && (
              <Text style={styles.schedules}>Fermé</Text>
            )}
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "stretch",
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  day: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: .66,
  },
  schedules: {
    fontSize: 16,
    letterSpacing: .33,
  }
});