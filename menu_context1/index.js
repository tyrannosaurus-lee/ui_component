// 1. 동작은 되지만 감시대상이 너무 많음
/*
const items = document.querySelectorAll('.item');
items.forEach(function(item){
    item.addEventListener('click', function(e){
        item.classList.toggle('open');
        items.forEach(function(elem){
            if(elem !== item) elem.classList.remove('open');
        })
    })
});
*/



// 2. 이벤트리스너 최소화화기
/*
const wrapper = document.querySelector('.wrapper');
const items = document.querySelectorAll('.item');
// 클릭이벤트가 버블링이 이루어진다.
// wrapper가 상위dom이고 item은 하위dom
// 하위dom에서 click event가 발생하면 그 이벤트를 상위로 전파함
// 전파하다보니 wrapper로 전달됨.
// wrapper에는 클릭이벤트에 대한 리스터가 등록되어 있기 때문에 실행됨
// 실행은 됐지만 실제 클릭이 발생한 대상(event target)은 아이템으로 잡혀있기 때문에
// target elem이 item인 경우에 걸러짐
wrapper.addEventListener('click', function(e){
    const targetElem = e.target;
    console.dir(e);
    // 버블링에 의해 wrappper의 상위dom인 body.addEventListener까지 영향을 미치므로 stopProgpagation을 준다.
    e.stopPropagation();
    if(!targetElem.classList.contains('item')) return;
    targetElem.classList.toggle('open');
    items.forEach(function(elem){
        if(elem !== targetElem) elem.classList.remove('open');
    })
})

// 팝 오버 컴포넌트
document.body.addEventListener('click', function(e){
    // context 열려있는 상태에서는 동작을 하면 안됨
    if(e.target.classList.contains('context')) return;
    // 그 외에는 items의 open 클래스를 지워준다
    // 목록 이외의 어떤 부분을 선택하면 item에 있는 open 클래스를 전부 지워준다.
    items.forEach(function(elem){
        elem.classList.remove('open');
    })
})
*/



// 3. 클릭 이벤트 하나로 줄이기
const wrapper = document.querySelector('.wrapper');
const items = document.querySelectorAll('.item');
// body하나에만 클릭이벤트를 주고 context,item,그 외에 해당하는지에 따라서 처리를 다르게 한다.
// 장점 : 이벤트리스너가 줄어듦
// 단점 : (클릭이벤트 하나에 대하여)조건문들이 많아짐
document.body.addEventListener('click', function(e){
    const targetClassList = e.target.classList;
    // targetClassList가 context이면 아무동작도 하지 않는다.
    if(targetClassList.contains('context')) return;
    if(targetClassList.contains('item')) {
        targetClassList.toggle('open');
        items.forEach(function(elem){
            if(elem !== e.target) elem.classList.remove('open');
        });
        return;
    }
    items.forEach(function(elem) {
        elem.classList.remove('open');
    });
})