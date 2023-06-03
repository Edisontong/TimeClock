import { View, Text, Button } from "react-native";

export function Days({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Daily hours and earnings</Text>
      <Button title="View Hours" onPress={() => navigation.navigate("Hours")} />
    </View>
  );
}
