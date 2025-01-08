import axios from 'axios';


export const getApi = async (skip) => {
    try {
        const response = await axios.get(`https://dummyjson.com/products?limits=10&skip=${skip}`);
        return response.data.products
    } catch (error) {
        console.error(error);
    }
}


