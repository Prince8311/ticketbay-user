import { BrowserRouter } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import Routers from "./Routers/Router";
import { UserProvider } from "./Context/PageContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ToastContainer
            toastClassName="custom_toast"
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
          <Routers />
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
