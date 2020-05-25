import React from "react";
import { View, Text } from "react-native";

import Screen from "./app/components/Screen/Screen";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppCard from "./app/components/AppCard/AppCard";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImagescreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  return <ListingsScreen />;
}
{
  /* <ListItem
  title="My title"
  subTitle="My subtitel"
  ImageComponent={<Icon name="email" />}
/>; */
}
