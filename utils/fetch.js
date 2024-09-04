import axios from "axios";


export default async function fetchApi(word, page = 1){
    const response = await axios('https://api.unsplash.com/search/photos', {
        params: {
            query: word ? word : 'perro',
            page: 1,
            per_page: 15
        },
        headers: {
            Authorization: 'Client-ID bw26x68WgVdPFyFt291hX5m6VAqfj00kGkvT61V_2Vs'
        }
    })

    return response
}