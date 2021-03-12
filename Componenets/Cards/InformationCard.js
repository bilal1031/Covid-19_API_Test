import React from "react";
import { View, StyleSheet, Text } from "react-native";

function InformationCard(props) {
  return (
    <View style={[styles.maincontainer, { backgroundColor: props.color }]}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
        }}
      >
        {props.title}
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginTop: 5,
          color: "white",
          fontWeight: "800",
          fontSize: 18,
        }}
      >
        {props.numeric}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  maincontainer: {
    width: 90,
    height: 90,
    borderRadius: 20,
    padding: 5,
    alignContent: "center",
    justifyContent: "space-between",
    margin: 5,
    paddingBottom: 15,
  },
});
export default InformationCard;
