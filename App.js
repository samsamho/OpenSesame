import "react-native-gesture-handler";

import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./pages/HomeScreen";
import UploadFileScreen from "./pages/UploadFileScreen";
import FilesListingScreen from "./pages/FilesListingScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: "orange", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="UploadFileScreen"
          component={UploadFileScreen}
          options={{ title: "Upload File" }}
        />
        <Stack.Screen
          name="FilesListingScreen"
          component={FilesListingScreen}
          options={{ title: "Uploaded Files" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
