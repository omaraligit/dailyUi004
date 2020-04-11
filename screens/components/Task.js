import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Task extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <View>
          <Text
            style={[
              styles.textminCARD,
              {color: this.props.color, backgroundColor: this.props.bgcolor},
            ]}>
            Breakfast
          </Text>
        </View>
        <View style={styles.rightSidCard}>
          <Text style={styles.rightSidCardtext}>Green Salad</Text>
          <Text style={styles.rightSidCardsubtext}>197/400 Kcal</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    padding: 20,
    paddingHorizontal: 20,
    marginVertical: 10,
    marginHorizontal: 30,
    borderColor: '#F2F2F2',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textminCARD: {
    borderRadius: 4,
    color: 'black',
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F2F2F2',
  },
  rightSidCard: {
    alignItems: 'flex-end',
  },
  rightSidCardtext: {
      fontSize: 20,
      fontWeight: 'bold'
  },
  rightSidCardsubtext: {
    fontSize: 14,
    color: 'gray',
    opacity: .7
},
});
