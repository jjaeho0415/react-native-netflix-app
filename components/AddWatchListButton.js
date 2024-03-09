import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { Pressable, Text, View, StyleSheet } from "react-native";

const AddWatchListButton = () => {
  return (
    <Pressable>
      <View style={styles.playButton}>
        <Icon name='plus' size={24} color='#FCFFFF' />
        <Text style={styles.buttonText}>Add watch</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  playButton: {
    backgroundColor: "#171717",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  buttonText: {
    color: "#FCFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AddWatchListButton;
