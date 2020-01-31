import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {Color, Spacing, Typography} from '../config';

const Input = ({title, value, secureTextEntry, autoFocus, aaa}) => {
  return (
    <View style={[styles.box, aaa]}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        value={value}
        style={styles.txtInput}
        secureTextEntry={secureTextEntry}
        autoFocus={autoFocus}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  box: {
    borderBottomColor: Color.text_heading1,
    borderBottomWidth: Spacing.hairline,
    marginTop: Spacing.large,
  },
  title: {
    color: Color.text_heading1,
    fontSize: Typography.MEDIUM,
  },
  txtInput: {
    paddingTop: Spacing.mdeium,
    fontSize: Typography.MEDIUM,
    paddingBottom: Spacing.small,
  },
});
