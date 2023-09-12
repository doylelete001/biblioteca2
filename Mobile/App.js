
import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import MyRoutes from "./routes";

export default function App() {
  return (
    <>
      <NavBar />
      <MyRoutes />
    </>
  );
}
