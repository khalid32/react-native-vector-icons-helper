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

export const Icon = ({iconBundled="Ionicons", iconName="md-home", iconColor='white', iconSize=18, iconStyle={}}) => {
    switch(iconBundled){
        case 'AntDesign':
            return <AntDesign name={iconName} size={iconSize} color={iconColor} style={iconStyle} />;
            break;
        case 'Entypo':
            return <Entypo name={iconName} size={iconSize} color={iconColor} style={iconStyle} />;
            break;
        case 'EvilIcons':
            return <EvilIcons name={iconName} size={iconSize} color={iconColor} style={iconStyle} />;
            break;
        case 'Ionicons':
            return <Ionicons name={iconName} size={iconSize} color={iconColor} style={iconStyle} />;
            break;
        case 'Feather':
            return <Feather name={iconName} size={iconSize} color={iconColor} style={iconStyle} />;
            break;
        case 'FontAwesome':
            return <FontAwesome name={iconName} size={iconSize} color={iconColor} style={iconStyle} />;
            break;
        case 'FontAwesome5':
            return <FontAwesome5 name={iconName} size={iconSize} color={iconColor} style={iconStyle} />;
            break;
        case 'Fontisto':
            return <Fontisto name={iconName} size={iconSize} color={iconColor} style={iconStyle} />;
            break;
        case 'Foundation':
            return <Foundation name={iconName} size={iconSize} color={iconColor} style={iconStyle} />;
            break;
        case 'MaterialIcons':
            return <MaterialIcons name={iconName} size={iconSize} color={iconColor} style={iconStyle} />;
            break;
        case 'MaterialCommunityIcons':
            return <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} style={iconStyle} />;
            break;
        case 'Octicons':
            return <Octicons name={iconName} size={iconSize} color={iconColor} style={iconStyle} />;
            break;
        case 'Zocial':
            return <Zocial name={iconName} size={iconSize} color={iconColor} style={iconStyle} />;
            break;
        case 'SimpleLineIcons':
            return <SimpleLineIcons name={iconName} size={iconSize} color={iconColor} style={iconStyle} />;
            break;
        default:
            return <Ionicons name={iconName} size={iconSize} color={iconColor} style={iconStyle} />;
    }
}