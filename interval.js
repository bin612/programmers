function solution(x, n) {
    var answer = [];

        //n개를 지나는 리스트
       for(let i = 1; i < n+1; i++){
        //push() 메소드로 배열에 추가
        //i번 만큼 x를 곱해준다.
        console.log(answer.push(i * x));

    }
    return answer;
}
