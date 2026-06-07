import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import { useThemeStore } from "./store/themeStore";
function App() {
  const dark =
    useThemeStore(
      (state) => state.dark
    );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add(
        "dark"
      );
    } else {
      document.documentElement.classList.remove(
        "dark"
      );
    }
  }, [dark]);

  return (
    <RouterProvider router={router} />
  );
}



export default App;