import React from 'react';
import {Text, StyleSheet, View, Image,TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Notif, Search} from '../../components/Button';
import COLORS from '../../../const/colors';
import { ScrollView } from 'react-native-gesture-handler';
import {NotifW} from '../../components/Notif';
import {Test, Class, Webinar, OnTheGo, GoDream, Opportunity, StudyClub, Recruit, Blog} from '../../components/Menu';
import { MaterialIcons, MaterialCommunityIcons, Entypo, Ionicons } from '@expo/vector-icons';
import Jenis from '../../../const/categoriesJenis';
import {PrimaryButtonBoxSml} from '../../components/Button';

const Sertifikat = ({navigation}) => {

  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}>
        {Jenis.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{width: 150, marginRight: 10, borderRadius: 5, flexDirection: 'row', height: 50,
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.primary
                    : COLORS.light,
                ...style.categoryBtn,
              }}>
              <View style={{justifyContent: 'center'}}>
                <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  textAlign: 'center',
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.grey,
                }}>
                {category.name}
              </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: COLORS.white, paddingBottom: 15, paddingRight: 15, paddingLeft: 15}}>
      <NotifW/>
      <View style={style.Container}>
        <View style={style.content}>
          <View style={style.inputContainer}>
            <TextInput
              style={{paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey}}
              placeholder="Cari sertifikat"
            />
            <Search/>
          </View>
          <View>
            <ListCategories/>
          </View>
        </View>

      <View style={{flexDirection: 'column'}}>        
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
      <View style={style.kolom}>
        <Image source={require('../../../assets/banner/sc.jpg')} style={{height: 100, width: 100}} />
      <View style={{marginLeft: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>UI/UX Toolkit</Text>
          <Text style={{color: COLORS.dark}}>Tanggal selesai: 17 Agustus 2021</Text>
      <View style={{}}>
        <PrimaryButtonBoxSml
              onPress={() => navigation.navigate('Home')}
              title="Download"
            />
      </View>
      </View>
      </View>
      </TouchableHighlight>
        </View>
      <View style={{flexDirection: 'column'}}>        
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
      <View style={style.kolom}>
        <Image source={require('../../../assets/banner/sc.jpg')} style={{height: 100, width: 100}} />
      <View style={{marginLeft: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>UI/UX Toolkit</Text>
          <Text style={{color: COLORS.dark}}>Tanggal selesai: 17 Agustus 2021</Text>
      <View style={{}}>
        <PrimaryButtonBoxSml
              onPress={() => navigation.navigate('Home')}
              title="Download"
            />
      </View>
      </View>
      </View>
      </TouchableHighlight>
        </View>
      <View style={{flexDirection: 'column'}}>        
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
      <View style={style.kolom}>
        <Image source={require('../../../assets/banner/sc.jpg')} style={{height: 100, width: 100}} />
      <View style={{marginLeft: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>UI/UX Toolkit</Text>
          <Text style={{color: COLORS.dark}}>Tanggal selesai: 17 Agustus 2021</Text>
      <View style={{}}>
        <PrimaryButtonBoxSml
              onPress={() => navigation.navigate('Home')}
              title="Download"
            />
      </View>
      </View>
      </View>
      </TouchableHighlight>
        </View>
      <View style={{flexDirection: 'column'}}>        
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
      <View style={style.kolom}>
        <Image source={require('../../../assets/banner/sc.jpg')} style={{height: 100, width: 100}} />
      <View style={{marginLeft: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>UI/UX Toolkit</Text>
          <Text style={{color: COLORS.dark}}>Tanggal selesai: 17 Agustus 2021</Text>
      <View style={{}}>
        <PrimaryButtonBoxSml
              onPress={() => navigation.navigate('Home')}
              title="Download"
            />
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
          <MaterialCommunityIcons name="certificate-outline" size={28} color={COLORS.toska}/>
            <Text style={{fontSize: 12, color: COLORS.toska, textAlign: 'center'}}>Sertifikat</Text>
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
    marginVertical: 10,
    borderRadius: 5,
    elevation: 13,
    backgroundColor: COLORS.white,
    shadowRadius: 5,
    shadowColor: COLORS.grey,
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center'
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
  },
  categoriesListContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    marginRight: 20,
  },
  categoryBtn: {
    height: 45,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
    width: 60
  },
  categoryBtnImgCon: {
    height: 40,
    width: 40,
    marginLeft: 5,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Sertifikat;
