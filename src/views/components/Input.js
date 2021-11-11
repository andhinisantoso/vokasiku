import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import COLORS from '../../const/colors';

const InputContainer = ({title, onPress = () => {}}) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={style.inputContainer}>
            <TextInput
                style={{paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey}}
                placeholder="Email / Telephone"
              />
        </View>
      </TouchableOpacity>
    );
  };

const style = StyleSheet.create({
    title: {
      color: COLORS.grey, 
      fontSize: 16,
      alignItems: 'left',
    },
    inputContainer: {
        height: 60,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: COLORS.white,
        shadowRadius: 10,
        elevation: 13,
        shadowColor: COLORS.grey,
        justifyContent: 'center',
    }
});

export {InputContainer};