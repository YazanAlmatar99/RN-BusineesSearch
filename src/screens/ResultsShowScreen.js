import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import yelp from "../API/yelp";

const ResultsShowScreen = (props) => {
  const [result, setResults] = useState(null);
  const id = props.navigation.getParam("id");
  const getResult = async (id) => {
    try {
      const response = await yelp.get(`${id}`);
      setResults(response.data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.titleStyle}>{result.name}</Text>
      <FlatList
        horizontal
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
    marginLeft: 10,
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
});
export default ResultsShowScreen;
