import React, { useState } from 'react';

import { ImageStyle } from './style'

import {
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


const ImageComponent = ({ src, description }) => {
  const [ like, setLike ] = useState(false);

  const likeImg = (like) => {
    if( like ){
      return require("../../../assets/s2-checked.png");
    }
      return require("../../../assets/s2.png");
  }

  const likePhoto = () => {
    setLike(!like)
  }

  return (
    <>
  <Image
    source={{ uri: src }}
    style={ImageStyle.image}
    />
    <View style={{ flexDirection: "row" }}>
      <Text>{description}</Text>
      <TouchableOpacity onPress={() => likePhoto()}>
      <Image
      source={likeImg(like)}
      style={ImageStyle.like}
        />
      </TouchableOpacity>
    </View>
    </>
  );
};

export default ImageComponent;
