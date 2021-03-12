import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, StatusBar } from "react-native";
import DataCard from "./Componenets/Cards/DataCard";
import retriveData from "./Hooks/retriveData";
import ActivityIndicator from "./Componenets/ActivityIndicator";

export default function App() {
  const { data, error, loadData, visible } = retriveData();

  useEffect(() => {
    loadData("/summary");
  }, []);
  let cdata = data.Countries;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#3931ac" />
      {error && <Text>Error Loading</Text>}
      <ActivityIndicator
        visible={visible}
        source={require("./assets/Animations/loading.json")}
      />
      {!visible && (
        <>
          <View style={styles.titlediv}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 24,
                marginLeft: 5,
              }}
            >
              Countries:
            </Text>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cdata}
            keyExtractor={(key) => key.ID.toString()}
            renderItem={({ item }) => (
              <DataCard
                country={item.Country}
                confirmed={item.TotalConfirmed}
                deaths={item.TotalDeaths}
                recovered={item.TotalRecovered}
              />
            )}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  titlediv: {
    padding: 15,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    width: "100%",
    //elevation: 5,
    borderBottomWidth: 1,
    borderColor: "#3931ac",
  },
});
