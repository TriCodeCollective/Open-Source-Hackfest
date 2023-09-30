export const fetchBackend = async (endpoint, method = "GET", body = {}) => {
  const url = "http://localhost:5000" + endpoint;

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
