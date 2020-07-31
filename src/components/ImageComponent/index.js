import React from 'react';

import { ImageStyle } from './style'

import {
  Image,
  Text,
} from 'react-native';

const App = ({ src, description }) => {
  return (
    <>
  <Image
    source={{uri: src}}
    style={ImageStyle.image}
    />
    <Text>{description}</Text>
    </>
  );
};
export default App;
