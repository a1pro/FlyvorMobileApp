import { StyleSheet } from 'react-native';
import COLORS from '../../utils/Colors';
import { horizontalScale, verticalScale } from '../../utils/Metrics';
import { getPlatformFont } from '../../assets/fonts';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.White },
  headerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(20),
    marginTop: verticalScale(20),
    marginBottom: verticalScale(12),
  },

  toggleBtnWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(18),
  },
  toggleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.inputBackground,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: COLORS.White,
    marginLeft: 7,
    marginRight: 7,
    gap: 6,
  },
  toggleBtnText: {
    color: COLORS.barcolor,
    fontWeight: '600',
    fontSize: 13,
    marginLeft: 6,
  },
  filterRow: {
    marginBottom: verticalScale(4),

    marginTop: 6,
  },
  filterChip: {
    backgroundColor: COLORS.btnvw,
    borderRadius: 13,
    padding: 15,
    marginRight: 10,
    marginBottom: verticalScale(10),
    marginTop: verticalScale(20),
    alignSelf: 'center',
  },
  filterActive: {
    backgroundColor: COLORS.barcolor,
  },

  listContainer: {
    paddingHorizontal: horizontalScale(12),
    paddingBottom: verticalScale(28),
  },
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: COLORS.White,
    borderRadius: 13,
    padding: 10,

    marginVertical: verticalScale(10),
    shadowColor: '#B9B9B9',
    shadowOpacity: 0.16,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    minHeight: 90,
  },
  cardImage: {
    width: 56,
    height: 56,
    borderRadius: 10,
    marginRight: 14,
    resizeMode: 'cover',
  },
  cardContent: { flex: 1 },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(5)
  },

  ratingNum: {
    marginLeft: 4,
  },

  backbtn: {
    backgroundColor: COLORS.barcolor,
    width: '10%',
    borderRadius: 10,
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(20),
    alignItems: 'center',
    padding: 5,
  },
  mapview: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(15),
    alignItems: 'center',
    backgroundColor: COLORS.inputBackground,
    width: '100%',
    borderRadius: 10,
    paddingVertical: verticalScale(10),
    marginTop: verticalScale(20),
    borderColor: COLORS.barcolor,
    borderWidth: 1,
  },
  txt: {
    fontWeight: '600',
    marginHorizontal: verticalScale(20),
  },
  btnview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: horizontalScale(20),
    alignItems: 'center',
  },
});
export default styles;
