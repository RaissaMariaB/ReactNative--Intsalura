import React, { useState } from 'react';

import { ImageStyle } from './style'

import {
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


const ImageComponent = ({ src, description, likes }) => {
  const [ like, setLike ] = useState(false);
  const [ moreLikes, setMoreLikes ] = useState(likes)

  const likeImg = ( like ) => {
    if( like ){
      return require("../../../assets/s2-checked.png");
    }
      return require("../../../assets/s2.png");
  }

  const likePhoto = () => {
    let heart = moreLikes
    if( like ){
      heart --
    } else{
      heart ++
    }
    setMoreLikes(heart)
    setLike(!like)
  }

  return (
    <>
  <Image
    source={{ uri: src }}
    style={ImageStyle.image}
    />
    <View style={ImageStyle.viewComents}>
      <Text>{description}</Text>
    </View>
    <View style={ImageStyle.viewLike}>
      <TouchableOpacity onPress={() => likePhoto()}>
      <Image
      source={likeImg(like)}
      style={ImageStyle.like}
      />
      </TouchableOpacity>
      <Text>{moreLikes}</Text>
    </View>
    </>
  );
};

export default ImageComponent;
