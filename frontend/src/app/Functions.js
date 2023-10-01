export const fetchBackend = async (endpoint, method = "GET", body = {}) => {
  const url = "http://localhost:5000" + endpoint;
  
  let response;
  if (method == "GET") {
    response = await fetch(url);
  } else if (method == "POST") {
    console.log("JSON.stringify(body): ", JSON.stringify(body));
    response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    try {
      const json = await response.json();
      return json;
    } catch (error) {
      return response;
    }
  }
};
