// Import stylesheets
import "./style.css";
// details를 쓰면 클릭한 대상에 대해서는 더 이상 고민 안해도 됨
const items = document.querySelectorAll('details');

document.body.addEventListener('click', function(e){
    // summary와p에 해당하는 것이 현재 클릭한 대상의 details가 아니라 details의 하위에 있는 summary와 p에서 클릭이 발생
    // summary와 p가 아닐경우 다 지워줘라
    if(e.target.nodeName !== 'P' && e.target.nodeName !== 'SUMMARY'){
        items.forEach(function(item){
            items.removeAttribute('open');
        })
    }


    // 상위 element가 현재 클릭한 대상의 details라는 태그
    items.forEach(function(item){
        // 클릭한 대상이 아닌 나머지 item들에 대해 조건이 형성됨
        if(item !== e.target.parentElement){
            item.removeAttribute('open');
        }
    })
})
