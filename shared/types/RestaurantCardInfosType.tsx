export type RestaurantCardInfosType = {
  title?: string;
  imageUrl?: string;
  description?: string;
  composition?:any,
  ingredients?: string[];
  allergens?: string[];
  canContainAllergens?: string[];
  nutritonalValues?: {
    part?: {
      energeticValues?: string;
      energeticValuesUnit?: string;
      fattySubstances?: string;
      fattySubstanceUnit?: string;
      saturatedFattyAcids?: string;
      saturatedFattyAcidsUnit?: string;
      proteins?: string;
      proteinsUnit?: string;
      carbonhydrates?: string;
      carbonhydratesUnit?: string;
      fastSugars?: string;
      fastSugarsUnit?: string;
      salt?: string;
      saltUnit?: string;
    };
    perCentsGram?: {
      energeticValues?: string;
      energeticValuesUnit?: string;
      fattySubstances?: string;
      fattySubstanceUnit?: string;
      saturatedFattyAcids?: string;
      saturatedFattyAcidsUnit?: string;
      proteins?: string;
      proteinsUnit?: string;
      carbonhydrates?: string;
      carbonhydratesUnit?: string;
      fastSugars?: string;
      fastSugarsUnit?: string;
      salt?: string;
      saltUnit?: string;
    };
  };
};