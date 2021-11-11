import React from 'react';
import {Text, StyleSheet, View, Image, SafeAreaView} from 'react-native';
import {BackButton, NextButton} from '../../components/Button';
import COLORS from '../../../const/colors';
import {Notif} from '../../components/Notif';


const OnBoardScreen1 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <Notif/>
      <View style={style.textContainer}>
        <View style={style.logo}>
          <Image
            style={{
              width: 300,
              height: 300,
            }}
            source={require('../../../assets/icon/study.png')}
          />
        </View>
        <View style={style.content}>
          <View style={style.text}>
            <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'left'}}>
              Selamat Datang di Vokasiku
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: 'left',
                color: COLORS.dark,
              }}>
              Kursus Online untuk menciptakan talent Global
            </Text>
          </View>
          <View style={style.button}>
            <View style= {{flex: 3}}></View>
            <NextButton
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: COLORS.dasar,
    padding:15
  },
  logo: {
    flex: 3,
    justifyContent: 'center',
    padding: 15,
  },
  content: {
    flex: 2,
  },
  text: {
    flex: 2,
    paddingVertical: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default OnBoardScreen1;
