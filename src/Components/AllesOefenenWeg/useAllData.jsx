import React, { useEffect, useState } from "react";

const useAllData = (urls) => {
  const [sidebarData, setSideBarData] = useState(null);
  const [issueData, setIssueData] = useState(null);
  const [commentsData, setCommentsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const promises = await Promise.all(urls.map((url) => fetch(url)));

      const result = await Promise.all(promises.map((res) => res.json()));
      const [sidebarResult, issueResult, commentsResult] = result;

      setSideBarData(sidebarResult);
      setIssueData(issueResult);
      setCommentsData(commentsResult);
    };

    fetchData();
  }, []);

  //   return (
  //     <>
  //       <div>{sidebarData ? sidebarData[0].name : "sidebar loading..."}</div>
  //       <div>{issueData ? issueData.name : "issue loading...."}</div>
  //       <div>{commentsData ? commentsData[0].author : "comment loading..."}</div>
  //     </>
  //   );
  return { sidebarData, issueData, commentsData };
};

export default useAllData;
