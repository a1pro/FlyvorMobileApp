import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabParamList } from '../../types';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import styles from './style';
import CustomButton from '../../components/CustomButton';
import COLORS from '../../utils/Colors';
import { CustomText } from '../../components/CustomText';
import { verticalScale } from '../../utils/Metrics';
import IMAGES from '../../assets/images';

type Props = NativeStackScreenProps<BottomTabParamList, 'UserProfile'>;

const UserProfile: React.FC<Props> = ({ navigation }) => {
  const [phone, setPhone] = useState('1234567890');
  const [address, setAddress] = useState(
    '221B Baker Street\nLondon, NW1 6XE\nUnited Kingdom',
  );
  const user = {
    name: 'Jhon Doe',
    role: 'Entrepreneur',
    desc: 'A professional vehicle enthusiast and car collector',
    avatar: IMAGES.profile,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="chevron-left" size={30} color={COLORS.White} />
        </TouchableOpacity>

        <CustomText
          type="subHeading"
          fontWeight="700"
          color={COLORS.White}
          style={{
            paddingVertical: verticalScale(30),
          }}
        >
          Your Profile
        </CustomText>
      </View>

      <View style={styles.avatarWrapper}>
        <Image source={user.avatar} style={styles.avatar} />
        <TouchableOpacity style={styles.editIconWrapper} onPress={() => {}}>
          <MaterialIcons name="edit" size={20} color={COLORS.White} />
        </TouchableOpacity>
      </View>
      <CustomText style={styles.profileName}>vfhbjdfnj</CustomText>
      <CustomText style={styles.profileRole}>{user.role}</CustomText>
      <CustomText style={styles.profileDesc}>{user.desc}</CustomText>
      <View style={styles.card}>
        <View style={styles.cardIconWrap}>
          <MaterialIcons name="phone" size={22} color={COLORS.lightblue} />
        </View>
        <Text style={styles.cardText}>{phone}</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardIconWrap}>
          <MaterialIcons name="location-on" size={22} color={COLORS.lightblue} />
        </View>
        <CustomText style={styles.cardText}>{address}</CustomText>
      </View>

      <TouchableOpacity style={[styles.card, styles.logoutCard]}>
        <View style={styles.cardIconWrap}>
          <MaterialIcons name="logout" size={22} color={COLORS.red} />
        </View>
        <CustomText style={styles.logoutText}>Log out</CustomText>
      </TouchableOpacity>

      <View style={styles.btnview}>
        <CustomButton
          backgroundColor={COLORS.lightblue}
          border={true}
          title="Save"
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default UserProfile;
