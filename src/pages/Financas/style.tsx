import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1e29',
    padding: 7
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
    color: "#FFFF"
  },
  monthText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  balanceBox: {
    width: '49%',
    backgroundColor: '#1b1e29',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
  iconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  balanceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  balanceValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  expenseValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  scrollContainer: {
    width: '100%',
    paddingBottom: 20,
  },
  scrollIntoContainer: {
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    paddingVertical: 15,
  },
  dateHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  itemDescription: {
    color: '#666',
    fontSize: 14,
  },
  itemRightContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemValue: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'red',
  },
  adicionarGasto: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#03A9F4",
    borderRadius: 30,
    elevation: 8,
  },
  iconsSection: {
    display: 'flex',
    flexDirection: 'row'
  }
});
