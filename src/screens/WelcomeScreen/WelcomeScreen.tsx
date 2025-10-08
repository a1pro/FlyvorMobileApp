import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import styles from './style';
import IMAGES from '../../assets/images';
import { CustomText } from '../../components/CustomText';
import COLORS from '../../utils/Colors';
import { horizontalScale, verticalScale } from '../../utils/Metrics';
import CustomButton from '../../components/CustomButton';

type Props = NativeStackScreenProps<RootStackParamList, 'WelcomeScreen'>;

const WelcomeScreen: React.FC<Props> = ({ navigation }) => (
  <LinearGradient
    colors={['#00C6FF', '#0072FF']}
    style={styles.container} 
  >
    <Image source={IMAGES.logo} style={styles.logo} />
    <CustomText type="heading" fontWeight="900" color={COLORS.White} style={styles.text1}>
      Lets Get{'\n'}started with us
    </CustomText>
    <CustomText
      type="subTitle"
      fontWeight="300"
      color={COLORS.White}
      style={{
        paddingVertical: verticalScale(15),
        marginBottom: verticalScale(20),
        marginHorizontal: horizontalScale(30),
      }}
    >
      Discover the best dishes and hidden travel gems wherever you go. Sign in to start your journey
    </CustomText>
    <View style={{ marginVertical: verticalScale(30), gap: verticalScale(20) }}>
      <CustomButton
        title="Login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <CustomButton
        backgroundColor={COLORS.lightblue}
        border={true}
        title="Signup"
        textColor={COLORS.White}
        onPress={() => {
          navigation.navigate('Signup');
        }}
      />
       <TouchableOpacity>
        <CustomText type="subTitle" fontWeight="900" color={COLORS.White} style={[styles.text1,{textAlign:"center"}]}>
      or Continue as Guest
    </CustomText>
       </TouchableOpacity>
      
    </View>
  </LinearGradient>
);

export default WelcomeScreen;
