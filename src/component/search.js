import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Color} from './config';

const Search = () => {
  return (
    <View>
      <TouchableOpacity style={styles.box}>
        <Icon name={'ios-search'} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  box: {width: '70%', backgroundColor: Color.border_btnWith},
});
