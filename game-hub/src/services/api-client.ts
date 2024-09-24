import axios from "axios";

export default axios.create({
    baseURL: 'https://www.giantbomb.com/api/games/',
    params: {
        api_key: '9d02938d72c205aa3c8b9a01568fd78f41dd08d9', // Correct parameter name
        format: 'json', // Optional: You can specify the format here if required
    }
});
