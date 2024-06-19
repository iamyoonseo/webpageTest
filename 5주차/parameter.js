// 1. 매개변수
function account(userId)
{
    var savedUser = '전윤서';
    if (userId == savedUser){
        console.log('반갑습니다. ' + userId + '님');
    }
    else{
        console.log('로그인 실패');
    }
}
account('전윤서');

// 2. 매개변수도 지역변수다

function plus(a, b)
{
    var result = 0;
    a = a + 1;
    b = b + 1;
    result = a + b;
    console.log('두 수의 합 : ' + (a+b));
}