import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import I18n from 'react-native-i18n';
import {Color} from '../config';
import Icon from 'react-native-vector-icons/Ionicons';

const Heading = props => {
  const {title, seeAll} = props;
  console.log('TCL: seeAll', seeAll);
  return (
    <View style={[styles.boxHeading]}>
      {title && <Text style={[styles.title]}>{title}</Text>}
      {seeAll && (
        <TouchableOpacity style={styles.boxSubTitle}>
          <Text style={styles.subTitle}>{I18n.t('see_all')}</Text>
          <Icon name="ios-arrow-forward" size={20} color={Color.orange} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Heading;

Heading.protoTypes = {
  title: PropTypes.string,
  seeAll: PropTypes.bool,
};
Heading.defaultProps = {
  title: '',
  seeAll: false,
};

const styles = StyleSheet.create({
  boxHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  boxSubTitle: {
    paddingTop: 6,
    flexDirection: 'row',
  },
  subTitle: {
    fontSize: 17,
    color: Color.orange,
    paddingHorizontal: 7,
  },
});
