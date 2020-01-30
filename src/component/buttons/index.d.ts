import {
  ViewComponent,
  ViewProps,
  StyleProp,
  TextStyle,
  TouchableWithoutFeedbackPropsIOS,
  AccessibilityProps,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export interface ButtonProps
  extends TouchableOpacityProps,
    TouchableNativeFeedbackProps {
  type?: 'solid' | 'outline' | 'clear';
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewProps>;
}

export default class Button extends React.Component<ButtonProps, any> {}
