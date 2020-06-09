import React from "react";
import { View, Text, StyleSheet, ImagePropTypes } from "react-native";

const ResultsList = (props) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultsList;
