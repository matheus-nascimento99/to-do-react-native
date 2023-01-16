import { StatusBar, Text } from "react-native";
import Home from "./src/Screens/Home";

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#0D0D0D'} barStyle={"light-content"} />
      <Home />
    </>
  );
}

export default App;