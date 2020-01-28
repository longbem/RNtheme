import I18n from 'react-native-i18n';

import en from './en';
import vn from './vn';

I18n.fallbacks = true;

I18n.translations = {
  en: en,
  'vi-VN': vn,
};

export default I18n;
