import React, { useEffect, useState } from "react";

const PromiseAll = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchData = async () => {
      // const result = (
      //   await Promise.all([
      //     fetch(
      //       "https://run.mocky.io/v3/3ea256b9-fd6c-47ce-9a27-fa3567584967?mocky-delay=2000ms"
      //     ),
      //     fetch(
      //       "https://run.mocky.io/v3/d6155d63-938f-484c-8d87-6f918f126cd4?mocky-delay=1000ms"
      //     ),
      //     fetch(
      //       "https://run.mocky.io/v3/c05e0cd6-d1d6-481d-a0f3-49ce02d4d99b?mocky-delay=3000ms"
      //     ),
      //   ])
      // ).map((res) => res.json());

      // const [fetch1, fetch2, fetch3] = await Promise.all(result);

      try {
        const urls = [
          "https://run.mocky.io/v3/c05e0cd6-d1d6-481d-a0f3-49ce02d4d99b?mocky-delay=3000ms",
          "https://run.mocky.io/v3/3ea256b9-fd6c-47ce-9a27-fa3567584967?mocky-delay=2000ms",
        ];

        const promises = urls.map((url) =>
          fetch(url).then((response) => response.json())
        );

        console.log("De value van const promises is: ", promises);

        const results = await Promise.all(promises);
        console.log("++++++++ results is: ", results);

        const [result1, result2] = results;

        const testPromise = await Promise.all([
          fetch(
            "https://run.mocky.io/v3/c05e0cd6-d1d6-481d-a0f3-49ce02d4d99b?mocky-delay=3000ms"
          ).then((res) => res.json()),

          fetch(
            "https://run.mocky.io/v3/3ea256b9-fd6c-47ce-9a27-fa3567584967?mocky-delay=2000ms"
          ).then((res) => res.json()),
        ]);
        console.log("++++++++ testPromise is: ", testPromise);

        setData1(result1);
        setData2(result2);
      } catch (err) {
        // throw new Error("Error fetching data: ", err);
        console.log(
          "========================Cannot fetch data========================"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data1?.map((item) => (
            <li key={item.id}>{item.comment}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PromiseAll;
