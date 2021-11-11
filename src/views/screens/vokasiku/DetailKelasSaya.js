import React from 'react';
import {Text, StyleSheet, View, Image,TouchableHighlight} from 'react-native';
import {PrimaryButton, BackButtonUp} from '../../components/Button';
import COLORS from '../../../const/colors';
import { ScrollView } from 'react-native-gesture-handler';
import {NotifW} from '../../components/Notif';
import {MaterialCommunityIcons, Ionicons, Octicons} from '@expo/vector-icons';


const DetailKelasSaya = ({navigation}) => {

  return (
    <ScrollView style={{flex: 1, backgroundColor: COLORS.white, paddingBottom: 15, paddingRight: 15, paddingLeft: 15}}>
      <NotifW/>
      <View style={style.header}>
        <BackButtonUp
          onPress={() => navigation.navigate('Home')}
        />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: COLORS.dark}}>UI / UX Toolkit</Text>
        </View>
      </View>

      <View style={style.Container}>
        <View style={style.content}>
          <View style={style.banner}>
            <Image
              style={{
                height: 200,
                justifyContent: 'center',
              }}
              source={require('../../../assets/banner/TIU.jpg')}
            />
          </View>

          <View style={{marginVertical: 5, borderBottomWidth: 1, borderColor: COLORS.grey, height: 30}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Pembelajaran</Text>
          </View>
          <View style={{marginVertical: 5, borderWidth: 1, borderColor: COLORS.dark, height: 40, justifyContent: 'center', borderRadius: 10}}>
            <Text style={{marginLeft: 10, fontSize: 16}}>1. Introduction</Text>
          </View>
          <TouchableHighlight
            underlayColor={COLORS.white}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('DetailsScreen')}
          >
            <View style={{marginVertical: 5, borderBottomWidth: 1, borderColor: COLORS.dark, height: 40, justifyContent: 'center'}}>
              <View style={{flexDirection: 'row'}}>
              <View style={{width: 10}}></View>
              <Ionicons name="ios-play-circle-outline" size="20" color="COLORS.dark"/>
              <Text style={{marginLeft: 10, fontSize: 16}}>Start the program</Text>
            </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={COLORS.white}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('DetailsScreen')}
          >
            <View style={{marginVertical: 5, borderBottomWidth: 1, borderColor: COLORS.dark, height: 40, justifyContent: 'center'}}>
              <View style={{flexDirection: 'row'}}>
              <View style={{width: 10}}></View>
              <Octicons name="note" size="20" color="COLORS.dark"/>
              <Text style={{marginLeft: 10, fontSize: 16}}>Start the program</Text>
            </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={COLORS.white}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('DetailsScreen')}
          >
            <View style={{marginVertical: 5, borderBottomWidth: 1, borderColor: COLORS.dark, height: 40, justifyContent: 'center'}}>
              <View style={{flexDirection: 'row'}}>
              <View style={{width: 10}}></View>
              <MaterialCommunityIcons name="clipboard-outline" size="20" color="COLORS.dark"/>
              <Text style={{marginLeft: 10, fontSize: 16}}>Start the program</Text>
            </View>
            </View>
          </TouchableHighlight>
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

title: {
  color: COLORS.white, 
  fontWeight: 'bold', 
  fontSize: 18

},

});

export default DetailKelasSaya;
