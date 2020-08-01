import React from 'react';

import {
  TextInput,
  Text,
  FlatList,
  Image,
  View,
} from 'react-native';

import { Style } from './style';

const Comentarios = ({ comments }) => {

  return(
    <>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={comments}
        renderItem={({ item }) => (
            <Text>{item.text}</Text>
          )
        }
        />
        <View style={Style.inline}>
          <TextInput
          style={Style.input}
          placeholder="Deixe seu comentário..."
          />
          <Image
          style={Style.sendImg}
          source={require('../../../assets/send.png')}
          />
        </View>
    </>
  )
}

export default Comentarios
