import { Route, Routes } from "react-router-dom";
import UserRoutes from "./Routes/UserRoutes";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/*" element={<UserRoutes />} />
      </Routes>
    </Provider>
  );
}

export default App;
