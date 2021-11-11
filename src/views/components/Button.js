import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import COLORS from '../../const/colors';
import { Ionicons } from '@expo/vector-icons';

const PrimaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
      <Text style={{...style.title, color: COLORS.white, fontWeight: 'bold', fontSize: 16}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const Google = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnGoogle}>
      <Ionicons name="logo-google" size={20} color={COLORS.dark} style={{paddingRight: 15}}/>
      <Text style={{...style.title, color: COLORS.dark, fontWeight: 'bold', fontSize: 16}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const NextButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnNext}>
        <Ionicons name="chevron-forward-sharp" size={20} color={COLORS.white} />
      </View>
    </TouchableOpacity>
  );
};
const BackButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnBack}>
        <Ionicons name="chevron-back" size={20} color={COLORS.white} />
      </View>
    </TouchableOpacity>
  );
};
const BackButtonUp = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnUp}>
        <Ionicons name="chevron-back" size={20} color={COLORS.dark} />
      </View>
    </TouchableOpacity>
  );
};
const Notif = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnUp}>
        <Ionicons name="md-notifications-sharp" size={20} color={COLORS.toska} />
      </View>
    </TouchableOpacity>
  );
};
const Search = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnUp}>
        <Ionicons name="md-search-sharp" size={20} color={COLORS.grey} />
      </View>
    </TouchableOpacity>
  );
};
const PrimaryButtonBoxSml = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainerBoxSml}>
      <Text style={{...style.title, color: COLORS.white, fontWeight: 'bold', fontSize: 12}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const SecondaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainerS}>
        <Text style={{...style.title, color: COLORS.primary, fontWeight: 'bold', fontSize: 18}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const SecondaryButtonBox = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainerSBox}>
        <Text style={{...style.title, color: COLORS.primary, fontWeight: 'bold', fontSize: 12}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const SecondaryButtonBoxSml = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainerSBoxSml}>
        <Text style={{...style.title, color: COLORS.primary, fontWeight: 'bold', fontSize: 12}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const GreyButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainerG}>
        <Text style={{...style.title, color: COLORS.primary, fontWeight: 'bold', fontSize: 18}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};



const style = StyleSheet.create({
  title: {
    color: COLORS.white, 
    fontWeight: 'bold', 
    fontSize: 18

  },
  btnContainer: {
    
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnGoogle: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    height: 60,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 5,
    elevation: 13,
    shadowColor: COLORS.grey,
  },
  btnNext: {
    
    backgroundColor: COLORS.primary,
    height: 60,
    width: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBack: {
    
    backgroundColor: COLORS.grey,
    height: 60,
    width: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',

  },
  btnUp: {
    
    backgroundColor: COLORS.white,
    height: 60,
    width: 40,
    justifyContent: 'center',
    borderRadius: 10
  },
  btnContainerBoxSml: {
    
    backgroundColor: COLORS.primary,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 240,

  },
  btnContainerS: {
    backgroundColor: COLORS.secondary,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainerSBox: {
    backgroundColor: COLORS.secondary,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width:230,
  },
  btnContainerSBoxSml: {
    backgroundColor: COLORS.secondary,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width:139,
  },
  btnContainerG: {
    backgroundColor: COLORS.white,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {Search, Notif, BackButton, BackButtonUp, NextButton, PrimaryButton, SecondaryButton, GreyButton, Google, SecondaryButtonBox, PrimaryButtonBoxSml, SecondaryButtonBoxSml};
