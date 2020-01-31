import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {ViewPropTypes, TextPropTypes, Color} from '../config';
import {nodeType, GetIconType} from '../helper';

const defaultStyle = type => {
  try {
    const style = [styles.default];
    if (type) {
      style.push(styles[type]);
    }
  } catch (err) {
    console.log('TCL: err', err);
  }
};

const Button = props => {
  //const {children, type} = props;
  const combinStyle = defaultStyle(type);
  const {
    title,
    titleStyle,
    titleProps,
    containerStyle,
    type,
    buttonStyle,
    onPress,
    renderIcon,
    iconStyle,
  } = props;

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        {
          borderRadius:
            buttonStyle.borderRadius || styles.container.borderRadius,
        },
        containerStyle,
      ])}>
      <TouchableOpacity onPress={onPress} accessibilityRole="button">
        <View style={StyleSheet.flatten([styles.button(type), buttonStyle])}>
          {renderIcon && (
            <View style={StyleSheet.flatten([styles.iconContainer, iconStyle])}>
              {renderIcon}
            </View>
          )}

          {!!title && (
            <Text style={StyleSheet.flatten([styles.title(type), titleStyle])}>
              {title}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  titleStyle: Text.propTypes.style,
  type: PropTypes.oneOf(['solid', 'outline', 'clear']),
  buttonStyle: ViewPropTypes.style,
  onPress: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  renderIcon: PropTypes.object,
  iconStyle: ViewPropTypes.style,
};

Button.defaultProps = {
  title: '',
  onPress: () => console.log('Please attach a method to this component'),
  buttonStyle: {
    borderRadius: 3,
  },

  type: 'solid',
};

const styles = {
  button: type => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: type === 'solid' ? Color.button : 'transparent',
    padding: 8,
    borderWidth: type === 'outline' ? StyleSheet.hairlineWidth : 0,
    borderColor: Color.border_btnWith,
  }),
  container: {
    borderRadius: 3,
  },

  title: type => ({
    color: type === 'solid' ? 'white' : Color.text_title,
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 2,
    paddingBottom: 1,
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif-medium',
      },
      default: {
        fontSize: 18,
      },
    }),
  }),
  iconContainer: {
    marginHorizontal: 10,
  },
  raised: type =>
    type !== 'clear' && {
      backgroundColor: '#fff',
      ...Platform.select({
        android: {
          elevation: 4,
        },
        default: {
          shadowColor: 'rgba(0,0,0, .4)',
          shadowOffset: {height: 1, width: 1},
          shadowOpacity: 1,
          shadowRadius: 1,
        },
      }),
    },
};

export default Button;
