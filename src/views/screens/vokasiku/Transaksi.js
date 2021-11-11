import React from 'react';
import {Text, StyleSheet, View, Image,TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Notif, Search} from '../../components/Button';
import COLORS from '../../../const/colors';
import { ScrollView } from 'react-native-gesture-handler';
import {NotifW} from '../../components/Notif';
import {Test, Class, Webinar, OnTheGo, GoDream, Opportunity, StudyClub, Recruit, Blog} from '../../components/Menu';
import { MaterialIcons, MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';

const Transaksi = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: COLORS.white, paddingBottom: 15, paddingRight: 15, paddingLeft: 15}}>
      <NotifW/>
      <View style={style.Container}>
        <View style={style.content}>
          <View style={style.inputContainer}>
            <TextInput
              style={{paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey}}
              placeholder="Cari transaksi"
            />
            <Search/>
          </View>
        </View>

      <View style={{flexDirection: 'column'}}>        
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
      <View style={style.kolom}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>UI/UX Toolkit</Text>
      <View style={style.card}>
        <View style={style.textDesc}>
          <Text style={{color: COLORS.grey}}>Tanggal pemesanan</Text>
          <Text style={{color: COLORS.grey}}>Total Pemesanan</Text>
          <Text style={{color: COLORS.grey}}>Status Pembayaran</Text>
        </View>
        <View style={style.textData}>
          <Text style={{color: COLORS.grey}}>: 12 April 2021</Text>
          <Text style={{color: COLORS.grey}}>: Rp 500.000</Text>
          <Text style={{color: COLORS.grey}}>: Sukses</Text>
        </View>
        <View>
          <View style={{alignItems: 'center'}}>
            <View style={style.actionBtn}>
                <MaterialIcons name="arrow-forward-ios" color={COLORS.grey} size={28} />
            </View>
          </View>
        </View>
        </View>
      </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
      <View style={style.kolom}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>UI/UX Toolkit</Text>
      <View style={style.card}>
        <View style={style.textDesc}>
          <Text style={{color: COLORS.grey}}>Tanggal pemesanan</Text>
          <Text style={{color: COLORS.grey}}>Total Pemesanan</Text>
          <Text style={{color: COLORS.grey}}>Status Pembayaran</Text>
        </View>
        <View style={style.textData}>
          <Text style={{color: COLORS.grey}}>: 12 April 2021</Text>
          <Text style={{color: COLORS.grey}}>: Rp 500.000</Text>
          <Text style={{color: COLORS.grey}}>: Sukses</Text>
        </View>
        <View>
          <View style={{alignItems: 'center'}}>
            <View style={style.actionBtn}>
                <MaterialIcons name="arrow-forward-ios" color={COLORS.grey} size={28} />
            </View>
          </View>
        </View>
        </View>
      </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
      <View style={style.kolom}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>UI/UX Toolkit</Text>
      <View style={style.card}>
        <View style={style.textDesc}>
          <Text style={{color: COLORS.grey}}>Tanggal pemesanan</Text>
          <Text style={{color: COLORS.grey}}>Total Pemesanan</Text>
          <Text style={{color: COLORS.grey}}>Status Pembayaran</Text>
        </View>
        <View style={style.textData}>
          <Text style={{color: COLORS.grey}}>: 12 April 2021</Text>
          <Text style={{color: COLORS.grey}}>: Rp 500.000</Text>
          <Text style={{color: COLORS.grey}}>: Sukses</Text>
        </View>
        <View>
          <View style={{alignItems: 'center'}}>
            <View style={style.actionBtn}>
                <MaterialIcons name="arrow-forward-ios" color={COLORS.grey} size={28} />
            </View>
          </View>
        </View>
        </View>
      </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
      <View style={style.kolom}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>UI/UX Toolkit</Text>
      <View style={style.card}>
        <View style={style.textDesc}>
          <Text style={{color: COLORS.grey}}>Tanggal pemesanan</Text>
          <Text style={{color: COLORS.grey}}>Total Pemesanan</Text>
          <Text style={{color: COLORS.grey}}>Status Pembayaran</Text>
        </View>
        <View style={style.textData}>
          <Text style={{color: COLORS.grey}}>: 12 April 2021</Text>
          <Text style={{color: COLORS.grey}}>: Rp 500.000</Text>
          <Text style={{color: COLORS.grey}}>: Sukses</Text>
        </View>
        <View>
          <View style={{alignItems: 'center'}}>
            <View style={style.actionBtn}>
                <MaterialIcons name="arrow-forward-ios" color={COLORS.grey} size={28} />
            </View>
          </View>
        </View>
        </View>
      </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
      <View style={style.kolom}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>UI/UX Toolkit</Text>
      <View style={style.card}>
        <View style={style.textDesc}>
          <Text style={{color: COLORS.grey}}>Tanggal pemesanan</Text>
          <Text style={{color: COLORS.grey}}>Total Pemesanan</Text>
          <Text style={{color: COLORS.grey}}>Status Pembayaran</Text>
        </View>
        <View style={style.textData}>
          <Text style={{color: COLORS.grey}}>: 12 April 2021</Text>
          <Text style={{color: COLORS.grey}}>: Rp 500.000</Text>
          <Text style={{color: COLORS.grey}}>: Sukses</Text>
        </View>
        <View>
          <View style={{alignItems: 'center'}}>
            <View style={style.actionBtn}>
                <MaterialIcons name="arrow-forward-ios" color={COLORS.grey} size={28} />
            </View>
          </View>
        </View>
        </View>
      </View>
      </TouchableHighlight>
        </View>
              
      <View style={style.navigatorContainer}>
      <TouchableOpacity activeOpacity={0.5} style={style.icon}>
          <View style={{alignItems:'center'}}>
            <MaterialIcons name="home" size={28} color={COLORS.light}/>
            <Text style={{fontSize: 12,fontWeight: 'bold', color: COLORS.light, textAlign: 'center'}}>Beranda</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={style.icon}>
          <View style={{alignItems:'center'}}>
            <Entypo name="text-document" size={28} color={COLORS.toska}/>
            <Text style={{fontSize: 12, color: COLORS.toska, textAlign: 'center'}}>Transaksi</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={style.icon}>
          <View style={{alignItems:'center'}}>
          <Ionicons name="book-outline" size={28} color={COLORS.light}/>
            <Text style={{fontSize: 12, color: COLORS.light, textAlign: 'center'}}>Belajar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={style.icon}>
          <View style={{alignItems:'center'}}>
          <MaterialCommunityIcons name="certificate-outline" size={28} color={COLORS.light}/>
            <Text style={{fontSize: 12, color: COLORS.light, textAlign: 'center'}}>Sertifikat</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={style.icon}>
          <View style={{alignItems:'center'}}>
            <Ionicons name="md-person-outline" size={28} color={COLORS.light}/>
            <Text style={{fontSize: 12, color: COLORS.light, textAlign: 'center'}}>Profil</Text>
          </View>
        </TouchableOpacity>
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
    flexDirection: 'column'
  },
  content: {
    flex: 2,
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
  kolom: {
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
  navigatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    color: COLORS.white,
    shadowRadius: 1,
    marginBottom: -20,
    marginLeft: -15,
    marginRight: -15,
  },
  icon: {
    flexDirection: 'column',
  }
});

export default Transaksi;
