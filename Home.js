import { View, Text, Button } from "react-native";

export function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Time Clock</Text>
      <Button title="View Weeks" onPress={() => navigation.navigate("Weeks")} />
    </View>
  );
}
