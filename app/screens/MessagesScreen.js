import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import ListItem from "../components/ListItem/ListItem";
import Screen from "../components/Screen/Screen";
import ListItemSeparator from "./../components/ListItemSeparator";
import ListItemDelete from "./../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

const MessagesScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessages] = useState(initialMessages);

  const onDelete = (message) => {
    setMessages(messages.filter((m) => m.id != message.id));
  };

  const onPress = () => {
    console.log("");
  };

  const renderRightActions = () => {
    return ListItemDelete;
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={onPress}
            renderRightActions={() => (
              <ListItemDelete onDeletePress={() => onDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "T3",
              description: "D3",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
