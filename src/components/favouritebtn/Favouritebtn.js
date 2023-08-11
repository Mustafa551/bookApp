import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
const Favouritebtn = ({favor, press}) => {
  return (
    <TouchableOpacity onPress={press} style={styles.border}>
      {favor ? (
        <Image source={require('../../assests/images/fill.png')} />
      ) : (
        <Image source={require('../../assests/images/unfill.png')} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  border: {
    height: responsiveScreenHeight(3.1),
    width: responsiveScreenWidth(6.4),
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

export {Favouritebtn};
