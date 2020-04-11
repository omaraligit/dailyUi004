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
      icon: 'truck',
      color: theme.primaryColor,
      number: '234234YTRGGH6AE7',
      msg: 'Out for Delevery Today',
    },
    {
      icon: 'check',
      color: theme.secoundaryColor,
      number: 'SDFHJ45IHUSDFJH',
      msg: 'Delivered 2 days ago',
    },
    {
      icon: 'check',
      color: theme.secoundaryColor,
      number: 'DFGETY34YRDRY5',
      msg: 'Delivered 3 days ago',
    },
    {
      icon: 'check',
      color: theme.secoundaryColor,
      number: 'DFGERT54634DFJH',
      msg: 'Delivered 4 days ago',
    },
    {
      icon: 'check',
      color: theme.secoundaryColor,
      number: '3456663IHUSDFJH',
      msg: 'Delivered 5 days ago',
    },
    {
      icon: 'check',
      color: theme.secoundaryColor,
      number: 'SDFHJ2345JH',
      msg: 'Delivered 26 days ago',
    },
    {
      icon: 'check',
      color: theme.secoundaryColor,
      number: 'SDFHJ4SDF5DFJH',
      msg: 'Delivered 31 days ago',
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
            <View style={styles.inputs}>
              <TextInput
                style={styles.inputsTextF}
                placeholder={'Enter a Traking Number'}
              />
              <TouchableOpacity>
                <Icon
                  style={styles.inputsTextIcon}
                  name="cog"
                  size={24}
                  color={theme.primaryColor}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.textMyP}>My Packages</Text>
        {this.myPackages.map((item, i) => {
          return (
            <View key={i} style={styles.mypackage}>
              <Icon
                name={item.icon}
                size={24}
                style={[
                  styles.mypackageLeftIcon,
                  {backgroundColor: item.color},
                ]}
              />
              <View style={styles.mypackageTexts}>
                <Text style={{fontSize: 20, fontFamily: 'MavenPro-Bold'}}>
                  #{item.number}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'MavenPro-Regular',
                    opacity: 0.4,
                  }}>
                  {item.msg}
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
    height: 240,
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
    borderColor: theme.borderColor,
    borderWidth: 2,
    marginBottom: 30,
  },
  mypackageTexts: {
    flex: 1,
    paddingLeft: 20,
  },
  mypackageLeftIcon: {
    padding: 14,
    borderRadius: 500,
    color: '#fff',
  },
  mypackageRightIcon: {
    padding: 14,
    borderRadius: 500,
    color: theme.primaryColor,
  },
});
