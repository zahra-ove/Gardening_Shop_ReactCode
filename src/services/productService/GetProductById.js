import axios from 'axios';

const GetProductById = async (id) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/products/${id}`);
        console.log(response.data.data);
        return response.data.data;

    } catch (error) {
        console.error(error);
    }
}

export default GetProductById;