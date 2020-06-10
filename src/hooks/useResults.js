import { useEffect, useState } from "react";
import yelp from "../API/yelp";

export default () => {
  const [results, setResults] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "manhattan",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong, Please try again.");
    }
  };
  //the empty array that was passed as a second argument will make searchApi() get called only once
  useEffect(() => {
    searchApi("food");
  }, []);
  return [searchApi, results, errorMessage];
};
