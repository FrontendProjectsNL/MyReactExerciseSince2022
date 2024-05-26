import wrapPromiseOS from "./wrapPromiseOS";

function fetchDataOS(url) {
  const promise = fetch(url).then((res) => res.json());

  return wrapPromiseOS(promise);
}

export default fetchDataOS;
