import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import SVG, {Image, SvgUri} from 'react-native-svg';
import I18n from '../locales/i18n';
import {getLanguages} from 'react-native-i18n';
import Input from '../component/TextInput';
import {Color, Spacing, Typography, Button} from '../styles/index';
import images from '../theme/images';

const Login = props => {
  const {navigate} = props.navigation;

  const [languages, setlanguages] = useState([]);

  useEffect(() => {
    getLanguages().then(languages => {
      console.log('TCL: Login -> languages', languages);
      setlanguages(languages);
    });
  }, []);
  console.log('fb', images.google);

  return (
    <SafeAreaView>
      <View style={{alignSelf: 'center', paddingTop: 70}}>
        <View style={styles.box}>
          <View style={styles.boxWelcome}>
            <View style={{width: languages[0] === 'en' ? '80%' : '70%'}}>
              <Text
                style={{
                  fontSize: Typography.FONT_ZISE.EXTRA_LARGE,
                  fontWeight: 'bold',
                }}>
                {I18n.t('greeting')},
              </Text>
              <Text
                style={{
                  fontSize: Typography.FONT_ZISE.MEDIUM,
                  color: Color.text_heading1,
                }}>
                {I18n.t('sign_in_to_continue')}
              </Text>
            </View>
            <View style={{paddingTop: 20}}>
              <TouchableOpacity onPress={() => navigate('Sign')}>
                <Text
                  style={{
                    fontSize: Typography.FONT_ZISE.LARGE,
                    color: Color.border_button,
                  }}>
                  {I18n.t('sign')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.boxtxt}>
            <Input title={I18n.t('email')} value={'long@gmail.com'} />
            <Input
              title={I18n.t('password')}
              value={'long@gmail.com'}
              secureTextEntry={true}
              autoFocus={true}
            />
          </View>
          <View style={{flexDirection: 'row-reverse'}}>
            <TouchableOpacity onPress={() => navigate('ForGotPass')}>
              <Text
                style={{
                  paddingRight: Spacing.extra_mdeium,
                  paddingBottom: Spacing.large,
                }}>
                {I18n.t('forgot_password')}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={[styles.white, styles.txtBtn]}>
              {I18n.t('sign_in')}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            padding: Spacing.extra_mdeium,
          }}>
          <Text style={{fontSize: Typography.FONT_ZISE.LARGE}}>
            {I18n.t('or')}
          </Text>
        </View>
        <View style={{}}>
          <TouchableOpacity style={styles.btnWith}>
            <View style={{left: -40}}>
              <SVG width="20" height="20">
                <Image href={images.fb} />
              </SVG>
            </View>
            <Text style={[styles.txtBtnWith]}>{I18n.t('sign_in_with_fb')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnWith}>
            <View style={{left: -50}}>
              <SVG width="20" height="20">
                <Image href={images.google} />
              </SVG>
            </View>
            <Text style={[styles.txtBtnWith]}>{I18n.t('sign_in_with_gg')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  box: {
    borderRadius: 10,
    backgroundColor: '#F8F6F6',
    //height: 500,
  },
  boxWelcome: {
    paddingTop: 15,
    flexDirection: 'row',
    alignContent: 'space-between',
    alignSelf: 'center',
    paddingBottom: 20,
  },
  boxtxt: {
    padding: 20,
  },
  btn: {
    ...Button.base,
    ...Button.btnBackground,
    marginLeft: Spacing.extra_mdeium,
    marginRight: Spacing.extra_mdeium,
    marginBottom: Spacing.extra_mdeium,
  },
  btnWith: {
    flexDirection: 'row',
    ...Button.base,
    borderColor: Color.border_btnWith,
    borderWidth: Spacing.hairline,
    marginTop: Spacing.extra_mdeium + 5,
  },
  txtBtn: {
    ...Button.text,
  },
  txtBtnWith: {
    ...Button.btnWith,
  },
});
