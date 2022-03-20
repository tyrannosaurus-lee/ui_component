const ul = document.querySelector('ul');
const API = 'https://jsonplaceholder.typicode.com/posts';


axios.get(API)
    // api에 관련한 것은 첫번째 then에 다 들어있다.
    // fetch와는 달리 json메서드를 사용할 일이 없다.
    .then(res => {
        const {data} = res;
        data.forEach(item => {
            const li = `<li>
                            <h2>${item.title}</h2>
                            <p>${item.body}</p>
                        </li>`;
            ul.insertAdjacentHTML('beforeend', li);
        })
    })
    .catch(e => console.error(e));


// axios refactoring
// 화면에 리스트를 뿌려줄때 사용되는 리스트 템플릿
/*
const printPosts = res => {
    const {data} = res;
    data.forEach(item => {
        const li = `<li>
                        <h2>${item.title}</h2>
                        <p>${item.body}</p>
                    </li>`;
        ul.insertAdjacentHTML('beforeend', li);
    })
}
*/

// HTTP 통신
/*
const fetchPosts = (url) => {
    return axios.get(url);
}

fetchPosts(API)
    .then(printPosts)
    .catch(e => console.log(e))
 */
// //axios refactoring