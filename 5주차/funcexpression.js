// 1. 함수 표현식
var nickName = function()
{
    console.log('이예쁜');
};

nickName();

// 1-1.
var nickName = function()
{
    console.log('이예쁜');
};

nickName();

nickName = function()
{
    console.log('전윤서');
};
nickName();

// 2. 함수 선언식과 함수 표현식 문법

//함수 표현식
function nickName()
{
    console.log('이예쁜');
}

//함수 표현식
var nickName = function()
{

};

// 3. 함수를 변수에 복사

var nickName = function()
{
    console.log("이예쁜");
}

var userName = nickName;

userName();
nickName();
