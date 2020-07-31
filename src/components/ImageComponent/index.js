import React from 'react';

import { ImageStyle } from './style'


import {
  Image,
} from 'react-native';


const App = ({ src }) => {
  return (
  <Image
    source={src}
    style={ImageStyle.image}
    />
  );
};
export default App;
