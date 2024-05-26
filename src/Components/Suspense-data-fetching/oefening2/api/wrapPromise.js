const wrapPromise = (promise) => {
  let status = "pending";
  let response;

  const suspenser = promise
    .then((data) => {
      response = data;
      status = "success";
    })
    .catch((err) => {
      response = err;
      status = "error";
    });

  const read = () => {
    switch (status) {
      case "pending":
        throw suspenser;
      case "error":
        return response;
      default:
        return response;
    }
  };

  return { read };
};
export default wrapPromise;
