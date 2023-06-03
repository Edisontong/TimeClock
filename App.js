import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Weeks } from "./Weeks";
import { Days } from "./Days";
import { Wages } from "./Wages";
import { Home } from "./Home";
import { Hours } from "./Hours";

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Wages" component={Wages} />
        <Stack.Screen name="Days" component={Days} />
        <Stack.Screen name="Weeks" component={Weeks} />
        <Stack.Screen name="Hours" component={Hours} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
