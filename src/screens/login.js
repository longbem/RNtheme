import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import SVG, {Image, SvgUri, SvgXml} from 'react-native-svg';
import I18n from '../locales/i18n';
import {getLanguages} from 'react-native-i18n';
import Input from '../component/textInput';
import {Color, Spacing, Typography} from '../component/config';
import Button from '../component/buttons';
import IconFB from '../images/Icon_Facebook.svg';
import IconGG from '../images/icons8_Google_2.svg';

const Login = props => {
  const {navigate} = props.navigation;

  const [languages, setlanguages] = useState([]);

  useEffect(() => {
    getLanguages().then(languages => {
      console.log('TCL: Login -> languages', languages);
      setlanguages(languages);
    });
  }, []);

  _renderIconFB = () => {
    return <SvgXml width={20} height={20} xml={IconFB} />;
  };

  _renderIconGG = () => {
    return <SvgXml width={20} height={20} xml={IconGG} />;
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.background,
      }}>
      <View style={{}}>
        <View style={styles.box}>
          <View style={styles.boxWelcome}>
            <View style={{width: languages[0] === 'en' ? '80%' : '70%'}}>
              <Text
                style={{
                  fontSize: Typography.EXTRA_LARGE,
                  fontWeight: 'bold',
                }}>
                {I18n.t('greeting')},
              </Text>
              <Text
                style={{
                  fontSize: Typography.MEDIUM,
                  color: Color.text_heading1,
                }}>
                {I18n.t('sign_in_to_continue')}
              </Text>
            </View>
            <View style={{paddingTop: 20}}>
              <Button
                titleStyle={{color: Color.button}}
                type="clear"
                title={I18n.t('sign')}
                onPress={() => navigate('Sign')}
              />
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
          <View style={{paddingLeft: 20, paddingRight: 20, marginBottom: 20}}>
            <Button
              title={I18n.t('sign_in')}
              onPress={() => navigate('Explore')}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            padding: Spacing.extra_mdeium,
          }}>
          <Text style={{fontSize: Typography.LARGE}}>{I18n.t('or')}</Text>
        </View>

        <View style={{}}>
          <Button
            buttonStyle={{marginBottom: 20}}
            type="outline"
            title={I18n.t('sign_in_with_fb')}
            onPress={() => navigate('Explore')}
            renderIcon={_renderIconFB()}
          />
          <Button
            type={'outline'}
            title={I18n.t('sign_in_with_gg')}
            onPress={() => navigate('Explore')}
            renderIcon={_renderIconGG()}
            iconContainerStyle
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  box: {
    borderRadius: 10,
    backgroundColor: Color.white,
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

  txtBtn: {
    ...Button.text,
  },
  txtBtnWith: {
    ...Button.btnWith,
  },
});
