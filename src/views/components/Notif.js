import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import COLORS from '../../const/colors';

const Notif = () => {
  return (
    <View style={{
      height: 30,
      backgroundColor: COLORS.dasar
    }}>
    </View>
  )
}

const NotifW = () => {
  return (
    <View style={{
      height: 30,
      backgroundColor: COLORS.white
    }}>
    </View>
  )
}

export {Notif, NotifW};
