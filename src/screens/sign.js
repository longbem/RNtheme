import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Sign = props => {
  const {navigate, goBack} = props.navigation;
  return (
    <View style={{flex: 1, backgroundColor: '#123'}}>
      <SafeAreaView>
        <View>
          <TouchableOpacity onPress={() => goBack()}>
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: '#234', height: 100}}></View>
      </SafeAreaView>
    </View>
  );
};

export default Sign;

const styles = StyleSheet.create({});
