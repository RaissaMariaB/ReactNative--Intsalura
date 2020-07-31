import React from 'react';
import {
    Text,
    Image,
    View,
} from 'react-native';

import { Style } from './style.js'

const Header = ({ userName, src }) => {
    return (
        <View style={Style.header}>
            <Image
            source={src}
            style={Style.userImg}
            />
            <Text>{userName}</Text>
        </View>
    );
};



export default Header;
