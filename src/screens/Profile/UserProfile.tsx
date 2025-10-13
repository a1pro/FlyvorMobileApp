import React, { useState } from 'react';
import { View, Image, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import styles from './style';
import IMAGES from '../../assets/images';
import COLORS from '../../utils/Colors';
import { CustomText } from '../../components/CustomText';
import { verticalScale } from '../../utils/Metrics';
import Fontisto from '@react-native-vector-icons/fontisto';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabParamList } from '../../types';
const tabs = [
  { id: 1, title: 'My Reviews' },
  { id: 2, title: 'Friends' },
  { id: 3, title: 'Settings' },
];

const cards = [
  {
    id: 1,
    icon: 'restaurant-menu',
    label: 'The Italian Bistro',
    subLabel: 'Restaurant',
  },
  { id: 2, icon: 'hotel', label: 'Grand Hotel', subLabel: 'Hotel' },
  { id: 3, icon: 'location-city', label: 'City Tour', subLabel: 'experience' },
];
type Props = NativeStackScreenProps<BottomTabParamList, 'Profile'>;
const UserProfile: React.FC<Props> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState(1);
  const user = {
    name: 'Jhon Doe',
    email: 'John Doe@example.com',
    avatar: IMAGES.profile,
  };

  const renderTab = ({ item }: { item: { id: number; title: string } }) => (
    <TouchableOpacity
      style={[
        styles.profileTab,
        activeTab === item.id && { backgroundColor: COLORS.barcolor },
      ]}
      onPress={() => setActiveTab(item.id)}
    >
      <CustomText
        fontFamily="semiBold"
        style={[
          styles.tabText,
          activeTab === item.id && { color: COLORS.White },
        ]}
      >
        {item.title}
      </CustomText>
    </TouchableOpacity>
  );

  const renderCard = ({ item }: any) => (
    <View style={styles.listCard}>
      <MaterialIcons name={item.icon} size={25} color={COLORS.buttonTxt} />

      <View style={{ flex: 1 }}>
        <CustomText style={styles.listTitle} color={COLORS.black}>
          {item.label}
        </CustomText>
        <CustomText type="small" color={COLORS.buttonTxt}>
          {item.subLabel}
        </CustomText>
      </View>
      <TouchableOpacity>
        <FontAwesome name="edit" size={20} color={COLORS.lightblue} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="delete" size={20} color={COLORS.red} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Fontisto name="share-a" size={18} color={COLORS.lightblue} />
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
            <MaterialIcons name="edit" size={15} color={COLORS.White} />
          </TouchableOpacity>
        </View>
        <CustomText
          type="subHeading"
          fontWeight={'bold'}
          style={styles.profileName}
        >
          {user.name}
        </CustomText>
        <CustomText style={styles.profileRole}>{user.email}</CustomText>
      </View>
      <View style={styles.tabRow}>
        <FlatList
          scrollEnabled={false}
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
          scrollEnabled={false}
          data={cards}
          renderItem={renderCard}
          keyExtractor={item => item.id.toString()}
        />

        <TouchableOpacity style={styles.listCard}>
          <MaterialIcons name="logout" size={24} color={COLORS.lightblue} />
          <CustomText style={styles.listTitle}>Login</CustomText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UserProfile;
