import axios from 'axios';

const GetAllProductsPaginated = async (currentPage = 1) => {
  
    
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/products?page=${currentPage}`);
        console.log(response.data);
        // return response.data.data[0];
        // return response.data;

        return {
            "data": response.data.data[0],
            "paginationInfo": {
                "currentPage": response.data.meta.current_page,
                "perPage": response.data.meta.per_page,
                "total": response.data.meta.total,
            }
        };

    } catch (error) {
        console.error(error);
    }

}

export default GetAllProductsPaginated