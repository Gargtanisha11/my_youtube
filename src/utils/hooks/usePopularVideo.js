import { useEffect, useState } from "react";

const usePopularVideo = (pathOfPopVideoList) => {
  const [popVideoList, setPopVideoList] = useState([]);

  useEffect(() => {
  //  fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(pathOfPopVideoList);
    const json = await data.json();

    setPopVideoList(json.items);
  };

  return popVideoList;
};
export default usePopularVideo;
