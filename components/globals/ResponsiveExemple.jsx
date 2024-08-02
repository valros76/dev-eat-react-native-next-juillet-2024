import { ScrollView, SafeAreaView, StyleSheet, Text, View, useWindowDimensions } from "react-native";


export function ResponsiveExemple({ children = {} }) {

  const {width, height} = useWindowDimensions();

  return (
    <SafeAreaView style={{
      ...styles.container,
      width: "100%",
      height: "100%",
    }}>
          <View style={{
            ...styles.voidView,
            width: width,
            height: "auto",
            paddingVertical: ((width / 100) * 1.4),
            paddingHorizontal: ((width / 100) * 2.8),
          }}>
            <Text style={{
              fontSize: ((width / 100) * 1.7)
            }}>Contenu adapté à un ratio de l'écran</Text>
          </View>
          <ScrollView style={{
            ...styles.scrollView,
            width: (width / 2),
            maxHeight: (height / 4),
            marginHorizontal:"auto",
          }}>
            <Text style={styles.tinyText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus recusandae ipsa vero beatae! Id vero harum accusamus vel, veritatis voluptatibus. Deleniti tempora dolorem corrupti facere perferendis porro, vel accusamus aperiam dolor sint necessitatibus, illo alias? Rerum ab accusantium perferendis dolores ullam sunt, obcaecati assumenda unde earum fuga necessitatibus perspiciatis nostrum error ipsam consequatur esse dolorem in aut repellendus illo minus quod? Earum aperiam assumenda animi! Similique deleniti quas rerum explicabo, corporis animi, asperiores earum tempore ex dolorem quasi ea veritatis cumque assumenda rem. Quibusdam cumque sunt rerum ipsum repellat harum ipsa incidunt ut placeat voluptatem! Autem dolorem itaque veniam earum sapiente quibusdam voluptates aliquid delectus vitae distinctio a vero quis dicta tempore deleniti voluptatibus facere eos sed, molestiae consectetur sunt quae? Distinctio possimus hic vitae alias aperiam nam ut amet earum sint velit, expedita voluptas eaque dolorem cupiditate eveniet nihil animi minima aspernatur. Corrupti ullam accusamus necessitatibus unde quisquam dolore?
            </Text>
            <Text style={styles.bigText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore distinctio qui nam aliquid aliquam, voluptatum incidunt numquam inventore! Quia animi illo, maiores deserunt quibusdam, tempora quisquam cum minus hic numquam impedit veritatis odit incidunt in earum? Alias veniam accusantium magnam aliquid eaque, quidem aspernatur enim voluptates asperiores eos ea beatae iste aliquam quam rerum quo corporis? Repellendus aspernatur modi nemo eligendi harum minima. Distinctio quibusdam magni excepturi nam officia quisquam ut corrupti reiciendis laboriosam aperiam officiis perferendis corporis, quod dicta.
            </Text>
            {children}
          </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    gap: 12,
    backgroundColor: "lime",
    padding: 24,
  },
  voidView: {
    width: "80%",
    maxWidth: "80%",
    height: 40,
    marginHorizontal: "auto",
    backgroundColor: "red",
  },
  scrollView: {
    marginTop: "auto",
    backgroundColor: "blue",
    padding: 12,
  },
  tinyText: {
    fontSize: 12,
  },
  bigText: {
    fontSize: 64,
  }
});