import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import Fontisto from 'react-native-vector-icons/Fontisto';
const Btn = () => {
  return (
    <TouchableOpacity style={styles.btnn}>
      <Text style={styles.btntext}>View Details</Text>
      <Image
        source={require('../../assests/images/share.png')}
        style={{width: 20, height: 20, tintColor: 'white'}}
      />
    </TouchableOpacity>
  );
};

export {Btn};

const styles = StyleSheet.create({
  btnn: {
    width: '100%',
    height: responsiveScreenHeight(5.6),
    backgroundColor: '#004D6D',
    elevation: 3,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveScreenHeight(3),
    marginBottom: 10,
  },
  btntext: {
    fontSize: responsiveScreenFontSize(2),
    color: 'white',
    fontWeight: '600',
    paddingRight: 10,
  },
});
