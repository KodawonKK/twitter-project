// App.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/Home";
import Profile from "./routes/profile";
import Login from "./routes/Login";
import CreateAccount from "./routes/CreateAccount";
import { createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";
import { auth } from "./firebase"; // firebase.tsx에서 auth를 가져옴
import { onAuthStateChanged } from "firebase/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/create-account",
        element: <CreateAccount />
      }
    ]
  }
]);

const GlobalStyles = createGlobalStyle`
  body {
    background-color:black;
    color:white;
  }
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const init = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in", user);
      } else {
        console.log("User is not logged in");
      }
      setTimeout(() => setIsLoading(false), 2000);
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
