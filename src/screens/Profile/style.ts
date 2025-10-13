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
    borderWidth: 1,
    borderColor: COLORS.lightblue,
  },
  editIconWrapper: {
    position: 'absolute',
    right: -5,
    bottom: 0,
    backgroundColor: COLORS.lightblue,
    borderRadius: 20,
    padding: 7,
    borderWidth: 2,
    borderColor: COLORS.White,
  },
  profileName: {
    textAlign: 'center',
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
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(15),
    borderRadius: 14,
    marginVertical: verticalScale(15),
    backgroundColor: COLORS.revBtn,
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
    color: COLORS.black,
    textAlign: 'center',
  },
  listContainer: {
    marginTop: verticalScale(4),
    paddingHorizontal: horizontalScale(20),
  },
  listCard: {
    backgroundColor: COLORS.btnvw,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(14),
    marginBottom: verticalScale(10),
    elevation: 1,
    shadowColor: COLORS.black,
    shadowOpacity: 0.07,
    shadowOffset: { width: 0, height: 0.5 },
    gap: 10,
    minHeight: verticalScale(70),
  },

  listTitle: {
    marginBottom: 2,
  },
});

export default styles;
