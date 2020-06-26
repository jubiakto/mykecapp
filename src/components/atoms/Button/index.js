import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Button = ({type, title}) => {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.text(type)}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? '#FFFFFF' : '#0BCAD4',
    borderRadius: 10,
    paddingVertical: 10,
  }),
  text: type => ({
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Nunito-SemiBold',
    color: type === 'secondary' ? '#112340' : '#FFFFFF',
    textAlign: 'center',
  }),
});
