// 1. 매개변수의 기본값 설정
var userName = '이창헌'; // 전역변수
var userPW = '1111'; // 전역변수

function account(userId, userpw)
{
    console.log(userId);
    console.log(userpw);
    var savedName = '이창헌';
    var savedPW = '1111';

    if(userId == savedName)
    {
        if(userpw == savedPw)
        {
            console.log('반갑습니다. ' + userId + '님');
        }
    }
}
account(userName);


// 2. 매개변수의 기본값 설정 기능이 없는 경우
var userName = '이창헌'; // 전역변수
var userPW = '1111'; // 전역변수

function account(userId, userpw)
{
    console.log(userId);
    console.log(userpw);
    var savedName = '이창헌';
    var savedPW = '1111';

    if(userpw == undefined){
        userpw = '1111';
    }
    
    if(userId == savedName)
    {
        if(userpw == savedPw)
        {
            console.log('반갑습니다. ' + userId + '님');
        }
    }
}
account(userName);

// 2-1. || 논리연산자 사용하여 처리
var userName = '이창헌'; // 전역변수
var userPW = '1111'; // 전역변수

function account(userId, userpw)
{
    console.log(userId);
    console.log(userpw);
    var savedName = '이창헌';
    var savedPW = '1111';
    
    userpw = userpw || '1111';
    
    if(userId == savedName)
    {
        if(userpw == savedPw)
        {
            console.log('반갑습니다. ' + userId + '님');
        }
    }
}
account(userName);