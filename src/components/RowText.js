import { Text, View } from 'react-native';
import React from 'react';

const RowText = ({
  messageOne,
  messageTwo,
  containerStyle,
  messageOneStyle,
  messageTwoStyle
}) => {
  return (
    <View style={containerStyle}>
      <Text style={messageOneStyle}>{messageOne}</Text>
      <Text style={messageTwoStyle}>{messageTwo}</Text>
    </View>
  );
};

export default RowText;
