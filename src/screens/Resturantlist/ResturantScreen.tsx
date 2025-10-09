import React, { useEffect, useMemo, useState } from 'react';
import { View, Image, TouchableOpacity, Text, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import IMAGES from '../../assets/images';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import COLORS from '../../utils/Colors';
import Fontisto from '@react-native-vector-icons/fontisto';
import Stars from 'react-native-stars'
type Props = NativeStackScreenProps<RootStackParamList, 'Resturant'>;

const Data = [
  {
    id: 1,
    name: "The Gourmet kitchen",
    rating: 4.3,
    distance: "3.5 km",
    title: "Mexican Tacos ",
    image: IMAGES.taco,
    status: "open"
  },
  {
    id: 2,
    name: "The Gourmet kitchen",
    rating: 4.8,
    distance: "2.5 km",
    title: "American Burgers ",
    image: IMAGES.burger,
    status: "open"
  },
  {
    id: 3,
    name: "The Gourmet kitchen",
    rating: 4.4,
    distance: "1.5 km",
    title: "Mexican Tacos ",
    image: IMAGES.burger,
    status: "close"
  },
  {
    id: 4,
    name: "The Gourmet kitchen",
    rating: 4.4,
    distance: "6.5 km",
    title: "Mexican Tacos ",
    image: IMAGES.pizza,
    status: "open"
  },
  {
    id: 5,
    name: "The Gourmet kitchen",
    rating: 4.5,
    distance: "3.5 km",
    title: "Mexican Tacos ",
    image: IMAGES.taco,
    status: "close"
  },
  {
    id: 6,
    name: "The Gourmet kitchen",
    rating: 4.3,
    distance: "1.5 km",
    title: "Mexican Tacos ",
    image: IMAGES.burger,
    status: "open"
  },
  {
    id: 7,
    name: "The Gourmet kitchen",
    rating: 4.3,
    distance: "5.5 km",
    title: "Mexican Tacos ",
    image: IMAGES.taco,
    status: "open"
  },
  {
    id: 8,
    name: "The Gourmet kitchen",
    rating: 4.3,
    distance: "7.5 km",
    title: "Mexican Tacos ",
    image: IMAGES.pizza,
    status: "close"
  },
]
const filters = [
  { id: 1, label: 'cuisine', active: false },
  { id: 2, label: 'Distance', active: false },
  { id: 3, label: 'Open Now', active: false },
];

const ResturantScreen: React.FC<Props> = ({ navigation }) => {

  const [selectedFilter, setSelectedFilter] = useState(1);
const parseDistance = (distance: string) => {
  return parseFloat(distance.replace("km", "").trim());
};
  const filteredData = useMemo(() => {
    if (selectedFilter === 2) {
      return [...Data].sort((a, b) => parseDistance(a.distance) - parseDistance(b.distance));
    } else if (selectedFilter === 3) {
      return Data.filter(item => item.status === "open");
    }
    return Data;
  }, [selectedFilter]);

  const renderFilterChip = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.filterChip,
        selectedFilter === item.id ? styles.filterActive : {},
      ]}
      onPress={() => setSelectedFilter(item.id)}
    >
      <Text style={[
        styles.filterText,
        selectedFilter === item.id ? styles.filterTextActive : {},
      ]}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardType}>{item.title}</Text>
        <View style={styles.rowCenter}>
          <Stars
            display={item.rating}
            spacing={2}
            count={5}
            starSize={16}
            fullStar={<MaterialIcons name={'star'} size={16} color="#FFD500" />}
            emptyStar={<MaterialIcons name={'star-border'} size={16} color="#FFD500" />}
            halfStar={<MaterialIcons name={'star-half'} size={16} color="#FFD500" />}
          />
          <Text style={styles.ratingNum}>{item.rating}</Text>
        </View>
        <Text style={styles.timeTxt}>{item.distance}</Text>
      </View>
    </View>
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backbtn}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <MaterialIcons name='arrow-back-ios-new' color={COLORS.White} size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.btnview}>
        <View>
          <TouchableOpacity style={styles.mapview}>
            <Fontisto name='map' color={COLORS.barcolor} size={25} />
            <Text style={styles.txt}>Map</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.mapview}>
            <Fontisto name='list-2' color={COLORS.barcolor} size={25} />
            <Text style={styles.txt}>List</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.filterRow}>
        <FlatList
          horizontal
          data={filters}
          renderItem={renderFilterChip}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ResturantScreen;