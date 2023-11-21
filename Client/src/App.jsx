import { Provider } from "react-redux";
import { store } from "./context/store";
import "./App.css";
import MainSection from "./screen/MainSection";
import { MantineProvider } from "@mantine/core";

const App = () => {
  return (
    <MantineProvider>
      <Provider store={store}>
        <MainSection />
      </Provider>
    </MantineProvider>
  );
};

export default App;
