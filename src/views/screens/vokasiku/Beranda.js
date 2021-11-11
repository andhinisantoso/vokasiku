import React from 'react';
import {Text, StyleSheet, View, Image,TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Notif, Search} from '../../components/Button';
import COLORS from '../../../const/colors';
import { ScrollView } from 'react-native-gesture-handler';
import {NotifW} from '../../components/Notif';
import {Test, Class, Webinar, OnTheGo, GoDream, Opportunity, StudyClub, Recruit, Blog} from '../../components/Menu';
import { MaterialIcons, MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';

const Beranda = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: COLORS.white, paddingBottom: 15, paddingRight: 15, paddingLeft: 15}}>
      <NotifW/>
      
      <View style={style.Container}>
        <View style={style.header}>
          <View style={style.logo}>
            <Image
              style={{
                width: 120,
                height: 40,
                justifyContent: 'center',
              }}
              source={require('../../../assets/banner/vokasiku.jpg')}
            />
          </View>
          <Notif
            onPress={() => navigation.navigate('Home')}
          />
        </View>

        <View style={style.content}>
          <View style={style.inputContainer}>
            <TextInput
              style={{paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey}}
              placeholder="Mau belajar apa hari ini?"
            />
            <Search/>
          </View>
        </View>

        <View style={style.banner}>
          <Image
            style={{
              height: 200,
              justifyContent: 'center',
              borderRadius: 10,
            }}
            source={require('../../../assets/banner/TIU.jpg')}
          />
        </View>

        <View style={style.menu}>
          <View style={style.bar}>
            <Test/>
            <Class/>
            <Webinar/>
          </View>
          <View style={style.bar}>
            <GoDream/>
            <OnTheGo/>
            <Opportunity/>
          </View>
          <View style={style.bar}>
            <StudyClub/>
            <Recruit/>
            <Blog/>
          </View>
        </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
        <Text style={{fontWeight: 'bold', fontSize:'24', color: COLORS.dark}}>Bundle</Text>
        <Text style={{fontWeight: 'bold', fontSize:'24', color: COLORS.primary}}>Lihat Semua</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}>
        <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
      <View style={style.card}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../../assets/banner/sc.jpg')} style={{height: 120, width: 345}} />
          </View>
          <View style={{marginHorizontal: 10, marginTop: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Persiapan Karir</Text>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons name="check-box-multiple-outline" size={20} color={COLORS.dark} />
              <Text style={{fontSize: 14, color: COLORS.dark, marginTop: 2}}>  3 Class </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.yellow}}>
              Rp 200.000
            </Text>
          </View>
        </View>
      </TouchableHighlight>
        <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
      <View style={style.card}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../../assets/banner/sc.jpg')} style={{height: 120, width: 345}} />
          </View>
          <View style={{marginHorizontal: 10, marginTop: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Persiapan Karir</Text>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons name="check-box-multiple-outline" size={20} color={COLORS.dark} />
              <Text style={{fontSize: 14, color: COLORS.dark, marginTop: 2}}>  3 Class </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.yellow}}>
              Rp 200.000
            </Text>
          </View>
        </View>
      </TouchableHighlight>
        <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
      <View style={style.card}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../../assets/banner/sc.jpg')} style={{height: 120, width: 345}} />
          </View>
          <View style={{marginHorizontal: 10, marginTop: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Persiapan Karir</Text>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons name="check-box-multiple-outline" size={20} color={COLORS.dark} />
              <Text style={{fontSize: 14, color: COLORS.dark, marginTop: 2}}>  3 Class </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.yellow}}>
              Rp 200.000
            </Text>
          </View>
        </View>
      </TouchableHighlight>
        <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
      <View style={style.card}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../../assets/banner/sc.jpg')} style={{height: 120, width: 345}} />
          </View>
          <View style={{marginHorizontal: 10, marginTop: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Persiapan Karir</Text>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons name="check-box-multiple-outline" size={20} color={COLORS.dark} />
              <Text style={{fontSize: 14, color: COLORS.dark, marginTop: 2}}>  3 Class </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.yellow}}>
              Rp 500.000
            </Text>
          </View>
        </View>
      </TouchableHighlight>
      </ScrollView>
      
      <View style={style.navigatorContainer}>
        <TouchableOpacity activeOpacity={0.5} style={style.icon}>
          <View style={{alignItems:'center'}}>
            <MaterialIcons name="home" size={28} color={COLORS.toska}/>
            <Text style={{fontSize: 12,fontWeight: 'bold', color: COLORS.toska, textAlign: 'center'}}>Beranda</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={style.icon}>
          <View style={{alignItems:'center'}}>
            <Entypo name="text-document" size={28} color={COLORS.light}/>
            <Text style={{fontSize: 12, color: COLORS.light, textAlign: 'center'}}>Transaksi</Text>
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
  banner: {
    paddingBottom: 5,
  },
  logo: {
    flex: 2,
    alignItems: 'center',
  },
  text: {
    flex: 1,
  },
  menu: {
    flex: 3,
    flexDirection: 'column',
  },
  bar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
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
  card: {
    height: 230,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
    shadowRadius: 5,
    shadowColor: COLORS.grey
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

export default Beranda;
