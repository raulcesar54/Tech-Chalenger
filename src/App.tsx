import { Provider } from "react-redux";
import { Toaster } from "sonner";
import "./App.css";
import { ShowFormProvider } from "./hooks/useShowForm";
import { store } from "./redux/store";
import { Router } from "./routes";
function App() {
  return (
    <Provider store={store}>
      <Toaster />
      <ShowFormProvider>
        <Router />
      </ShowFormProvider>
    </Provider>
  );
}

export default App;
