import axios from "axios";

export const postRequest = async (url, settings) => {
    try {
        const res = await axios.post(url, settings);
        return res.data;
    } catch (err) {
        return err;
    }
};
