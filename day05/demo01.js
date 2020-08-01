//if 语句
// var age = prompt('请输入年龄');
// if (age >= 18) {
//     document.write('可以访问成人模式');//文档显示
//     console.log('可以访问');//终端显示
//     alert('可以访问');//弹窗显示
// } else {

//     document.write('可以访问青少年模式');
// };







//switch语句
// var month = prompt('请输入月份:');

// switch (month) {
//     case '1':
//     case '3':
//     case '5':
//         alert('31天');

// };


// var i = 0;
// while (i < 21) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i++;
// };



// while (true) {
//     var name = prompt('请输入用户名：');
//     if (name == 'laowang') {
//         break
//     }

// }


//声明提前
//使用var 声明的变量名在程序执行时会将变量的名字提前到所有代码上方 
//可以在任意位置 使用变量名
//声明提前 的变量 默认值是undinfied，
// while (name != 'laowang') {
//     var name = prompt('请输入用户名：');
// };


// for (var i = 100; i < 1000; i++) {
//     var t = i % 10;
//     var h = parseInt(i / 10 % 10);
//     var th = parseInt(i / 100);
//     if (th ** 3 + h ** 3 + t ** 3 == i) {
//         console.log(i);
//     };

// };


// function fun (name)
// {
//     document.write('hello,' + name);
// };
// fun("ererer");

// function myMax (a, b)
// {
//     return a > b ? a : b;
// };

// console.log(myMax(17, 27))


window.onload = function ()
{
    // var btn = document.getElementById("btn");
    // btn.onclick = function ()
    // {
    //     alert('hello,world');
    // };




    var a = 1;
    function fun ()
    {
        var a = 10;
        var bin = document.getElementById('btn')
        btn.onclick = function ()
        {
            a++;
            alert(a)
        }

    }
    fun()
};










