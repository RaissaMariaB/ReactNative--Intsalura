import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Alura from '../assets/alura.jpg';
import ImageComponent from './components/ImageComponent';

import {
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';

const Home = () => {
  const [ photos, setPhotos ] = useState([])

  useEffect(() => {
    const readPhotos = async() =>{
      const photoHttp = await fetch('http://192.168.0.5:3030/feed')
      const responsePhoto = await photoHttp.json()
      setPhotos(responsePhoto)
    }

    readPhotos()
  },[])

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={photos}
        renderItem={({item}) =>
          <>
          <Header userName={item.userName} />
          <ImageComponent
          src={Alura}
          />
          </>
        }
        >
          </FlatList>
      </ScrollView>
    </SafeAreaView>
    );
};

export default Home;
