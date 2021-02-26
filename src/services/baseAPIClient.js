import request from "Utilities/axios";

const BASE_URL = 'https://api.github.com';
// for get request has param
const serialize = function(obj) {
    let str = [];
    for (const p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]))
        }
    return "?" + str.join("&");
}

export const simpleGetRequest = async (url, searchParam) => {
    let urlObj = new URL(`${BASE_URL}/${url}`);

    if (searchParam) {
        urlObj.search = serialize(searchParam);
    }
    const response = await request(urlObj.toString(), {
        method: 'get'
    })

    if (response.status === 200) {
        return response.data;
    }
    return null
};
