import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer C322tqNAEWwCDcR2z4NkC7dr1YzEf_pWCzW0b_3zHD-tGFm8dDx_Z-qe6Ol3rLS5gXBfZ-Wh4svHjjbyOac8k3GOUUI1Z9ug1IcfvfIivpTLz3uTZIOZCljSL9beXnYx",
  },
});
