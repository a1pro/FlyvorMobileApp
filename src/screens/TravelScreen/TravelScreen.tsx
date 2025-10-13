import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabParamList } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';

import { CustomText } from '../../components/CustomText';

type Props = NativeStackScreenProps<BottomTabParamList, 'Travel'>;

const TravelScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomText>Progress ...</CustomText>
    </SafeAreaView>
  );
};
export default TravelScreen;
