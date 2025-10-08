import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
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
type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const SignupScreen: React.FC<Props> = ({ navigation }) => {
    const [inputData, setInputData] = useState({ phone: '', password: '', username: '', email: '' });
    const handleInputChange = (fieldName: string, value: string) => {
        setInputData(prev => ({ ...prev, [fieldName]: value }));
    };

    return (
        <LinearGradient colors={['#00C6FF', '#0072FF']}
            style={styles.container} >
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
                    <View style={styles.viewCon}>
                        <Image source={IMAGES.logo} style={styles.logo} />
                        <CustomText type="heading" fontWeight="900" color={COLORS.White} style={{ marginHorizontal: horizontalScale(20) }}>
                            Register
                        </CustomText>
                        <CustomText
                            type="subTitle"
                            fontWeight="300"
                            color={COLORS.White}
                            style={{ paddingVertical: verticalScale(15), marginHorizontal: horizontalScale(20) }}
                        >
                            Insert your username and password
                        </CustomText>
                        <View style={{ gap: verticalScale(20) }}>
                            <CustomInput
                                placeholder={'Yourname'}
                                keyboardType="default"
                                onChangeText={value => handleInputChange('username', value)}
                                value={inputData.username}
                            />
                            <CustomInput
                                placeholder={'Email'}
                                keyboardType="email-address"
                                onChangeText={value => handleInputChange('email', value)}
                                value={inputData.email}
                            />
                            <CustomInput
                                placeholder={'Phone Number (Optional)'}
                                keyboardType="phone-pad"
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
                                title="Register"
                                onPress={() => {
                                    navigation.navigate('Login');
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}
export default SignupScreen