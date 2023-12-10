import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://cdn.contentful.com/spaces/rowzxr2uo3i9/environments/master/",
  params: {
    access_token: "Ez1MZsz_gdoM_lDVVIUATf6JE1WQt9jrr-3HCnNouwM",
  },
});

export default axiosInstance;
