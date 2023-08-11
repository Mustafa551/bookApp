import React, {useState} from 'react';
import {RatingInput} from 'react-native-stock-star-rating';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {Btn} from '../../components';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const Bookdetail = ({navigation, route}) => {
  const [rating1, setRating] = useState(rating);
  const {
    imageLink,
    title,
    price,
    rating,
    reviews,
    author,
    country,
    pages,
    language,
    year,
  } = route.params.params.data;
  return (
    <ScrollView>
      <View style={{flex: 1, alignSelf: 'center', width: '90%'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{marginTop: responsiveScreenHeight(2.5)}}>
          <Image
            source={require('../../assests/images/back.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
        <View style={styles.imgview}>
          <Image
            resizeMode="stretch"
            source={{uri: imageLink}}
            style={styles.image}
          />

          <View style={styles.options}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.headin}>Rating</Text>
              <RatingInput
                rating={rating1}
                setRating={setRating}
                size={18}
                maxStars={5}
                bordered={false}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.headin}>Reviews</Text>

              <Text style={styles.rr}>({reviews})</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.headin}>Price</Text>

              <Text style={styles.rr}>${price}</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.heading}>{title}</Text>
          <View style={styles.details}>
            <Text style={styles.titl}>author:</Text>
            <Text style={styles.names}>{author}</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.titl}>Country:</Text>
            <Text style={styles.names}>{country}</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.titl}>Language:</Text>
            <Text style={styles.names}>{language}</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.titl}>Year:</Text>
            <Text style={styles.names}>{year}</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.titl}>Pages:</Text>
            <Text style={styles.names}>{pages}</Text>
          </View>

          <Btn />
        </View>
      </View>
    </ScrollView>
  );
};

export default Bookdetail;

const styles = StyleSheet.create({
  imgview: {
    width: '100%',
    height: responsiveScreenHeight(62.2),
    borderRadius: 18,
    borderWidth: 2,
    marginTop: responsiveScreenHeight(2),
    alignItems: 'center',
  },
  image: {
    height: responsiveScreenHeight(49.2),
    width: '90%',
    borderRadius: 15,
    marginTop: responsiveScreenHeight(2),
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: responsiveScreenHeight(1),
  },
  headin: {
    fontSize: responsiveScreenFontSize(2),
    fontWeight: '600',
    color: 'black',
  },
  rr: {
    fontSize: responsiveScreenFontSize(1.6),
    color: '#B2B2B2',
    fontWeight: '400',
  },
  option2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    fontSize: responsiveScreenFontSize(2.8),
    fontWeight: '600',
    color: 'black',
    marginTop: responsiveScreenHeight(1),
    marginBottom: responsiveScreenHeight(3),
  },
  details: {
    flexDirection: 'row',
    marginBottom: responsiveScreenHeight(0.2),
  },
  titl: {
    fontSize: responsiveScreenFontSize(2),
    fontWeight: '500',
    color: 'black',
  },
  names: {
    fontSize: responsiveScreenFontSize(2),
    fontWeight: '300',
    color: 'black',
    paddingLeft: 5,
  },
});
