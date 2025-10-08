import { StyleSheet } from 'react-native';
import COLORS from '../../utils/Colors';
import { horizontalScale, verticalScale } from '../../utils/Metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black2,
    alignItems: 'center',
    
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
  },
  backBtn: {
    position: 'absolute',
    top: 25,
    left: 18,
    zIndex: 10,
    backgroundColor: 'rgba(40,45,54,0.8)',
    borderRadius: 18,
    padding: 3,
  },
  backIcon: {
    width: 28,
    height: 28,
    tintColor: COLORS.lightwhite,
  },
  profileTitle: {
    fontSize: 19,
    color:COLORS.White,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 6,
  },
  avatarWrapper: {
    alignSelf: 'center',
    marginTop: 3,
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: COLORS.blue,
  },
  editIconWrapper: {
    position: 'absolute',
    right: -5,
    bottom: 4,
    backgroundColor: COLORS.lightblue,
    borderRadius: 20,
    padding: 7,
    borderWidth: 2,
    borderColor: COLORS.black2,
  },
  editIcon: {
    width: 19,
    height: 19,
    tintColor: COLORS.White,
  },
  profileName: {
    marginTop: verticalScale(10),
    alignSelf: 'center',
    fontSize: 20,
    color: COLORS.White,
    fontWeight: '600',
  },
  profileRole: {
    marginTop: verticalScale(10),
    alignSelf: 'center',
    fontSize: 15,
    color: COLORS.lightwhite,
    fontWeight: '500',
    marginBottom: 3,
  },
  profileDesc: {
    marginTop: verticalScale(10),
    alignSelf: 'center',
    fontSize: 12,
    color: COLORS.grey,
    textAlign: 'center',
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.black2,
    borderRadius: 14,
    paddingVertical: 13,
    paddingHorizontal: 17,
    marginVertical: 6,
    width: '88%',
    alignSelf: 'center',
  },
  cardIconWrap: {
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  cardIcon: {
    width: 22,
    height: 22,
    tintColor: COLORS.lightblue,
  },
  cardText: {
    fontSize: 15,
    color: COLORS.White,
    fontWeight: '400',
    flex: 1,
  },
  logoutIcon: {
    width: 22,
    height: 22,
    tintColor: COLORS.red,
  },
  logoutCard: {
    marginBottom: 32,
  },
  logoutText: {
    fontSize: 15,
    color: COLORS.red,
    fontWeight: '500',
    flex: 1,
  },
  saveBtn: {
    backgroundColor: COLORS.lightblue,
    borderRadius: 15,
    paddingVertical: 13,
    paddingHorizontal: 55,
    alignSelf: 'center',
    marginBottom: 8,
    marginTop: 8,
    shadowColor: COLORS.lightblue,
    shadowOpacity: 0.23,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  saveBtnText: {
    color: COLORS.White,
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 1,
  },
  btnview: {
    width: "90%",
    marginTop: verticalScale(20),
    gap: verticalScale(20),
  }
});

export default styles;
