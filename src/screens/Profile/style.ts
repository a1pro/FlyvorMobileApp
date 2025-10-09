import { StyleSheet } from 'react-native';
import COLORS from '../../utils/Colors';
import { horizontalScale, verticalScale } from '../../utils/Metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  avatarWrapper: {
    alignSelf: 'center',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(14),
    position: 'relative',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: COLORS.lightblue,
  },
  editIconWrapper: {
    position: 'absolute',
    right: -5,
    bottom: 0,
    backgroundColor: COLORS.lightblue,
    borderRadius: 18,
    padding: 7,
    borderWidth: 2,
    borderColor: COLORS.White,
  },
  profileName: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.appColor,
    textAlign: 'center',
    marginTop: 8,
  },
  profileRole: {
    fontSize: 15,
    color: COLORS.appColor,
    textAlign: 'center',
    marginBottom: verticalScale(6),
  },
  tabRow: {
    paddingTop: verticalScale(12),
    paddingBottom: verticalScale(8),
    alignItems: 'center',
    
  },
  tabList: {
    alignItems: 'center',
    gap: horizontalScale(15),
  },
  profileTab: {
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(18),
    borderRadius: 14,
    backgroundColor: COLORS.White,
    marginHorizontal: horizontalScale(5),
    minWidth: horizontalScale(70),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: COLORS.grey,
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 1 },
  },
  tabText: {
    fontWeight: '600',
    fontSize: 15,
    color: COLORS.lightblue,
    textAlign: 'center',
  },              
  listContainer: {
    marginTop: verticalScale(4),
    paddingHorizontal: horizontalScale(20),
  },
  listCard: {
    backgroundColor: COLORS.White,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(14),
    marginBottom: verticalScale(10),
    elevation: 1,
    shadowColor: COLORS.grey,
    shadowOpacity: 0.07,
    shadowOffset: { width: 0, height: 1 },
    gap: 10,
    
    minHeight: verticalScale(80),
  },
  listCardLogout: {
    backgroundColor: COLORS.White,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(14),
    marginBottom: verticalScale(10),
    marginTop: verticalScale(10),
    elevation: 1,
    shadowColor: COLORS.inputBackground,
    shadowOpacity: 0.07,
    shadowOffset: { width: 0, height: 1 },
    minHeight: verticalScale(55),
    minWidth:horizontalScale(60),
  },
  cardLeft: {
    marginRight: horizontalScale(11),
    alignItems: 'center',
    justifyContent: 'center',
  },
  listTitle: {
    fontWeight: '600',
    color: COLORS.appColor,
    fontSize: 14,
    marginBottom: 2,
  },
  listSubtitle: {
    color: COLORS.grey,
    fontSize: 12,
    fontWeight: '400',
  },
});

export default styles;
