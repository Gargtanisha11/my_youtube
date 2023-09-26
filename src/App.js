import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import myYoutubeStore from "./utils/redux/myYoutubeStore";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoPage from "./components/VideoPage";
import MainContainer from "./components/MainContainer";
 
 const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path: "/watch",
        element: <VideoPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={myYoutubeStore}>
      <div className="App ">
        <Header />
        <RouterProvider router={appRoute}/>
       
      </div>
    </Provider>
  );
}



export default App;
