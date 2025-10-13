import { StyleSheet } from 'react-native';
import COLORS from '../../utils/Colors';
import { horizontalScale, verticalScale } from '../../utils/Metrics';

const styles = StyleSheet.create({
  container: { flex: 1, },
  logo: {
    height: verticalScale(150),
    width: horizontalScale(200),
    resizeMode: 'contain',
    marginVertical: 30,
    alignSelf: "center",
    marginBlock: verticalScale(40),
    tintColor: COLORS.White
  },
  viewCon: { flex: 1, justifyContent: "center" },
  text1: {
    marginHorizontal: horizontalScale(30),
  }
});

export default styles;
