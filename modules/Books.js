
    export async function getBooks(url, query_string={}) {
    const _url = composeUrl(url, query_string);  
    const response = await fetch(_url);
    const books = await response.json()
    return books
}

function composeUrl(url, query_string) {
return `${url}${composeQueryString(query_string)}`;
}

 function composeQueryString(query_string) {
    let query_string_str = '?';
    for(let key in query_string) {
        query_string_str += `${key}=${query_string[key]}&`;
    }
    return query_string_str;
}


