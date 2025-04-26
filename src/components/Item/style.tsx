import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    width: '100%',
  },
  iconContainer: {
    flex: 2, // 20% of the width for the icon
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 6, // 60% of the width for the title and description
    justifyContent: 'center',
  },
  priceContainer: {
    flex: 2, // 20% of the width for the price
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    color: '#777',
    fontSize: 12,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
