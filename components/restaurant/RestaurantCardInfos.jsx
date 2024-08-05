import { ScrollView, StyleSheet, Text, View } from "react-native";


export default function RestaurantCardInfos({ props = {} }) {

  const {
    title = "Inconnu",
    imageUrl = "https://cdn.pixabay.com/photo/2022/04/20/14/39/burger-7145332_1280.png",
    description = undefined,
    ingredients = undefined,
    allergens = undefined,
    canContainAllergens = undefined,
    nutritonalValues = undefined
  } = props;

  const nutritionalValuesIndicator = "(par portion / par 100g)";

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: imageUrl
            }}
            resizeMode="contain"
          />
        </View>

        {description && (description.map((item) => (<Text style={styles.description}>
          {item}
        </Text>)))}

        {ingredients && (ingredients.map((item) => (<Text style={styles.ingredients}>
          {item}
        </Text>)))}

        {allergens && (allergens.map((item) => (<Text style={styles.allergens}>
          {item}
        </Text>)))}

        {canContainAllergens && (canContainAllergens.map((item) => (<Text style={styles.canContainAllergens}>
          {item}
        </Text>)))}

        {nutritonalValues && (
          <View style={styles.nutritionalValuesContainer}>
            <Text style={styles.nutritionalValuesContainerTitle}>
              Valeur nutritionnelles
            </Text>

            <View style={styles.nutritionalValuesDatas}>
              <View style={styles.nutritionalDataContainer}>
                <Text style={styles.nutritionalDataTitle}>
                  Valeurs énergétiques {nutritionalValuesIndicator}
                </Text>
                <Text style={styles.nutritionalDataContent}>
                  {nutritonalValues.part.energeticValues}{nutritonalValues.part.energeticValuesUnit} / {nutritonalValues.perCentGrams.energeticValues}{nutritonalValues.perCentGrams.energeticValuesUnit}
                </Text>
              </View>

              <View style={styles.nutritionalDataContainer}>
                <Text style={styles.nutritionalDataTitle}>
                  Matières grasses {nutritionalValuesIndicator}
                </Text>
                <Text style={styles.nutritionalDataContent}>
                  {nutritonalValues.part.fattySubstances}{nutritonalValues.part.fattySubstancesUnit} / {nutritonalValues.perCentGrams.fattySubstances}{nutritonalValues.perCentGrams.fattySubstancesUnit}
                </Text>
              </View>
            </View>
          </View>
        )}

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical:36,
    paddingHorizontal:24,
  },
  title: {
    width:"auto",
    fontSize:24,
    fontWeight:"bold",
    letterSpacing:.24,
    marginHorizontal:"auto",
  },
  imageContainer: {
    maxWidth:350,
    marginHorital:"auto",
    backgroundColor:"transparent",
  },
  image: {
    width:"100%",
    height:"auto",
    aspectRatio:1/1,
  },
  description: {
    maxWidth:350,
    textAlign:"left",
    marginHorizontal:"auto",
  },
  ingredients: {
    maxWidth:350,
    textAlign:"left",
    fontWeight:600,
    marginHorizontal:"auto",
  },
  allergens: {
    maxWidth:350,
    textAlign:"left",
    fontSize:12,
    fontWeight:400,
    marginHorizontal:"auto",
  },
  canContainAllergens: {
    maxWidth:350,
    textAlign:"left",
    fontSize:12,
    fontWeight:400,
    marginHorizontal:"auto",
  },
  nutritionalValuesContainer: {

  },
  nutritionalValuesContainerTitle: {

  },
  nutritionalValuesDatas: {

  },
  nutritionalDataContainer: {

  },
  nutritionalDataTitle: {

  },
  nutritionalDataContent: {

  },
});