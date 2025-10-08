import {StyleSheet} from 'react-native';
import COLORS from '../../utils/Colors';
import { horizontalScale, verticalScale } from '../../utils/Metrics';

const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor:COLORS.appColor},
  logo: {
    height: verticalScale(100),
    width:horizontalScale(200),
    resizeMode: 'contain',
    marginVertical: 30,
  
  },
  viewCon:{backgroundColor:COLORS.appColor,flex:1,justifyContent:"center",alignItems:"center"}
});

export default styles;
