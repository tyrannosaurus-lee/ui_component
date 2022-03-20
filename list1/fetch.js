const ul = document.querySelector('ul');
const API = 'https://jsonplaceholder.typicode.com/posts';

/*
// step 1
// fetch함수는 라이브러리가 아닌 브라우저가 갖고 있는 함수
// 그래서 ajax라든지 axios와 같은 외부 라이브러리 없이 http통신이 가능
// ie 지원X
// fetch는 promise타입의 객체로 반환이 됨 : 성공시reserve 실패시reject
fetch(API)
    // 보통의 rest API의 경우 json형태로 응답을 하게됨
    // .then(res => console.log(res))

    // 따라서 json형태로 변경을 해줘야함.
    // 그래야 그 다음에 나오는 then을 사용해서 나오는 결과값에서 실제 데이터정보를 확인할 수 있음
    // json메서드를 사용하면 json포맷의 내용들을 javascript의 객체 형태로 변환시켜줄 수 있음
    // 따라서 fetch를 사용하면 json메서드는 중간단계에 들어갈수밖에 없음
    .then(res => res.json())
    .then(data => console.log(data))
    // catch : 통신이 정상적으로 진행되지 않았을 경우에 실행되는 구문
    .catch(e => console.error(e));

*/

/*
// step 2
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

// step 3
// 유지보수 차원에서 코드를 역할별로 분할하여 관리하는것이 효율적이다.
// Fetch : Refectoring
// 통신상태 정상적으로 진행됐는지 결과값을 이 함수 안에서 따짐
const checkStatusAndParse = res => {
    if(!res.ok) throw new Error(`Status Code Error : ${res.status}`)
    return res.json();
}

// 템플릿
// 통신 상태 처리 : 가져온 데이터를 화면에 뿌려주는 역할
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
// 데이터통신을 위한 함수의 역할을 수행
const fetchPosts = (url) => {
    return fetch(url);
}

fetchPosts(API)
    .then(checkStatusAndParse)
    .then(printPosts)
    .catch(e => console.log(e))
// //Fetch : Refectoring



