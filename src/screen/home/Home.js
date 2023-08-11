import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card, Header} from '../../components';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {setproducts} from '../../redux/actions/productActions';

const Home = ({navigation}) => {
  const product = useSelector(state => state.allproducts.products);
  const dispatch = useDispatch();
  const [prod, setprod] = useState();
  const [prodx, setprodx] = useState();
  const [search, setSearch] = useState('');

  const fetchproducts = async () => {
    const response = await axios
      .get('https://books-list-api.vercel.app/books', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': '#b0@6hX8YasCq6^unOaPw1tqR',
        },
      })
      .catch(err => {
        console.log(err);
      });
    dispatch(setproducts(response.data.data));
    setprod(response.data.data);
  };

  useEffect(() => {
    fetchproducts();
  }, []);

  const filterdata = txt => {
    let tempdata = prod;
    let newData = tempdata.filter(item => {
      return item.title.toLowerCase().match(txt.toLowerCase());
    });
    if (newData.length > 0) {
      dispatch(setproducts(newData));
    } else {
      dispatch(setproducts(tempdata));
    }
  };

  return (
    <ScrollView>
      <View style={{flex: 1, width: '90%', alignSelf: 'center'}}>
        <View style={{marginTop: responsiveScreenHeight(2)}}>
          <Header />
        </View>
        <View style={styles.inputview}>
          <Image source={require('../../assests/images/search.png')} />
          <TextInput
            value={search}
            placeholderTextColor={'#000000'}
            placeholder="Search.."
            style={styles.input}
            onChangeText={txt => {
              setSearch(txt);
              filterdata(txt);
            }}
          />
        </View>

        <View
          style={{
            flex: 1,
          }}>
          {prod == null ? (
            <View style={{flex: 1, justifyContent: 'center'}}>
              <ActivityIndicator size="large" color="#004D6D" />
            </View>
          ) : (
            <FlatList
              numColumns={2}
              data={product}
              renderItem={({item, index}) => {
                return <Card navi={navigation} datas={item} ind={index} />;
              }}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputview: {
    width: '100%',
    height: responsiveScreenHeight(5.6),
    backgroundColor: '#D1D1D1',
    elevation: 3,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    marginTop: responsiveScreenHeight(3),
  },
  input: {
    width: '100%',
    fontSize: responsiveScreenFontSize(2),
    paddingLeft: 20,
    color: '#000000',
  },
});

export default Home;
