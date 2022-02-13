// 필요한 Dom Selector
const $stars = document.querySelector('.stars')
const $score = document.querySelector('.score')
const $reset = document.querySelector('.reset')

// 별의 갯수 = Score
const MAX_SCORE = 5

// 별의 현재 점수 상태
const state = {
  score: 0
}

// 별의 갯수만큼 별 DOM 추가 (별은 empty, half, full 클래스를 가질수 있음)
Array(MAX_SCORE)
  .fill()
  .forEach(() => {
    const star = document.createElement('div')
    star.className = 'star empty'
    $stars.appendChild(star)
  })

// score을 받아서 별의 현재 점수 표시를 업데이트 해주는 함수
const setDisplayScore = (score) => {
  // $stars.children는 노드 리스트를 가져오기 때문에 spread 문법으로 풀어서 배열로 바꾼다.
  const startList = [...$stars.children]
  // 하나씩 돌면서(forEach) 첫번째 인자로 DOM이 넘어오고(star) 두번째 인자로 index가 넘어온다.
  startList.forEach((star, i) => {
    // ex) 현재 score가 2점이면 index는 1보다 작아야 함
    // 현재 score보다 낮은 index : 반만 차있거나 꽉 차있거나
    if(score > i){
      if (score - i === 0.5){
        star.className = 'star half'
      }else{
        star.className = 'star full'
      }
    }else{
      // 점수 외의 별은 비어야 한다
      star.className = 'star empty'
    }
  })
}

const setScore = (score) => {
  // 현재 점수상태값 업데이트해줌
  setDisplayScore(score)
  // const state의 score값 업데이트
  state.score = score
  $score.textContent = score
}

// 이벤트를 받아서 어떤 값들을 계산해서 지금 현재 누른 값이 score가 몇점인지를 계산해주는 함수
const calculateScore = (e) => {
  // DOM.getBoundingClientRect() : 위치 구하기
  const {width, left} = e.currentTarget.getBoundingClientRect()
  // clientX : 현재 viewport 안에서 마우스로 누를 위치가 어디인지를 나타내는 event property
  // e.clientX - left : stars의 왼쪽끝부터 마우스를 누른 위치까지 좌표
  const x = e.clientX - left
  // 별 반개의 width
  const scale = width / MAX_SCORE / 2
  // 현재 마우스를 누른 위치의 점수
  const score = Math.floor(x / scale + 1) / 2
  return score
}

$stars.addEventListener('click', (e) => {
  setScore(calculateScore(e))
})

// 마우스오버했을 때 몇점인지 표시만 해주는 작업
// 실제 별의 상태는 업데이트해주지 않고 별의 표시값만 업데이트해줌
$stars.addEventListener('mousemove', (e) => {
  const score = calculateScore(e)
  setDisplayScore(score)
})

// 별영역을 마우스가 빠져나갔을때 다시 원래 별이 가지고 있던 점수값으로 되돌려줌
$stars.addEventListener('mouseleave', (e) => {
  setDisplayScore(state.score)
})

// 리셋버튼
$reset.addEventListener('click', () => {
  setScore(0)
})