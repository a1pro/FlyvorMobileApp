import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import IMAGES from '../../assets/images';
type Props = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>;

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewCon}>
        <Image source={IMAGES.logo} style={styles.logo} />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
