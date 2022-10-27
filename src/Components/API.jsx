import axios from "axios";
const apiData = async () => {
  try {
    const res = await axios.get("https://reaactnode.herokuapp.com/api/home");
    return res.data;
  } catch (error) {}
};
export default apiData;