import axios from 'axios';

export const getApi = async () => {
    return await axios.get('https://www.freetestapi.com/api/v1/movies').then(res => res.data)
}



export const getSingleCard = async (id) => {
    const res = await axios.get(`https://www.freetestapi.com/api/v1/movies/${id}`).then(res => res.data)
    return res
}
