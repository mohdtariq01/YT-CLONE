const base_url = 'https://youtube-v31.p.rapidapi.com/';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1cacde308fmsh51530d9b1f4230dp1083b0jsn8a8655591289',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchDatafromAPI = async (query) => {
    return (
        fetch(`${base_url}search?q=${query}&part=snippet%2Cid&maxResults=50`, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json()
            })
            .catch((error) => { console.warn(error) })
    )
}

export const searchVideoDetails = async (id) =>{
    return(
        fetch(`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`,options)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP error! Status: ${res.status}`)
            }
            return res.json()
        })
        .catch((error)=>{ console.warn(error) })
    )
}