import axios from 'axios'
const KEY = 'AIzaSyD8geNZrFv2wnjEiICGfejYdPDh1YX7eM8'

export default axios.create({
    baseUrl: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part:'snippet',
        maxResults:5,
        key: KEY,
        type: 'video'
    }
});



