// 1. 지역변수
function account()
{
    var savedUser = '전윤서';
    console.log('반갑습니다. ' + savedUser + '님');
}
account();
console.log('또 오셨네요. ' + savedUser + '님'); // ReferenceError: savedUser is not defined

// 2. 지역변수의 생명주기역 변수 기본 코드

function naver()
{
    console.log('naver 함수 진입');
    var savedUser = '전윤서';
    google();
    console.log('naver 함수 탈출');
}

function google()
{
    console.log('google 함수 진입');
    var savedUser = '전윤서';
    console.log('google 함수 탈출');
}

naver();