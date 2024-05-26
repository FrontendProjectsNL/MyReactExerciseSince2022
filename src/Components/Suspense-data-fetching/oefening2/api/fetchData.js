import wrapPromise from "./wrapPromise";

const fetchData = (url) => {
  let promise;
  try {
    promise = fetch(url).then((res) => res.json());
  } catch (err) {
    throw new Error("something went wrong", err);
  }

  return wrapPromise(promise);
};

export default fetchData;
