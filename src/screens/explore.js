import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import Search from '../component/search';
import ButtonCom from '../component/buttons';
import {Button} from 'react-native-elements';
const Explore = props => {
  return (
    <SafeAreaView>
      <View>
        <Search></Search>
      </View>
      <Button title="long"></Button>
      <ButtonCom title="buton test"></ButtonCom>
    </SafeAreaView>
  );
};

export default Explore;
