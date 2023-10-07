import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import myYoutubeStore from "./utils/redux/myYoutubeStore";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoPage from "./components/VideoPage";
import MainContainer from "./components/MainContainer";
import SearchedVideoPage from "./components/SearchedVideoPage";
import VideoComments from "./components/VideoComments";
import VideoContainer from "./components/VideoContainer";

export const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContainer />,
            children: [
              {
                path: "/",
                element: <VideoContainer />,
              },
              {
                path: "/results",
                element: <SearchedVideoPage />,
              },
            ],
          },
          
        ],
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
      <div className="App " >
        <Header />
        <Outlet/>
      </div>
    </Provider>
  );
}

export default App;
