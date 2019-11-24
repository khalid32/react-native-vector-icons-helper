import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const Icon = ({bundle="Ionicons", name="md-home", color='white', size=18, style={}}) => {
    switch(bundle){
        case 'AntDesign':
            return <AntDesign name={name} size={size} color={color} style={style} />;
            break;
        case 'Entypo':
            return <Entypo name={name} size={size} color={color} style={style} />;
            break;
        case 'EvilIcons':
            return <EvilIcons name={name} size={size} color={color} style={style} />;
            break;
        case 'Ionicons':
            return <Ionicons name={name} size={size} color={color} style={style} />;
            break;
        case 'Feather':
            return <Feather name={name} size={size} color={color} style={style} />;
            break;
        case 'FontAwesome':
            return <FontAwesome name={name} size={size} color={color} style={style} />;
            break;
        case 'FontAwesome5':
            return <FontAwesome5 name={name} size={size} color={color} style={style} />;
            break;
        case 'Fontisto':
            return <Fontisto name={name} size={size} color={color} style={style} />;
            break;
        case 'Foundation':
            return <Foundation name={name} size={size} color={color} style={style} />;
            break;
        case 'MaterialIcons':
            return <MaterialIcons name={name} size={size} color={color} style={style} />;
            break;
        case 'MaterialCommunityIcons':
            return <MaterialCommunityIcons name={name} size={size} color={color} style={style} />;
            break;
        case 'Octicons':
            return <Octicons name={name} size={size} color={color} style={style} />;
            break;
        case 'Zocial':
            return <Zocial name={name} size={size} color={color} style={style} />;
            break;
        case 'SimpleLineIcons':
            return <SimpleLineIcons name={name} size={size} color={color} style={style} />;
            break;
        default:
            return <Ionicons name={name} size={size} color={color} style={style} />;
    }
}