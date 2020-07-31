import { 
    StyleSheet,
    Dimensions,
} from 'react-native';


export const ImageStyle = StyleSheet.create({
    image:{
      width: Dimensions.get("screen").width,
      height: Dimensions.get("screen").width,
    },
  });