import React from 'react';
import {Text, StyleSheet, View, Image,TouchableHighlight} from 'react-native';
import {PrimaryButton, BackButtonUp} from '../../components/Button';
import COLORS from '../../../const/colors';
import { ScrollView } from 'react-native-gesture-handler';
import {NotifW} from '../../components/Notif';
import {MaterialIcons} from '@expo/vector-icons';


const DetailTransaksi = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: COLORS.white, paddingBottom: 15, paddingRight: 15, paddingLeft: 15}}>
      <NotifW/>
      <View style={style.header}>
        <BackButtonUp
          onPress={() => navigation.navigate('Home')}
        />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: COLORS.dark}}>Detail Transaksi</Text>
        </View>
      </View>

      <View style={style.Container}>
      <View style={style.content}>
     
      <View style={{flexDirection: 'column'}}>        
      <View style={style.kolom}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Data Pembeli</Text>
      <View style={style.card}>
        <View style={style.textDesc}>
          <Text style={{color: COLORS.dark}}>Nama</Text>
          <Text style={{color: COLORS.dark}}>Email</Text>
        </View>
        <View style={style.textData}>
          <Text style={{color: COLORS.dark}}>: 12 April 2021</Text>
          <Text style={{color: COLORS.dark}}>: Rp 500.000</Text>
          </View>
        </View>
      </View>
      <View style={style.kolom2}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Jenis Pembelian</Text>
      <View style={style.card2}>
      <Image source={require('../../../assets/banner/sc.jpg')} style={{height: 50, width: 100}} />
        <View style={{marginLeft: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>UI/UX Toolkit</Text>
          <Text style={{color: COLORS.dark}}>Class</Text>
          <Text style={{color: COLORS.dark}}>Rp 500.000</Text>
          </View>
        </View>
      </View>
      <View style={style.kolom3}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>Ringkasan</Text>
      <View style={style.card3}>
        <View style={style.textDesc}>
          <Text style={{color: COLORS.dark}}>Total</Text>
          <Text style={{color: COLORS.dark}}>Diskon</Text>
          <Text style={{color: COLORS.dark, fontWeight: 'bold'}}>TOTAL PEMBAYARAN</Text>
        </View>
        <View style={style.textData}>
          <Text style={{color: COLORS.dark}}>: Rp 500.000</Text>
          <Text style={{color: COLORS.dark}}>: Rp 0</Text>
          <Text style={{color: COLORS.dark, fontWeight: 'bold'}}>: Rp 500.000</Text>
          </View>
        </View>
      </View>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Status Pembayaran: Sukses</Text>
      </View>
      </View>

          <View style={style.button}>
            <PrimaryButton
              onPress={() => navigation.navigate('Home')}
              title="Kunjungi Kelas"
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  content: {
    flex: 5,
  },
  button: {
    flex: 1,
    marginTop: 220
  },
kolom: {
  height: 80,
  alignItems: 'left',
  backgroundColor: COLORS.white,
  borderBottomWidth: 1,
  borderBottomColor: COLORS.grey,
  marginVertical: 10
},
kolom2: {
  height: 100,
  alignItems: 'left',
  backgroundColor: COLORS.white,
  borderBottomWidth: 1,
  borderBottomColor: COLORS.grey,
  marginVertical: 10
},
kolom3: {
  height: 100,
  alignItems: 'left',
  backgroundColor: COLORS.white,
  borderBottomWidth: 1,
  borderBottomColor: COLORS.grey,
  marginVertical: 10
},
card:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginVertical: 5,
},
card2:{
  flexDirection: 'row',
  marginVertical: 5,
  alignItems: 'left',
},
card3:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginVertical: 5,
},
});

export default DetailTransaksi;
