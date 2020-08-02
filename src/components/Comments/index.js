import React, { useState } from 'react';

import {
  TextInput,
  Text,
  FlatList,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

import { Style } from './style';

const Comentarios = ({ comments }) => {
  const [ commentState, setCommentState] = useState(comments);

  const addComment = () =>{
    console.warn(inputContent);
    inputField.clear();
    const newComment = {
      date: Date.now(),
      text: inputContent,
      userName: "RaissaMariaB"
    };
    setCommentState([...commentState, newComment]);
  };

  let inputField;
  let inputContent = ""

  return(
    <>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={commentState}
        renderItem={({ item }) => (
          <View style={Style.inline}>
            <Text style={Style.marginUserName}>
              {item.userName}
            </Text>
            <Text>{item.text}</Text>
          </View>
          )
        }
        />
        <View style={Style.inline}>
          <TextInput
          ref={textInput => inputField = textInput }
          onChangeText={ (text) => inputContent = text }
          style={Style.input}
          placeholder="Deixe seu comentário..."
          />
          <TouchableOpacity onPress={() => addComment()}>
            <Image
            style={Style.sendImg}
            source={require('../../../assets/send.png')}
            />
          </TouchableOpacity>
        </View>
    </>
  );
};

export default Comentarios;
