import {
    StyleSheet,
    Dimensions,
} from 'react-native';


export const ImageStyle = StyleSheet.create({
    image:{
      width: Dimensions.get("screen").width,
      height: Dimensions.get("screen").width,
    },
    like:{
      width: 30,
      height: 30,
      margin: 10,
    },
    viewLike:{
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 10,
    },
    viewComents:{
      marginLeft: 10,
      marginTop: 10,
    }
  });
