import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialRightIconTextbox from "./components/MaterialRightIconTextbox";

function Index(props) {
  return (
    <View style={styles.container}>
      <MaterialRightIconTextbox
        style={styles.materialRightIconTextbox}
      ></MaterialRightIconTextbox>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 43
  },
  materialRightIconTextbox: {
    height: 43,
    width: 375
  }
});

export default Index;
