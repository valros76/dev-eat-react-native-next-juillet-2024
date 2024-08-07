import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { CustomText } from "@/components/globals";

export default function RestaurantCardInfos({ props = {} }) {

  const {
    title = "Inconnu",
    imageUrl = "https://cdn.pixabay.com/photo/2022/04/20/14/39/burger-7145332_1280.png",
    description = undefined,
    ingredients = undefined,
    allergens = undefined,
    canContainAllergens = undefined,
    nutritonalValues = undefined,
    ctaAction = undefined,
  } = props;

  const [isHover, setIsHover] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const [loaded, error] = useFonts({
    "Unna Regular": require("@/assets/fonts/Unna-Regular.ttf"),
    "Unna Bold": require("@/assets/fonts/Unna-Bold.ttf"),
  });

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

  useEffect(() => {
  }, [props.title, props.description, props.imageUrl, props.ingredients, props.allergens, props.canContainAllergens, props.nutritonalValues, props.ctaAction]);

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Pressable
            onPress={() => ctaAction && ctaAction()}
            style={{
              ...styles.closeIconButton,
              marginBottom: 24,
            }}
          >
            <Feather
              name="eye-off"
              size={16}
              color="#FFFFFF"
              style={styles.closeIcon}
            />
          </Pressable>

          <View style={styles.restaurantCardMainInfos}>
            <CustomText style={styles.title}>
              {title}
            </CustomText>

            {imageUrl && (<View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: imageUrl
                }}
                resizeMode="contain"
              />
            </View>)}

            {description && (description.map((item) => (<CustomText style={{
              ...styles.description,
            }} lineHeight={1.5} key={generateKeyForListItem(item)}>
              {item}
            </CustomText>)))}
          </View>

          {ingredients &&
            (<View style={styles.ingredientsSection}>
              <CustomText
                style={styles.ingredientsSectionTitle}
              >
                Ingrédients
              </CustomText>

              {ingredients.map((item) => (
                <View
                  key={generateKeyForListItem(item)}
                  style={styles.ingredientsContainer}
                >
                  <CustomText style={styles.ingredients}>
                    <MaterialCommunityIcons
                      name="food-variant"
                      size={14}
                      color="#B8A747"
                    />
                    {item}
                  </CustomText>
                </View>
              ))}

            </View>)}

          {allergens && (<View style={styles.allergensSection}>
            <CustomText style={styles.allergensSectionTitle}>
              Allergènes
            </CustomText>

            {allergens.map((item) => (
              <View
                key={generateKeyForListItem(item)}
                style={styles.allergensContainer}
              >
                <CustomText style={styles.allergens}>
                  <MaterialCommunityIcons
                    name="allergy"
                    size={14}
                    color="#B8A747"
                  />
                  {item}
                </CustomText>
              </View>
            ))}

          </View>)}

          {canContainAllergens && (<View style={styles.canContainAllergensSection}>
            <CustomText style={styles.canContainAllergensSectionTitle}>
              Peut contenir des traces de :
            </CustomText>

            {canContainAllergens.map((item) => (
              <View
                key={generateKeyForListItem(item)}
                style={styles.canContainAllergensContainer}
              >
                <CustomText style={styles.canContainAllergens}>
                  <MaterialCommunityIcons
                    name="allergy"
                    size={14}
                    color="#B8A747"
                  />
                  {item}
                </CustomText>
              </View>
            ))}

          </View>)}

          {nutritonalValues && (
            <View style={styles.nutritionalValuesContainer}>
              <CustomText style={styles.nutritionalValuesContainerTitle}>
                Valeurs nutritionnelles {nutritionalValuesIndicator}
              </CustomText>


              <View style={styles.nutritionalValuesDatas}>

                {(nutritonalValues.part.energeticValues && nutritonalValues.perCentGrams.energeticValues && nutritonalValues.part.energeticValuesUnit && nutritonalValues.perCentGrams.energeticValuesUnit) && (<View style={styles.nutritionalDataContainer}>
                  <CustomText style={styles.nutritionalDataTitle}>
                    Valeurs énergétiques
                  </CustomText>
                  <CustomText style={styles.nutritionalDataContent}>
                    {nutritonalValues.part.energeticValues}{nutritonalValues.part.energeticValuesUnit} / {nutritonalValues.perCentGrams.energeticValues}{nutritonalValues.perCentGrams.energeticValuesUnit}
                  </CustomText>
                </View>)}

                {(nutritonalValues.part.fattySubstances && nutritonalValues.perCentGrams.fattySubstances && nutritonalValues.part.fattySubstancesUnit && nutritonalValues.perCentGrams.fattySubstancesUnit) && (<View style={styles.nutritionalDataContainer}>
                  <CustomText style={styles.nutritionalDataTitle}>
                    Matières grasses
                  </CustomText>
                  <CustomText style={styles.nutritionalDataContent}>
                    {nutritonalValues.part.fattySubstances}{nutritonalValues.part.fattySubstancesUnit} / {nutritonalValues.perCentGrams.fattySubstances}{nutritonalValues.perCentGrams.fattySubstancesUnit}
                  </CustomText>
                </View>)}

                {(nutritonalValues.part.saturatedFattyAcids && nutritonalValues.perCentGrams.saturatedFattyAcids && nutritonalValues.part.saturatedFattyAcidsUnit && nutritonalValues.perCentGrams.saturatedFattyAcidsUnit) && (<View style={styles.nutritionalDataContainer}>
                  <CustomText style={styles.nutritionalDataTitle}>
                    Dont acides gras saturés
                  </CustomText>
                  <CustomText style={styles.nutritionalDataContent}>
                    {nutritonalValues.part.saturatedFattyAcids}{nutritonalValues.part.saturatedFattyAcidsUnit} / {nutritonalValues.perCentGrams.saturatedFattyAcids}{nutritonalValues.perCentGrams.saturatedFattyAcidsUnit}
                  </CustomText>
                </View>)}

                {(nutritonalValues.part.proteins && nutritonalValues.perCentGrams.proteins && nutritonalValues.part.proteinsUnit && nutritonalValues.perCentGrams.proteinsUnit) && (<View style={styles.nutritionalDataContainer}>
                  <CustomText style={styles.nutritionalDataTitle}>
                    Protéines
                  </CustomText>
                  <CustomText style={styles.nutritionalDataContent}>
                    {nutritonalValues.part.proteins}{nutritonalValues.part.proteinsUnit} / {nutritonalValues.perCentGrams.proteins}{nutritonalValues.perCentGrams.proteinsUnit}
                  </CustomText>
                </View>)}

                {(nutritonalValues.part.carbonhydrates && nutritonalValues.perCentGrams.carbonhydrates && nutritonalValues.part.carbonhydratesUnit && nutritonalValues.perCentGrams.carbonhydratesUnit) && (<View style={styles.nutritionalDataContainer}>
                  <CustomText style={styles.nutritionalDataTitle}>
                    Glucides
                  </CustomText>
                  <CustomText style={styles.nutritionalDataContent}>
                    {nutritonalValues.part.carbonhydrates}{nutritonalValues.part.carbonhydratesUnit} / {nutritonalValues.perCentGrams.carbonhydrates}{nutritonalValues.perCentGrams.carbonhydratesUnit}
                  </CustomText>
                </View>)}

                {(nutritonalValues.part.fastSugars && nutritonalValues.perCentGrams.fastSugars && nutritonalValues.part.fastSugarsUnit && nutritonalValues.perCentGrams.fastSugarsUnit) && (<View style={styles.nutritionalDataContainer}>
                  <CustomText style={styles.nutritionalDataTitle}>
                    Dont sucres rapides
                  </CustomText>
                  <CustomText style={styles.nutritionalDataContent}>
                    {nutritonalValues.part.fastSugars}{nutritonalValues.part.fastSugarsUnit} / {nutritonalValues.perCentGrams.fastSugars}{nutritonalValues.perCentGrams.fastSugarsUnit}
                  </CustomText>
                </View>)}

                {(nutritonalValues.part.salt && nutritonalValues.perCentGrams.salt && nutritonalValues.part.saltUnit && nutritonalValues.perCentGrams.saltUnit) && (<View style={styles.nutritionalDataContainer}>
                  <CustomText style={styles.nutritionalDataTitle}>
                    Sel
                  </CustomText>
                  <CustomText style={styles.nutritionalDataContent}>
                    {nutritonalValues.part.salt}{nutritonalValues.part.saltUnit} / {nutritonalValues.perCentGrams.salt}{nutritonalValues.perCentGrams.saltUnit}
                  </CustomText>
                </View>)}

              </View>
            </View>
          )}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: "100%",
    padding: 12,
  },
  container: {
    flex: 1,
    gap: 18,
    maxWidth: 350,
    marginHorizontal: "auto",
    paddingVertical: 36,
    paddingHorizontal: 24,
    boxShadow: "inset 0 -1px 6px -5px #333, inset 0 1px 6px -5px #333, inset -1px 0 6px -5px #333, inset 1px 0 6px -5px #333",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
  },
  restaurantCardMainInfos: {
    width: "100%",
    maxWidth:"100%",
    gap: 0,
  },
  title: {
    width: "auto",
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: .28,
    marginHorizontal: "auto",
  },
  imageContainer: {
    width: 150,
    maxWidth:"100%",
    height: 150,
    maxWidth: 150,
    marginHorizontal: "auto",
    backgroundColor: "transparent",
  },
  image: {
    width: "100%",
    height: "auto",
    aspectRatio: 1 / 1,
  },
  description: {
    width: "100%",
    maxWidth: 350,
    textAlign: "left",
    marginHorizontal: "auto",
  },
  ingredientsSection: {
    width: 600,
    maxWidth:"100%",
    backgroundColor: "#FBFAF4",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    gap: 12,
    boxShadow: "inset 0 -1px 6px -5px #333, inset 0 1px 6px -5px #333, inset -1px 0 6px -5px #333, inset 1px 0 6px -5px #333",
  },
  ingredientsSectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: .32,
  },
  ingredientsContainer: {
    width: "100%",
  },
  ingredients: {
    width: "100%",
    maxWidth: 350,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 6,
    fontSize: 14,
    textAlign: "left",
    fontWeight: 500,
    marginHorizontal: "auto",
  },
  allergensSection: {
    width: 600,
    maxWidth:"100%",
    backgroundColor: "#FBFAF4",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    gap: 12,
    boxShadow: "inset 0 -1px 6px -5px #333, inset 0 1px 6px -5px #333, inset -1px 0 6px -5px #333, inset 1px 0 6px -5px #333",
  },
  allergensSectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: .32,
  },
  allergensContainer: {
    width: "100%",
  },
  allergens: {
    width: "100%",
    maxWidth: 350,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 6,
    fontSize: 14,
    textAlign: "left",
    fontWeight: 500,
    marginHorizontal: "auto",
  },
  canContainAllergensSection: {
    width: 600,
    maxWidth:"100%",
    backgroundColor: "#FBFAF4",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    gap: 12,
    boxShadow: "inset 0 -1px 6px -5px #333, inset 0 1px 6px -5px #333, inset -1px 0 6px -5px #333, inset 1px 0 6px -5px #333",
  },
  canContainAllergensSectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: .32,
  },
  canContainAllergensContainer: {
    width: "100%",
  },
  canContainAllergens: {
    width: "100%",
    maxWidth: 350,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 6,
    fontSize: 14,
    textAlign: "left",
    fontWeight: 500,
    marginHorizontal: "auto",
  },
  nutritionalValuesContainer: {
    width: "100%",
    backgroundColor: "#FBFAF4",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    gap: 6,
    boxShadow: "inset 0 -1px 6px -5px #333, inset 0 1px 6px -5px #333, inset -1px 0 6px -5px #333, inset 1px 0 6px -5px #333",
  },
  nutritionalValuesContainerTitle: {
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: .32,
  },
  nutritionalValuesDatas: {
    width: "100%",
    gap: 12,
    paddingVertical: 12,
  },
  nutritionalDataContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "stretch",
    gap: 3,
  },
  nutritionalDataTitle: {
    fontWeight: 500,
    textAlign: "left",
  },
  nutritionalDataContent: {
    fontSize: 14,
    fontWeight: 400,
    fontStyle: "italic",
  },
  closeIconButton: {
    width: "auto",
    marginLeft: "auto",
  },
  closeIcon: {
    width: 28,
    height: 28,
    lineHeight:28,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 28,
    backgroundColor: "#e23926",
    textAlign: "center",
    boxShadow: "0 2px 0 -1px #333",
  }
});