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
    marginBlock: verticalScale(50),
    tintColor: COLORS.White
  },
  viewCon: { flex: 1, paddingHorizontal: horizontalScale(20) },
  text1: {
    marginHorizontal: horizontalScale(30),
  },
  inputview: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.barcolor,
    borderRadius: 20,
    paddingVertical: verticalScale(10),
    marginTop: verticalScale(20),
    paddingHorizontal: horizontalScale(10)
  },
  input: {
    paddingHorizontal: horizontalScale(10),

  },
  icon: {
    backgroundColor: COLORS.barcolor,
    borderRadius: 40,
    alignItems: "center",
    width: "20%",
    paddingVertical: verticalScale(15),
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(10)
  },
  searchbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  txt: {
    marginTop: verticalScale(20)
  },
  flatListContainer: {
    marginTop: verticalScale(16),
    marginBottom: verticalScale(8),
    paddingHorizontal: horizontalScale(8),
  },
  tabButton: {
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: COLORS.grey,
    marginRight: 12,

  },
  tabText: {
    fontSize: 16,
    color: COLORS.appColor,
    textAlign: "center"
  },
  globview: {
    marginTop: verticalScale(20),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "58%",
    paddingHorizontal: horizontalScale(5),
    backgroundColor: COLORS.barcolor,
    borderRadius: 20,
    paddingVertical: verticalScale(12)
  },
  globtxt: {
    fontSize: 18,
    color: COLORS.White,
    marginHorizontal: horizontalScale(20),
    fontWeight: "500"
  },
  cardview: {
    width: "44%",
    backgroundColor: '#fff',
    borderRadius: 14,
    elevation: 4,
    shadowColor: COLORS.grey,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    margin: 10,
    padding: 12,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    resizeMode: 'cover'
  },
  flatListContainer2: {
    paddingBottom: verticalScale(40)
  },
  titleText: {
    color: COLORS.appColor,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
    width: '100%'
  },
  catText: {
    color: '#727272',
    fontSize: 13,
    textAlign: 'left',
    width: '100%'
  },
  ratingText: {
    color: '#222',
    fontWeight: '600',
    fontSize: 15,
    marginLeft: 2
  }
});

export default styles;
