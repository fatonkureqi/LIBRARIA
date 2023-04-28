 export function Pagination(total, per_page) {
    const pages = Math.ceil(total/per_page);
    let pages_html = '';
    Array.from(Array(pages).keys()).map(page => pages_html += `<a href="?page=${page+1}" class"me-1">${page+1}</a>`);
    return pages_html

    }