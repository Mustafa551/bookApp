import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {RatingInput} from 'react-native-stock-star-rating';

import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {Favouritebtn} from '../favouritebtn/Favouritebtn';

const Card = ({datas, ind, navi}) => {
  const {title, rating, price, imageLink, is_liked, reviews} = datas;
  const [favourite, setfavourite] = useState(is_liked);
  const [rating1, setRating] = useState(rating);

  return (
    <TouchableOpacity
      onPress={() => {
        navi.navigate('Bookdetail', {
          params: {
            data: datas,
          },
        });
      }}
      style={styles.cardview}
      key={ind}>
      <ImageBackground style={styles.cardimg} source={{uri: imageLink}}>
        <Favouritebtn
          press={() => setfavourite(!favourite)}
          favor={favourite}
        />
      </ImageBackground>
      <View style={{width: '90%'}}>
        <Text style={styles.title}>
          {title.length > 15 ? title.substring(0, 15) + '...' : title}
        </Text>
      </View>
      <View style={styles.ratingview}>
        <RatingInput
          rating={rating1}
          setRating={setRating}
          size={20}
          maxStars={5}
          bordered={false}
        />
        <Text style={styles.rate}>({reviews})</Text>
      </View>
      <Text style={styles.price}>${price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardimg: {
    width: responsiveScreenWidth(37.6),
    height: responsiveScreenHeight(27.3),
    marginTop: responsiveScreenHeight(3),
    marginRight: responsiveScreenWidth(14),
  },
  title: {
    color: 'black',
    fontWeight: '600',
    fontSize: responsiveScreenFontSize(1.9),
    marginTop: responsiveScreenHeight(0.5),
    width: '100%',
  },
  price: {
    fontSize: responsiveScreenFontSize(1.6),
    fontWeight: '500',
    color: 'black',
  },
  ratingview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rate: {
    fontSize: responsiveScreenFontSize(1.6),
    color: '#B2B2B2',
    fontWeight: '400',
    paddingLeft: 5,
  },
});

export {Card};
