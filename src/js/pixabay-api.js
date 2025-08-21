import axios from 'axios';

export function getImagesByQuery(query) {
  axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '51870132-66db1267a2a3823963ca5e362',
        q: `${query}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
}
