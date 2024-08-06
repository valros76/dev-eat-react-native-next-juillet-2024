import { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";


export default CustomText = ({props = {}, children = {}, style={}}) => {
  const {
    titleMode = false,
    italicMode = false,
    boldMode = false,
    italicBoldMode = false,
  } = props;

  const [fontFamily, setFontFamily] = useState("");
  const [fontWeight, setFontWeight] = useState("");
  const [fontStyle, setFontStyle] = useState("");

  useEffect(() => {
    switch(true){
      case (props.titleMode):
        setFontFamily("System");
        setFontWeight("bold");
        setFontStyle("normal");
      break;
      case (props.italicMode):
        setFontFamily("Unna Italic");
        setFontWeight("regular");
        setFontStyle("italic");
      break;
      case (props.boldMode):
        setFontFamily("Unna Bold");
        setFontWeight("bold");
        setFontStyle("normal");
      break;
      case (props.italicBoldMode):
        setFontFamily("Unna Italic Bold");
        setFontWeight("bold");
        setFontStyle("italic");
      break;
      default:
        setFontFamily("Unna Regular");
        setFontWeight("regular");
        setFontStyle("normal");
      break;
    }
  }, [props.titleMode, props.italicMode, props.boldMode, props.italicBoldMode]);

  return(
    <Text style={{
      ...styles.text,
      ...style,
      fontFamily: fontFamily,
      fontStyle: fontStyle,
      fontWeight: fontWeight,
    }}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily:"Unna Regular, Roboto, San Francisco",
    fontSize:16,
    fontWeight:400,
  }
});