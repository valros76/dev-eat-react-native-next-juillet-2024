import { Image, ScrollView, StyleSheet, Text, View } from "react-native";


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

  const generateKeyForListItem = (keyBase) => {
    const randomIDLength = 12;
    const randomID = Math.random()
      .toString(36)
      .substring(2, randomIDLength + 2);
    keyBase = keyBase.replaceAll(" ", "").trim();
    keyBase = `${keyBase}-${randomID}`;
    return keyBase;
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>

        {imageUrl && (<View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: imageUrl
            }}
            resizeMode="contain"
          />
        </View>)}

        {description && (description.map((item) => (<Text style={styles.description} key={generateKeyForListItem(item)}>
          {item}
        </Text>)))}

        {ingredients && (ingredients.map((item) => (<Text style={styles.ingredients} key={generateKeyForListItem(item)}>
          {item}
        </Text>)))}

        {allergens && (allergens.map((item) => (<Text style={styles.allergens} key={generateKeyForListItem(item)}>
          {item}
        </Text>)))}

        {canContainAllergens && (canContainAllergens.map((item) => (<Text style={styles.canContainAllergens} key={generateKeyForListItem(item)}>
          {item}
        </Text>)))}

        {nutritonalValues && (
          <View style={styles.nutritionalValuesContainer}>
            <Text style={styles.nutritionalValuesContainerTitle}>
              Valeurs nutritionnelles {nutritionalValuesIndicator}
            </Text>


            <View style={styles.nutritionalValuesDatas}>

              {(nutritonalValues.part.energeticValues && nutritonalValues.perCentGrams.energeticValues && nutritonalValues.part.energeticValuesUnit && nutritonalValues.perCentGrams.energeticValuesUnit) && (<View style={styles.nutritionalDataContainer}>
                <Text style={styles.nutritionalDataTitle}>
                  Valeurs énergétiques
                </Text>
                <Text style={styles.nutritionalDataContent}>
                  {nutritonalValues.part.energeticValues}{nutritonalValues.part.energeticValuesUnit} / {nutritonalValues.perCentGrams.energeticValues}{nutritonalValues.perCentGrams.energeticValuesUnit}
                </Text>
              </View>)}

              {(nutritonalValues.part.fattySubstances && nutritonalValues.perCentGrams.fattySubstances && nutritonalValues.part.fattySubstancesUnit && nutritonalValues.perCentGrams.fattySubstancesUnit) && (<View style={styles.nutritionalDataContainer}>
                <Text style={styles.nutritionalDataTitle}>
                  Matières grasses
                </Text>
                <Text style={styles.nutritionalDataContent}>
                  {nutritonalValues.part.fattySubstances}{nutritonalValues.part.fattySubstancesUnit} / {nutritonalValues.perCentGrams.fattySubstances}{nutritonalValues.perCentGrams.fattySubstancesUnit}
                </Text>
              </View>)}

              {(nutritonalValues.part.saturatedFattyAcids && nutritonalValues.perCentGrams.saturatedFattyAcids && nutritonalValues.part.saturatedFattyAcidsUnit && nutritonalValues.perCentGrams.saturatedFattyAcidsUnit) && (<View style={styles.nutritionalDataContainer}>
                <Text style={styles.nutritionalDataTitle}>
                  Dont acides gras saturés
                </Text>
                <Text style={styles.nutritionalDataContent}>
                  {nutritonalValues.part.saturatedFattyAcids}{nutritonalValues.part.saturatedFattyAcidsUnit} / {nutritonalValues.perCentGrams.saturatedFattyAcids}{nutritonalValues.perCentGrams.saturatedFattyAcidsUnit}
                </Text>
              </View>)}

              {(nutritonalValues.part.proteins && nutritonalValues.perCentGrams.proteins && nutritonalValues.part.proteinsUnit && nutritonalValues.perCentGrams.proteinsUnit) && (<View style={styles.nutritionalDataContainer}>
                <Text style={styles.nutritionalDataTitle}>
                  Protéines
                </Text>
                <Text style={styles.nutritionalDataContent}>
                  {nutritonalValues.part.proteins}{nutritonalValues.part.proteinsUnit} / {nutritonalValues.perCentGrams.proteins}{nutritonalValues.perCentGrams.proteinsUnit}
                </Text>
              </View>)}

              {(nutritonalValues.part.carbonhydrates && nutritonalValues.perCentGrams.carbonhydrates && nutritonalValues.part.carbonhydratesUnit && nutritonalValues.perCentGrams.carbonhydratesUnit) && (<View style={styles.nutritionalDataContainer}>
                <Text style={styles.nutritionalDataTitle}>
                  Glucides
                </Text>
                <Text style={styles.nutritionalDataContent}>
                  {nutritonalValues.part.carbonhydrates}{nutritonalValues.part.carbonhydratesUnit} / {nutritonalValues.perCentGrams.carbonhydrates}{nutritonalValues.perCentGrams.carbonhydratesUnit}
                </Text>
              </View>)}

              {(nutritonalValues.part.fastSugars && nutritonalValues.perCentGrams.fastSugars && nutritonalValues.part.fastSugarsUnit && nutritonalValues.perCentGrams.fastSugarsUnit) && (<View style={styles.nutritionalDataContainer}>
                <Text style={styles.nutritionalDataTitle}>
                  Dont sucres rapides
                </Text>
                <Text style={styles.nutritionalDataContent}>
                  {nutritonalValues.part.fastSugars}{nutritonalValues.part.fastSugarsUnit} / {nutritonalValues.perCentGrams.fastSugars}{nutritonalValues.perCentGrams.fastSugarsUnit}
                </Text>
              </View>)}

              {(nutritonalValues.part.salt && nutritonalValues.perCentGrams.salt && nutritonalValues.part.saltUnit && nutritonalValues.perCentGrams.saltUnit) && (<View style={styles.nutritionalDataContainer}>
                <Text style={styles.nutritionalDataTitle}>
                  Sel
                </Text>
                <Text style={styles.nutritionalDataContent}>
                  {nutritonalValues.part.salt}{nutritonalValues.part.saltUnit} / {nutritonalValues.perCentGrams.salt}{nutritonalValues.perCentGrams.saltUnit}
                </Text>
              </View>)}

            </View>
          </View>
        )}

      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  scrollView:{
    width:"100%",
  },
  container: {
    flex: 1,
    maxWidth:350,
    marginHorizontal:"auto",
    paddingVertical: 36,
    paddingHorizontal: 24,
  },
  title: {
    width: "auto",
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: .28,
    marginHorizontal: "auto",
  },
  imageContainer: {
    maxWidth: 350,
    marginHorital: "auto",
    backgroundColor: "transparent",
  },
  image: {
    width: "100%",
    height: "auto",
    aspectRatio: 1 / 1,
  },
  description: {
    maxWidth: 350,
    textAlign: "left",
    marginHorizontal: "auto",
  },
  ingredients: {
    maxWidth: 350,
    textAlign: "left",
    fontWeight: 600,
    marginHorizontal: "auto",
  },
  allergens: {
    maxWidth: 350,
    textAlign: "left",
    fontSize: 12,
    fontWeight: 400,
    marginHorizontal: "auto",
  },
  canContainAllergens: {
    maxWidth: 350,
    textAlign: "left",
    fontSize: 12,
    fontWeight: 400,
    marginHorizontal: "auto",
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