const nav = document.querySelector('nav');

// 첫 번째 방법
// 스크롤 이벤트가 발생했을 때

    // 현재 스크롤 위치를 가져온다.

    // 스크롤 위치를 바탕으로 active 클래스를 추가하거나 제거한다.

window.addEventListener('scroll', function(){
    console.log("scrolling");
    // scrollY : ie지원불가
    // pageYOffset : ie9이하 지원불가
    // documentElement.scrollTop : 크롬 지원불가
    // document.body.scrollTop : 크롬, 사파리, 오페라, 엣지에서 사용가능
    const top = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    console.log(top);
    /*
    if(top >= 50){
        nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }
    */
    // 간단한 if문은 삼항연산자를 사용하도록 하자! ex)단순히 클래스 추가삭제의 경우
    (top >= 50)
        ? nav.classList.add('active');
        : nav.classList.remove('active');
})

document.addEventListener('scroll', function(){

})

window.onscroll = function(){

}

// 특정 영역 안에서 일어나는 스크롤을 감지하고 싶다면
const selector = document.querySelector("#selector");
selector.addEventListener('scroll', function(){})