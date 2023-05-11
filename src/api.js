import axios from "axios";

const imagesSearch = async (userSearch) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID p0jSdQZmpTQJj2oqr4GDvrqyTlZgipJFUe8lPTafd4g'
        },
        params: {
            query: userSearch
        }
    }) 

    return response.data.results
}

export default imagesSearch