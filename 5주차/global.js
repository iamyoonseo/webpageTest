// 1. 전역변수
var savedUser = '전윤서';
function account()
{
    console.log('반갑습니다. ' + savedUser + '님');
}

account();
console.log('또 오셨네요. ' + savedUser + '님'); // ReferenceError: savedUser is not defined

// 2. 함수 내 전역변수 값 수정 가능
var savedUser = '전윤서';
function account()
{
    console.log('반갑습니다. ' + savedUser + '님');
    savedUser = '윤서';
}

account();
console.log('또 오셨네요. ' + savedUser + '님');

// 3. 동일이름 발생 시 지역변수 > 전역변수
var savedUser = '전윤서';
function account()
{
    var savedUser = '윤서';
    console.log('반갑습니다. ' + savedUser + '님');
}

account();
console.log('또 오셨네요. ' + savedUser + '님');


