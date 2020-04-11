import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import theme from '../theme/mainTheme';
import Icon from 'react-native-vector-icons/FontAwesome5';
const w = Dimensions.get('window').width;
export default class Home extends React.Component {
  myPackages = [
    {
      icon: 'clock',
      color: theme.actionColor1,
      number: 'Shipping History',
      msg: 'Out for Delevery Today',
    },
    {
      icon: 'box',
      color: theme.actionColor2,
      number: 'Shipe a new Package',
      msg: 'Delivered 2 days ago',
    },
    {
      icon: 'check',
      color: theme.actionColor3,
      number: 'Get a Quote',
      msg: 'Delivered 3 days ago',
    },
  ];

  render() {
    return (
      <ScrollView bounces={false} style={{backgroundColor: '#fff'}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.menu}>
              <Icon name="bars" size={28} color="#fff" />
              <Icon name="ups" size={60} color="#fff" />
              <Icon name="cog" size={28} color="#fff" />
            </View>
          </View>
        </View>
        <Text style={styles.textMyP}>My Services</Text>
        {this.myPackages.map((item, i) => {
          return (
            <View key={i} style={[styles.mypackage,{backgroundColor: item.color}]}>
              <Icon
                name={item.icon}
                size={24}
                style={styles.mypackageLeftIcon}
              />
              <View style={styles.mypackageTexts}>
                <Text style={{fontSize: 25,color: '#fff', fontFamily: 'MavenPro-Bold'}}>
                  {item.number}
                </Text>
              </View>
              <Icon
                name="angle-right"
                size={24}
                style={styles.mypackageRightIcon}
              />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 130,
    backgroundColor: theme.primaryColor,
  },
  menu: {
    marginTop: 30,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputs: {
    marginTop: 50,
    marginHorizontal: 30,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 20,
  },
  inputsTextF: {
    fontFamily: 'MavenPro-Regular',
    paddingLeft: 20,
    flex: 1,
    fontSize: 20,
  },
  inputsTextIcon: {
    paddingHorizontal: 18,
    paddingVertical: 18,
  },
  textMyP: {
    fontFamily: 'MavenPro-Bold',
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 30,
    fontSize: 18,
    opacity: 0.7,
  },
  mypackage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 14,
    marginBottom: 20,
    paddingVertical: 40,
  },
  mypackageTexts: {
    flex: 1,
    paddingLeft: 20,
  },
  mypackageLeftIcon: {
    padding: 14,
    color: '#fff',
  },
  mypackageRightIcon: {
    padding: 14,
    color: '#fff',
  },
});
