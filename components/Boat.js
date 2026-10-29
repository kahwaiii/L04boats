import React from 'react';
import {View, Text, Image } from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

// Ex1: User-defined component Movie with properties title and year
const Boat = ({ poster, name, description}) => {
    return (
        <View>
            <Text></Text>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                <FontAwesome6 name="ship" size={40} color={"black"} />
                {name}
            </Text>
            <Text style={{ fontSize: 16 }}> {description} </Text>
            <Image source={poster}
                   style={{width: '100%', height: 250}} />
            <Text></Text>
        </View>
    );
};
export default Boat;