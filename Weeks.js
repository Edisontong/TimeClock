import React from "react";
import { Button, View, Text } from "react-native";

export function Weeks({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Weekly hours and earnings</Text>
      <Button title="View Days" onPress={() => navigation.navigate("Days")} />
    </View>
  );
}
