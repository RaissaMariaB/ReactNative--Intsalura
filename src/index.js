import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import ImageComponent from './components/ImageComponent';
import Comments from './components/Comments'

import readPhotos from './api/feed'

import {
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';

const Home = () => {
  const [ photos, setPhotos ] = useState([])

  useEffect(() => {
      readPhotos(setPhotos)
  },[])

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={photos}
        renderItem={({item}) =>
          <>
            <Header userName={item.userName} src={{ uri : item.userURL }}/>
            <ImageComponent
            src={item.url}
            description={item.description}
            likes={item.likes}
            />
            <Comments comments={item.comentarios} />
          </> }
          >
        </FlatList>
      </ScrollView>
    </SafeAreaView>

  );
};

export default Home;
