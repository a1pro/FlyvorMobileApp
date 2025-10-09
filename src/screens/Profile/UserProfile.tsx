import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import styles from './style';
import IMAGES from '../../assets/images';
import COLORS from '../../utils/Colors';
import { CustomText } from '../../components/CustomText';
import { verticalScale } from '../../utils/Metrics';
import Fontisto from '@react-native-vector-icons/fontisto';

const tabs = [
  { id: 1, title: 'My Reviews' },
  { id: 2, title: 'Friends' },
  { id: 3, title: 'Settings' },
];

const cards = [
  { id: 1, icon: 'restaurant-menu', label: 'The Italian Bistro', subLabel: 'Restaurant' },
  { id: 2, icon: 'hotel', label: 'Grand Hotel', subLabel: 'Hotel' },
  { id: 3, icon: 'location-city', label: 'City Tour', subLabel: 'experience' },
];

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState(1);
  const user = {
    name: 'Jhon Doe',
    email: 'John Doe@example.com',
    avatar: IMAGES.profile,
  };

  const renderTab =  ({ item }: { item: { id: number; title: string } }) => (
    <TouchableOpacity
      style={[
        styles.profileTab,
        activeTab === item.id && { backgroundColor: COLORS.lightblue }
      ]}
      onPress={() => setActiveTab(item.id)}
    >
      <Text style={[
        styles.tabText,
        activeTab === item.id && { color: COLORS.White }
      ]}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderCard = ({ item }) => (
    <View style={styles.listCard}>
      <View style={styles.cardLeft}>
        <MaterialIcons name={item.icon} size={25} color={COLORS.lightblue} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.listTitle}>{item.label}</Text>
        <Text style={styles.listSubtitle}>{item.subLabel}</Text>
      </View>
      <TouchableOpacity>
        <MaterialIcons name="edit" size={22} color={COLORS.lightblue}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="delete-outline" size={22} color={COLORS.red}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Fontisto name="share-a" size={21} color={COLORS.lightblue}/>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center', marginTop: verticalScale(16) }}>
        <CustomText
          type="subHeading"
          fontWeight="700"
          color={COLORS.appColor}
          style={{ marginBottom: verticalScale(10) }}
        >
          Your Profile
        </CustomText>
        <View style={styles.avatarWrapper}>
          <Image source={user.avatar} style={styles.avatar} />
          <TouchableOpacity style={styles.editIconWrapper}>
            <MaterialIcons name="edit" size={22} color={COLORS.White} />
          </TouchableOpacity>
        </View>
        <CustomText style={styles.profileName}>{user.name}</CustomText>
        <CustomText style={styles.profileRole}>{user.email}</CustomText>
      </View>
      <View style={styles.tabRow}>
        <FlatList
          data={tabs}
          horizontal
          renderItem={renderTab}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.tabList}
          showsHorizontalScrollIndicator={false}
        />
      </View>            
      
      <View style={styles.listContainer}>
        <FlatList
          data={cards}
          renderItem={renderCard}
          keyExtractor={item => item.id.toString()}
        />
        <TouchableOpacity style={styles.listCardLogout}>
          <View style={styles.cardLeft}>
            <MaterialIcons name="logout" size={24} color={COLORS.lightblue}/>
          </View>
          <Text style={styles.listTitle}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UserProfile;
