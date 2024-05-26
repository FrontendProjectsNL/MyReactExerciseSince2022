function wrapPromiseOS(promise) {
  let status = "pending";
  let response;

  const suspenser = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspenser;
      case "error":
        throw suspenser;
      default:
        return response;
    }
  };

  return { read };
}
export default wrapPromiseOS;
