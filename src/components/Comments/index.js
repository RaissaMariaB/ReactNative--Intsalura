import React from 'react';

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

  };

  return(
    <>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={commentState}
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
          <TouchableOpacity onPress={() => addComment()}>
            <Image
            style={Style.sendImg}
            source={require('../../../assets/send.png')}
            />
          </TouchableOpacity>
        </View>
    </>
  )
}

export default Comentarios
