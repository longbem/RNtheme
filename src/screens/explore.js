import React, {useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView, Image} from 'react-native';
import Search from '../component/search';
import ButtonCom from '../component/buttons';
import Icon from 'react-native-vector-icons/Ionicons';
import Heading from '../component/heading';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {Color, Typography} from '../component/config';
import data from '../data';
import List from '../component/list';
const dataA = [
  {
    title: 'Men',
    url: require('../images/Icon_Mens.png'),
  },
  {
    title: 'Women',
    url: require('../images/Icon_Womens.png'),
  },
  {
    title: 'Devices',
    url: require('../images/Icon_Devices.png'),
  },
  {
    title: 'Gadgets',
    url: require('../images/Icon_Gadgets.png'),
  },
  {
    title: 'Gaming',
    url: require('../images/Icon_Gaming.png'),
  },
];
const Explore = props => {
  const ItemList = ({title, urlImage}) => {
    return (
      <TouchableOpacity>
        <View style={styles.boxIg}>
          <Image source={urlImage} style={styles.ig} />
        </View>
        <Text style={styles.txtItem}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <Search></Search>
      </View>
      <View>
        <Heading title="Categories" />
        <FlatList
          data={dataA}
          renderItem={({item}) => (
            <ItemList title={item.title} urlImage={item.url} />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View>
        <List
          data={data}
          title="Best Selling"
          seeAll={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  boxIg: {
    width: 70,
    height: 70,
    backgroundColor: Color.background,
    borderRadius: 50,
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  ig: {
    alignSelf: 'center',
  },
  txtItem: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: Typography.MEDIUM,
  },
});
