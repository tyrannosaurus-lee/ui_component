const ul = document.querySelector('ul');
const API = 'https://jsonplaceholder.typicode.com/posts';

// axios refactoring
// 화면에 리스트를 뿌려줄때 사용되는 리스트 템플릿
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

// HTTP 통신
const fetchPosts = async () => {
    return await axios.get(API);
}

const render = async (callApi, callTemplate) => {
    const res = await callApi();
    callTemplate(res);
}

(async () => {
    try {
        await render(fetchPosts, printPosts);
    } catch (e){
        console.log(e);
    }
})();
// //axios refactoring