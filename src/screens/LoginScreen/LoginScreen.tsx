import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import IMAGES from '../../assets/images';
import { CustomText } from '../../components/CustomText';
import COLORS from '../../utils/Colors';
import { horizontalScale, verticalScale } from '../../utils/Metrics';
import { KeyboardAvoidingContainer } from '../../components/KeyboardAvoidingComponent';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [inputData, setInputData] = useState({ phone: '', password: '' });

  const handleInputChange = (fieldName: string, value: string) => {
    setInputData(prev => ({ ...prev, [fieldName]: value }));
  };             

  return (
      <SafeAreaView style={styles.container} >
        <KeyboardAvoidingContainer>
         <LinearGradient
    colors={['#00C6FF', '#0072FF']}
    style={styles.container} 
  >
  
        <View style={styles.viewCon}>
          <Image source={IMAGES.logo} style={styles.logo} />

          <CustomText type="heading" fontWeight="900" color={COLORS.White} style={{paddingHorizontal:horizontalScale(20)}}>
            Welcome
          </CustomText>
                        
          <CustomText
            type="subTitle"
            fontWeight="300"
            color={COLORS.White}
            style={{
              paddingVertical: verticalScale(15),
              paddingHorizontal:horizontalScale(20)
            }}
          >
            Insert your username and password
          </CustomText>
          <View style={{ gap: verticalScale(20) }}>
            <CustomInput
              placeholder={'username or email'}
              keyboardType="email-address"
              onChangeText={value => handleInputChange('phone', value)}
              value={inputData.phone}
            />
            <CustomInput
              placeholder={'Password'}
              onChangeText={value => handleInputChange('password', value)}
              value={inputData.password}
            />
          </View>
          <View
            style={{
              marginTop: verticalScale(60),
              gap: verticalScale(20),
            }}
          >
            <CustomButton
              title="Login"
              onPress={() => {
                navigation.navigate('Food');
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
        </View>
      
      </LinearGradient>
       </KeyboardAvoidingContainer>
       </SafeAreaView>
    
  );
};

export default LoginScreen;
