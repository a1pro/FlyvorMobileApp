import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, TextInput, FlatList, StyleSheet, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabParamList } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import IMAGES from '../../assets/images';
import { CustomText } from '../../components/CustomText';
import COLORS from '../../utils/Colors';
import MaterialIcons from '@react-native-vector-icons/material-icons';

import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

type Props = NativeStackScreenProps<BottomTabParamList, 'Food'>;

const data = [
  { id: 1, title: 'Pizza' },
  { id: 2, title: 'Sushi' },
  { id: 3, title: 'Cocktail' },
  { id: 4, title: 'Burgers' },
];

const foodItem =[
  {
    id:1,
    image:IMAGES.pizza,
    title:'Pizza',
    rating:4.8,
    category:'mexican'
  },
    {
    id:2,
    image:IMAGES.burger,
    title:'Hamburger',
    rating:4.3,
    category:'Veggie Burger'
  },
    {
    id:3,
    image:IMAGES.taco,
    title:'Tacos ',
    rating:4.8,
    category:'Mexican'
  },
  {
    id:4,
    image:IMAGES.pizza,
    title:'Pizza',
    rating:4.7,
    category:'mexican'
  },
    {
    id:5,
    image:IMAGES.burger,
    title:'Hamburger',
    rating:4.9,
    category:'Veggie Burger'
  },
    {
    id:6,
    image:IMAGES.taco,
    title:'Tacos ',
    rating:4.6,
    category:'Mexican'
  },
]
const FoodScreen: React.FC<Props> = ({ navigation }) => {
  const [inputData, setInputData] = useState('');
  const [activeTab, setActiveTab] = useState<number>(1);

  const renderTab = ({ item }: { item: { id: number; title: string } }) => (
    <TouchableOpacity
      style={[
        styles.tabButton,
        activeTab === item.id && { backgroundColor: COLORS.barcolor },
      ]}
      onPress={() => setActiveTab(item.id)}
    >
      <CustomText
        style={[
          styles.tabText,
          activeTab === item.id && { color: COLORS.White, fontWeight: '700' },
        ]}
      >
        {item.title}
      </CustomText>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <View style={styles.cardview}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={{marginTop: 12, width: '100%'}}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.catText}>{item.category}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems: 'center',marginTop:10, width: '100%'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome6 name="star" size={18} color="#F7B801" />
            <Text style={styles.ratingText}> {item.rating}</Text>
          </View>
          <TouchableOpacity>
            <FontAwesome6 name="heart" size={22} color={COLORS.appColor} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewCon}>
        <View style={styles.searchbar}>
          <View style={styles.inputview}>
            <TouchableOpacity>
              <MaterialIcons name="search" color={COLORS.grey} size={35} />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Dishes, Drinks, places..."
              value={inputData}
              placeholderTextColor={COLORS.grey}
              onChangeText={tex => setInputData(tex)}
            />
          </View>
          <View style={styles.icon}>
            <TouchableOpacity>
              <Image source={IMAGES.filter} style={{ height: 30, width: 30 }} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <CustomText type="title" fontWeight="600" style={styles.txt}>
            Popular Nearby
          </CustomText>
          <FlatList
            data={data}
            horizontal
            keyExtractor={item => item.id.toString()}
            renderItem={renderTab}
            contentContainerStyle={styles.flatListContainer}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View >
          <TouchableOpacity style={styles.globview} onPress={()=>navigation.navigate('Resturant')}>
          <Text style={styles.globtxt}>Global Search</Text>
          <Image source={IMAGES.glob} style={{height:30,width:30 ,resizeMode:"contain"}}/>
          </TouchableOpacity>

        </View>

        
           <CustomText type="title" fontWeight="600" style={styles.txt}>
            Featured & Trending
          </CustomText>

          <FlatList
          data={foodItem}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={styles.flatListContainer2}
          showsVerticalScrollIndicator={false}
        />
        
      </View>
    </SafeAreaView>
  );
};



export default FoodScreen;
