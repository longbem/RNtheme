import {ViewProps} from 'react-native';

export interface HeadingProps extends ViewProps {
  title?: string;
  seeAll?: boolean;
}

export default class Heading extends React.Component<HeadingProps, ant> {}
