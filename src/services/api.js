const BASE_URL = "https://pixabay.com/api/";
const KEY = "29316725-1ab556a3c68a6bc4eeec3eacb";

export const getImages = (values, page) => {
    return fetch(`${BASE_URL}?key=${KEY}&q=${values}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.json());
};