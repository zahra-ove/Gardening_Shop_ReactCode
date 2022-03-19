import axios from 'axios';

const GetAllProducts = async () => {

    try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/products');
        console.log(response.data);
        return response.data.data[0];

    } catch (error) {
        console.error(error);
    }

}

export default GetAllProducts;