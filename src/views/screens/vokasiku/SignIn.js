import React from 'react';
import {Text, StyleSheet, View, Image,TextInput ,SafeAreaView} from 'react-native';
import {PrimaryButton, Google} from '../../components/Button';
import COLORS from '../../../const/colors';
import {NotifW} from '../../components/Notif';


const Login = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white, padding: 15}}>
      <NotifW/>
      <View style={style.Container}>
        <View style={style.content}>
        <View style={style.logo}>
          <Image
            style={{
              width: 300,
              height: 100,
              justifyContent: 'center',
            }}
            source={require('../../../assets/banner/vokasiku.jpg')}
          />
        </View>
          <View style={style.text}>
            <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'left'}}>
              Akses Masuk
            </Text>
            <Text
              style={{
                fontSize: 16,
                textAlign: 'left',
                color: COLORS.grey,
              }}>
              Hai, selamat datang
            </Text>
          </View>
          </View>

          <View style={style.formLogin}>
            <Text style={{fontSize: 18, textAlign: 'left', paddingBottom: 15}}>Nomor Telepon</Text>
            <View style={style.inputContainer}>
              <TextInput
                style={{paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey}}
                placeholder="contoh: 080009090989"
              />
            </View>
          </View>

          <View style={style.button}>
            <PrimaryButton
              onPress={() => navigation.navigate('Home')}
              title="Selanjutnya"
            />
            <View>
              <Text style={{fontSize: 18, textAlign: 'center',padding: 15}}>atau</Text>
            </View>
            <Google
              onPress={() => navigation.navigate('Home')}
              title="Lanjutkan dengan Google"
            />
          </View>
          </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column'
  },
  content: {
    flex: 2,
  },
  logo: {
    alignItems: 'center',
    paddingBottom: 15
  },
  formLogin: {
    flex: 1,
    paddingBottom: 15
  },
  button: {
    flex: 3,
  },
  textContainer: {
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  inputContainer: {
    height: 60,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: COLORS.white,
    shadowRadius: 5,
    elevation: 1,
    shadowColor: COLORS.grey,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Login;
