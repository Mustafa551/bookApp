import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const Header = () => {
  return (
    <View style={styles.mainview}>
      <Text style={styles.name}>Hi Nick</Text>
      <Image
        style={styles.pic}
        source={require('../../assests/images/profile.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: responsiveScreenFontSize(2.1),
    fontWeight: '900',
    color: '#000000',
  },
  pic: {
    height: responsiveScreenHeight(6.25),
    width: responsiveScreenWidth(12.8),
  },
});

export {Header};
