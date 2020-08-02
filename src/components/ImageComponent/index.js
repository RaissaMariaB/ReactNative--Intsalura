import React, { useState } from 'react';

import { ImageStyle } from './style';

import { likeImg, likePhoto } from '../../api/likes';

import {
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


const ImageComponent = ({ src, description, likes }) => {
  const [ like, setLike ] = useState(false);
  const [ moreLikes, setMoreLikes ] = useState(likes)


  const buttonLike = () => {
    const [newStateLike, newStateMoreLikes ] = likePhoto( like, moreLikes)
    setLike(newStateLike)
    setMoreLikes(newStateMoreLikes)
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
      <TouchableOpacity onPress={() => buttonLike()}>
      <Image
      source={likeImg(like)}
      style={ImageStyle.like}
      />
      </TouchableOpacity>
      <Text>{moreLikes} curtidas</Text>
    </View>
    </>
  );
};

export default ImageComponent;
