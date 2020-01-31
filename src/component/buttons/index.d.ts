import {
  ViewComponent,
  ViewProps,
  StyleProp,
  TextStyle,
  TouchableWithoutFeedbackPropsIOS,
  AccessibilityProps,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
  ViewStyle,
} from 'react-native';

export interface ButtonProps
  extends TouchableOpacityProps,
    TouchableNativeFeedbackProps {
  type?: 'solid' | 'outline' | 'clear';
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewProps>;
  renderIcon?: object;
  iconStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

export default class Button extends React.Component<ButtonProps, any> {}
