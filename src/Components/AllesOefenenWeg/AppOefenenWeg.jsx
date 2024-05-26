import React, { useEffect, useState } from "react";
import Issue from "./Issue";
import Sidebar from "./Sidebar";
import useAllData from "./useAllData";

const urls = [
  "https://run.mocky.io/v3/d6155d63-938f-484c-8d87-6f918f126cd4?mocky-delay=1000ms",
  "https://run.mocky.io/v3/3ea256b9-fd6c-47ce-9a27-fa3567584967?mocky-delay=2000ms",
  "https://run.mocky.io/v3/c05e0cd6-d1d6-481d-a0f3-49ce02d4d99b?mocky-delay=3000ms",
];

const AppOefenenWeg = () => {
  const { sidebarData, issueData, commentsData } = useAllData(urls);
  const [resolvedPromises, setResolvedPromises] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const urls = ["https://test1.com", "https://test2.com"];

      const promises = urls.map((url) => fetch(url).then((res) => res.json()));

      const result = Promise.all(promises);

      if (result) setResolvedPromises(result);
    }
    fetchData();
  }, []);

  return (
    <>
      <div>{sidebarData ? sidebarData[0].name : "sidebar loading..."}</div>
      <div>{issueData ? issueData.author : "issue loading...."}</div>
      <div>{commentsData ? commentsData[0].comment : "comment loading..."}</div>
      {console.log(resolvedPromises)}
    </>
  );
};

export default AppOefenenWeg;
