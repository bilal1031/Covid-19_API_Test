import React from "react";
import { View, StyleSheet, Text, TouchableNativeFeedback } from "react-native";
import InformationCard from "./InformationCard";

function DataCard(props) {
  return (
    <View style={styles.maincontainer}>
      <TouchableNativeFeedback>
        <View style={styles.touchcontainer}>
          <View style={styles.titlediv}>
            <Text style={styles.title}>{props.country}</Text>
          </View>
          <View style={styles.datadiv}>
            <InformationCard
              title="Confirmed Cases"
              numeric={props.confirmed}
              color="#7fe5d8"
            />
            <InformationCard
              title="Deaths"
              numeric={props.deaths}
              color="tomato"
            />
            <InformationCard
              title="Recovered"
              numeric={props.recovered}
              color="#47c444"
            />
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  maincontainer: {
    width: 320,
    height: 160,
    backgroundColor: "white",
    elevation: 3,
    borderRadius: 10,
    overflow: "hidden",
    margin: 10,
  },
  touchcontainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  titlediv: {
    flex: 2,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: "black",
    borderBottomWidth: 0.1,
    borderRadius: 0.1,
  },
  datadiv: {
    flex: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
  },
  title: { fontSize: 24, fontWeight: "bold" },
});
export default DataCard;
