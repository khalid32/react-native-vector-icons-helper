# react-native-vector-icons-helper

A helper function to import vector icons from `react-native-vector-icons`...

## Installation

First, install [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

Using npm:
```bash
npm install --save react-native-vector-icons-helper
# or
yarn add react-native-vector-icons-helper
```

## Usage

```javascript
import Icon from 'react-native-vector-icons-helper';

<Icon bundle='Ionicons' name='md-home' size={18} color='white' style={{}} />
```

## Bundle List

- AntDesign
- Entypo
- EvilIcons
- Ionicons
- Feather
- FontAwesome
- FontAwesome5
- Fontisto
- Foundation
- MaterialIcons
- MaterialCommunityIcons
- Octicons
- Zocial
- SimpleLineIcons

You'll find icon name on this [directory](https://oblador.github.io/react-native-vector-icons/)!

## Properties

| Name          | Type    | Default      |
|---------------|---------|--------------|
| **bundle** | String | 'Ionicons' |
| **name** | String | 'md-home' |
| **size** | Int | 18 |
| **color** | String | 'white' |
| **style** | Object | {} |