import React from 'react';
import {Text, StyleSheet, View, Image,TextInput} from 'react-native';
import {PrimaryButton, BackButtonUp} from '../../components/Button';
import COLORS from '../../../const/colors';
import { ScrollView } from 'react-native-gesture-handler';
import {NotifW} from '../../components/Notif';


const OTP = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: COLORS.white, paddingBottom: 15, paddingRight: 15, paddingLeft: 15}}>
      <NotifW/>
      <View style={style.header}>
        <BackButtonUp
          onPress={() => navigation.navigate('Home')}
        />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: COLORS.dark}}>OTP</Text>
        </View>
      </View>
      <View style={style.Container}>
        <View style={style.content}>
        <View style={style.logo}>
          <Image
            style={{
              width: 200,
              height: 200,
              justifyContent: 'center',
            }}
            source={require('../../../assets/icon/study.png')}
          />
        </View>
          <View style={style.text}>
            <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>
              Verifikasi Kode
            </Text>
            <Text
              style={{
                fontSize: 16,
                textAlign: 'center',
                color: COLORS.grey,
              }}>
              Kami telah mengirimkan kode verivikasi ke nomor telepon Anda
            </Text>
          </View>
          </View>

          <View style={style.formLogin}>
            <Text style={{fontSize: 20, paddingBottom: 35, textAlign: 'center', fontWeight: 'bold'}}>080888887000</Text>
            <View style={style.inputContainer}>
              <TextInput
                type
                style={{paddingLeft: 10, flex: 2, fontSize: 18, color: COLORS.grey}}
                placeholder="******"
                secureTextEntry={true} 
              />
            </View>
          </View>

          <View style={style.button}>
            <PrimaryButton
              onPress={() => navigation.navigate('Home')}
              title="Verifikasi"
            />
          </View>
          </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row'
  },
  Container: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  content: {
    flex: 10,
  },
  logo: {
    flex: 4,
    
    alignItems: 'center',
  },
  text: {
    flex: 2,
  },
  formLogin: {
    flex: 1,
    paddingBottom: 40,
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

export default OTP;
