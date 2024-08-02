import {ResponsiveExemple} from "@/components/globals/ResponsiveExemple";
import { ActivityIndicator } from "react-native";

export default function ExempleScreen(){
  return(<ResponsiveExemple>
    <ActivityIndicator color="#e26e26" size="large"/>
  </ResponsiveExemple>);
}