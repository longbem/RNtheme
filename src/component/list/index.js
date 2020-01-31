import React, {useState, useMemo} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Heading from '../heading';
import {Typography, Color} from '../config';
import Icon from 'react-native-vector-icons/AntDesign';

const List = ({
  data,
  title,
  seeAll,
  horizontal,
  showsHorizontalScrollIndicator,
}) => {
  const renderSeeAll = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <TouchableOpacity>
          <Icon name="rightcircleo" size={35} style={styles.seeAll} />
          <Text style={styles.seeAll}>Xem thêm</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const dataLL = useMemo(() => {
    if (data.length >= 3) {
      const [mot, hai, ba] = data;
      const dataAA = [mot, hai, ba, {kk: 'kj'}];
      return dataAA;
    }
    return [];
  }, [data]);

  const Item = ({title, urlImage, content, price}) => {
    return (
      <View style={styles.box}>
        {!title ? (
          renderSeeAll()
        ) : (
          <View style={{width: 150}}>
            <View>
              <Image source={urlImage} />
            </View>
            <Text style={styles.txtTitle}>{title}</Text>
            <Text style={styles.txtContent}>{content}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View>
      <Heading title={title} seeAll={seeAll} />
      <FlatList
        data={dataLL}
        keyExtractor={x => x.title}
        renderItem={({item}) => (
          <Item
            title={item.title}
            urlImage={item.urlImage}
            content={item.content}
            price={item.price}
          />
        )}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 20,
  },
  txtTitle: {
    paddingVertical: 7,
    fontSize: Typography.LARGE - 6,
  },
  txtContent: {
    color: Color.text_heading1,
  },
  price: {
    paddingVertical: 7,
    color: Color.button,
  },
  seeAll: {
    alignSelf: 'center',
    color: Color.orange,
  },
});
