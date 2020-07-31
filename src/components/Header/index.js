import React from 'react';
import {
    Text,
    Image,
    View,
} from 'react-native';
import Alura from '../../../assets/alura.jpg';

import { ImageStyle, Style } from './style.js'

const Header = ({ userName }) => {
    return (
        <View style={Style.header}>
            <Image
            source={Alura}
            style={Style.userImg}
            />
            <Text>{userName}</Text>
        </View>
    );
};



export default Header;
