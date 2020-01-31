import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {SvgXml} from 'react-native-svg';
import {Color} from '../config';
import Search_Camera from '../../images/Search_Camera.jpg';

const Search = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.boxSearch}>
        <Icon name={'ios-search'} size={30} style={styles.iconSearch} />
      </TouchableOpacity>
      <Image source={Search_Camera} style={{left: -10}} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boxSearch: {
    width: '80%',
    backgroundColor: Color.background,
    borderRadius: 30,
  },
  iconSearch: {
    left: 20,
    top: 7,
  },
});
