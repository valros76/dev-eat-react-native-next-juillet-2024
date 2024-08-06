import { StyleSheet } from "react-native";
import CustomText from "./CustomText";


export default function Title({children}){
  return(
    <CustomText props={{
      titleMode: true,
    }} style={styles.title}>
      {children}
    </CustomText>
  );
}

const styles = StyleSheet.create({
  title:{
    fontFamily:"System",
    fontSize:36,
    fontWeight:"bold",
    letterSpacing:.36,
  }
});