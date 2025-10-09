import { StyleSheet } from 'react-native';
import COLORS from '../../utils/Colors';
import { horizontalScale, verticalScale } from '../../utils/Metrics';

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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(50),
    marginBottom: verticalScale(4),
    marginTop: 6,
    
  },
  filterChip: {
    backgroundColor: COLORS.inputBackground,
    borderRadius: 13,
    paddingHorizontal: 17,
    paddingVertical:verticalScale(18),
    marginRight: 10,
    marginBottom: verticalScale(10),
    marginTop:verticalScale(20)
  },
  filterActive: {
    backgroundColor: COLORS.barcolor,
  },
  filterText: {
    color: COLORS.grey,
    fontWeight: '600',
    fontSize: 13,
    textTransform: 'capitalize',
  },
  filterTextActive: {
    color: COLORS.White,
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
    marginBottom: verticalScale(10),
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
  cardTitle: {
    color: COLORS.appColor,
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 1,
  },
  cardType: {
    fontSize: 13,
    fontWeight: '400',
    color: COLORS.grey,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  starIcon: {
    marginRight: 1,
  },
  ratingNum: {
    marginLeft: 4,
    color: COLORS.appColor,
    fontWeight: '600',
    fontSize: 12,
  },
  timeTxt: {
    fontSize: 12,
    color: COLORS.grey,
    marginTop: 2,
    fontWeight: '500',
  },
  backbtn: {
    backgroundColor: COLORS.barcolor,
    width: "12%",
    borderRadius: 20,
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(20),
    alignItems: "center",
    padding: 10
  },
  mapview: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: horizontalScale(20),
    alignItems: "center",
    backgroundColor: COLORS.inputBackground,
    width: "100%",
    borderRadius: 10,
    paddingVertical: verticalScale(15),
    marginTop: verticalScale(20),
    borderColor: COLORS.barcolor,
    borderWidth: 1
  },
  txt: {
    fontSize: 18,
    color: COLORS.barcolor,
    fontWeight: "600",
    marginHorizontal: verticalScale(20)
  },
  btnview: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: horizontalScale(20),
    alignItems: "center",

  }
});
export default styles;
