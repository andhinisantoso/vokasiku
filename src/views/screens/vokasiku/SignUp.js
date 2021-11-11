import React from 'react';
import {Text, StyleSheet, View, Image,TextInput ,ScrollView} from 'react-native';
import {PrimaryButton} from '../../components/Button';
import COLORS from '../../../const/colors';
import {NotifW} from '../../components/Notif';


const SignUp = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: COLORS.white, padding: 15}}>
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
            <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>
              Daftar Akun
            </Text>
          </View>
          </View>

          <View style={style.formLogin}>
            <Text style={{fontSize: 18, textAlign: 'left', paddingBottom: 15}}>Nama Asli</Text>
            <View style={style.inputContainer}>
              <TextInput
                style={{paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey}}
                placeholder="contoh: Anindia Suci"
              />
            </View>
            <Text style={{fontSize: 18, textAlign: 'left', paddingBottom: 15}}>Email</Text>
            <View style={style.inputContainer}>
              <TextInput
                style={{paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey}}
                placeholder="contoh: example@email.com"
                
              />
            </View>
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
              title="Daftar"
            />
          </View>
          </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flex: 3,
    alignItems: 'center',
    marginBottom: 35,
  },
  formLogin: {
    flex: 5,
    paddingBottom: 15
  },
  button: {
    flex: 1,
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

export default SignUp;
