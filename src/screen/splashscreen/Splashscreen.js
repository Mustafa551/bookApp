import {View, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const Splashscreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={styles.img}
        source={require('../../assests/images/launch_screen.png')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  img: {
    width: responsiveScreenWidth(40),
    height: responsiveScreenHeight(30),
  },
});
export default Splashscreen;
