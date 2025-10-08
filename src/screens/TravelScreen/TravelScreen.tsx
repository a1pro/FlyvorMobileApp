import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabParamList, RootStackParamList } from '../../types';
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
type Props = NativeStackScreenProps<BottomTabParamList, 'Travel'>;

const TravelScreen: React.FC<Props> = ({ navigation }) => {
    return(
        <SafeAreaView style={styles.container}>
            <CustomText>
                hello how are you 

            </CustomText>
        </SafeAreaView>
    )

}
export default TravelScreen;