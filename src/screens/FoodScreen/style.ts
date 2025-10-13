import { StyleSheet } from 'react-native';
import COLORS from '../../utils/Colors';
import { horizontalScale, verticalScale } from '../../utils/Metrics';

const styles = StyleSheet.create({
  container: { flex: 1 },
  logo: {
    height: verticalScale(150),
    width: horizontalScale(200),
    resizeMode: 'contain',
    marginVertical: 30,
    alignSelf: 'center',
    marginBlock: verticalScale(50),
    tintColor: COLORS.White,
  },
  viewCon: { flex: 1, paddingHorizontal: horizontalScale(15) },
  text1: {
    marginHorizontal: horizontalScale(30),
  },
  inputview: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.barcolor,
    borderRadius: 15,
    paddingVertical: verticalScale(8),
    marginTop: verticalScale(20),
    paddingHorizontal: horizontalScale(10),
  },
  input: {
    paddingHorizontal: horizontalScale(10),
    width: '90%',
  },
  icon: {
    backgroundColor: COLORS.barcolor,
    borderRadius: 15,
    alignItems: 'center',
    // width: "20%",
    padding: 15,
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(10),
  },
  searchbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  txt: {
    marginTop: verticalScale(20),
  },
  flatListContainer: {
    marginTop: verticalScale(16),
    marginBottom: verticalScale(8),
    paddingHorizontal: horizontalScale(8),
  },
  tabButton: {
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: COLORS.grey,
    marginRight: 10,
  },
  tabText: {
    color: COLORS.appColor,
    textAlign: 'center',
  },
  globview: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    gap: 5,
    paddingHorizontal: horizontalScale(5),
    backgroundColor: COLORS.barcolor,
    borderRadius: 12,
    paddingVertical: verticalScale(8),
  },
  globtxt: {
    color: COLORS.White,
    fontWeight: '500',
  },
  cardview: {
    width: '44%',
    backgroundColor: '#fff',
    borderRadius: 14,
    elevation: 4,
    shadowColor: COLORS.black,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 1 },
    margin: 10,
    padding: 8,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    resizeMode: 'cover',
  },
  flatListContainer2: {
    paddingBottom: verticalScale(30),
  },
  titleText: {
    color: COLORS.appColor,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
    width: '100%',
  },
  catText: {
    color: COLORS.buttonTxt,
    textAlign: 'left',
  },
  ratingText: {
    marginLeft: 2,
  },
});

export default styles;
