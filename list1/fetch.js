const ul = document.querySelector('ul');
const API = 'https://jsonplaceholder.typicode.com/posts';

/*
fetch(API)
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
            const li = `<li>
                            <h2>${item.title}</h2>
                            <p>${item.body}</p>
                        </li>`;
            ul.insertAdjacentHTML('beforeend', li);
            // insertAdjacentHTML(삽입할 위치, 무엇을 삽입할 것인가)
            // 삽입할 위치 -> beforebegin, afterbegin, beforeend, afterend
        })
    })

const fetchPosts = (url) => {
    return fetch(url);
}

fetchPosts(API);
*/

// Fetch : Refectoring
const checkStatusAndParse = res => {
    if(!res.ok) throw new Error(`Status Code Error : ${res.status}`)
    return res.json();
}

// 템플릿
// 통신 상태 처리
const printPosts = data => {
    data.forEach(item => {
        const li = `<li>
                        <h2>${item.title}</h2>
                        <p>${item.body}</p>
                    </li>`;
        ul.insertAdjacentHTML('beforeend', li);
    })
}

// HTTP 통신
const fetchPosts = (url) => {
    return fetch(url);
}

fetchPosts(API)
    .then(checkStatusAndParse)
    .then(printPosts)
    .catch(e => console.log(e))
// //Fetch : Refectoring




