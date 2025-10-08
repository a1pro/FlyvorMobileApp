import {StyleSheet} from 'react-native';
import COLORS from '../../utils/Colors';
import { horizontalScale, verticalScale } from '../../utils/Metrics';

const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor:COLORS.lightblue,justifyContent:"center"},

 
  logo: {
    height: verticalScale(200),
    width:horizontalScale(300),
    resizeMode: 'contain',
    marginBottom: verticalScale(60),
    alignSelf:"center",
    tintColor:COLORS.White
  
  },
  viewCon:{flex:1,justifyContent:"center",paddingHorizontal:15},
  text1:{
    marginHorizontal:horizontalScale(30),
  }
});

export default styles;
