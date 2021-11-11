import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import COLORS from '../../const/colors';
import { MaterialIcons, Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const Test = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{width: 70}}>
      <View style={style.btnGoogle}>
      <MaterialCommunityIcons name="clipboard-text" size={24} color={COLORS.white} style={{}}/>
      <Text style={{...style.title, color: COLORS.dark, fontWeight: 'bold', fontSize: 12}}>{title}</Text>
      </View>
      <Text style={{marginTop: 5,fontWeight: 'bold', textAlign: 
    'center', }}>Test</Text>
    </TouchableOpacity>
  );
};

const Class = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{width: 70}}>
      <View style={style.btnGoogle}>
      <FontAwesome5 name="chalkboard-teacher" size={24} color={COLORS.white} style={{}}/>
      <Text style={{...style.title, color: COLORS.dark, fontWeight: 'bold', fontSize: 12}}>{title}</Text>
      </View>
      <Text style={{marginTop: 5,fontWeight: 'bold', textAlign: 
    'center', }}>Class</Text>
    </TouchableOpacity>
  );
};
const Webinar = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{width: 70}}>
      <View style={style.btnGoogle}>
      <MaterialIcons name="web" size={24} color={COLORS.white} style={{}}/>
      <Text style={{...style.title, color: COLORS.dark, fontWeight: 'bold', fontSize: 12}}>{title}</Text>
      </View>
      <Text style={{marginTop: 5,fontWeight: 'bold', textAlign: 
    'center', }}>Webinar</Text>
    </TouchableOpacity>
  );
};
const OnTheGo = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{width: 70}}>
      <View style={style.btnGoogle}>
      <MaterialCommunityIcons name="account-search" size={24} color={COLORS.white} style={{}}/>
      <Text style={{...style.title, color: COLORS.dark, fontWeight: 'bold', fontSize: 12}}>{title}</Text>
      </View>
      <Text style={{marginTop: 5,fontWeight: 'bold', textAlign: 
    'center', }}>On The Go</Text>
    </TouchableOpacity>
  );
};
const GoDream = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{width: 70}}>
      <View style={style.btnGoogle}>
      <FontAwesome5 name="money-check" size={24} color={COLORS.white} style={{}}/>
      <Text style={{...style.title, color: COLORS.dark, fontWeight: 'bold', fontSize: 12}}>{title}</Text>
      </View>
      <Text style={{marginTop: 5,fontWeight: 'bold', textAlign: 
    'center', }}>Go Dream</Text>
    </TouchableOpacity>
  );
};
const Opportunity = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{width: 70}}>
      <View style={style.btnGoogle}>
      <MaterialCommunityIcons name="text-box-search" size={24} color={COLORS.white} style={{}}/>
      <Text style={{...style.title, color: COLORS.dark, fontWeight: 'bold', fontSize: 12}}>{title}</Text>
      </View>
      <Text style={{marginTop: 5,fontWeight: 'bold', textAlign: 
    'center', }}>Opportunity</Text>
    </TouchableOpacity>
  );
};
const StudyClub = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{width: 70}}>
      <View style={style.btnGoogle}>
      <MaterialIcons name="people-alt" size={24} color={COLORS.white} style={{}}/>
      <Text style={{...style.title, color: COLORS.dark, fontWeight: 'bold', fontSize: 12}}>{title}</Text>
      </View>
      <Text style={{marginTop: 5,fontWeight: 'bold', textAlign: 
    'center', }}>Study Club</Text>
    </TouchableOpacity>
  );
};
const Recruit = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{width: 70}}>
      <View style={style.btnGoogle}>
      <MaterialIcons name="person-search" size={24} color={COLORS.white} style={{}}/>
      <Text style={{...style.title, color: COLORS.dark, fontWeight: 'bold', fontSize: 12}}>{title}</Text>
      </View>
      <Text style={{marginTop: 5,fontWeight: 'bold', textAlign: 
    'center', }}>Recruit</Text>
    </TouchableOpacity>
  );
};
const Blog = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{width: 70}}>
      <View style={style.btnGoogle}>
      <Ionicons name="md-document-text-sharp" size={24} color={COLORS.white} style={{}}/>
      <Text style={{...style.title, color: COLORS.dark, fontWeight: 'bold', fontSize: 12}}>{title}</Text>
      </View>
      <Text style={{marginTop: 5, fontWeight: 'bold', textAlign: 
    'center', }}>Blog
    </Text>
    </TouchableOpacity>
  );
};


const style = StyleSheet.create({
  title: {
    color: COLORS.white, 
    fontWeight: 'bold', 
    fontSize: 18

  },

  btnGoogle: {
    flexDirection: 'row',
    backgroundColor: COLORS.toska,
    height:70,
    width: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 5,
    elevation: 13,
    shadowColor: COLORS.grey,
  }
});

export {Test, Class, Webinar, OnTheGo, GoDream, Opportunity, StudyClub, Recruit, Blog};
