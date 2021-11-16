import axios from 'axios'

const url = 'http://localhost:3001/api/summoners'

const getMmr = (name) => {
    const request = axios.get(`${url}/${name}`)
    return request
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return
        })

}

export default {
    getMmr
}
