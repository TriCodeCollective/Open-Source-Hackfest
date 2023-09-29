export const fetchBackend = async (endpoint, method = "GET", body = {}) => {
  const url = REACT_APP_BACKEND_BASE_URL + endpoint;

  let response;
  if (method == "GET") {
    response = await fetch(url);
  } else if (method == "POST") {
    response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  }
};
