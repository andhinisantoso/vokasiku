import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import COLORS from '../../const/colors';
import { Ionicons } from '@expo/vector-icons';

const Search = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnSearch}>
      <Ionicons name="ios-search" size={20} color={COLORS.dark} style={{paddingRight: 15}}/>
      <Text style={{...style.title, color: COLORS.grey, fontSize: 16}}>{title}</Text>
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
btnSearch: {
  flexDirection: 'row',
  backgroundColor: COLORS.white,
  height: 60,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  shadowRadius: 5,
  elevation: 13,
  shadowColor: COLORS.grey,
}
});

export {Search};