import axios from "axios";

export default axios.create({
    // Sends all of the cookies
    withCredentials: true,
});