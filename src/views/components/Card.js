import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableHighlight
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../../const/colors';


const Card = ({}) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
        <View style={style.card}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../assets/banner/sc.jpg')} style={{height: 120, width: 120}} />
          </View>
          <View style={{marginHorizontal: 10, marginTop: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Royal Canin</Text>
            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>Persian 1 kg </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Rp 200.000
            </Text>
            <View style={style.addToCartBtn}>
              <MaterialIcons name="add" size={20} color={COLORS.white} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

const style = StyleSheet.create ({
    card: {
        height: 220,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 10,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: COLORS.white,
        shadowRadius: 5,
        shadowColor: COLORS.grey
      },
      addToCartBtn: {
        height: 30,
        width: 30,
        borderRadius: 20,
        marginTop: -5,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export {Card};