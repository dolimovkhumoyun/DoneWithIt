import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImagescreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.closeicon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  closeicon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    marginTop: 25,
  },
});

export default ViewImagescreen;
