import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

const AppCard = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
  },
});
export default AppCard;
