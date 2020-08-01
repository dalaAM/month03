// window.onload = function ()
// {
//     var connect_css = document.getElementsByClassName('connect_css')
//     var i;
//     for (i = 0; i < connect_css.length; i++) {
//         connect_css[ i ].onclick = function func (i_inner)
//         {
//             //外部函数中想要找到当前的i，i的值永远是4
//             return function ()
//             {
//                 //闭包的目的是
//                 alert(connect_css[ i_inner ].innerHTML);

//             }
//         }(i)

//     }

// };



window.onload = function ()
{
    var connect_css = document.getElementsByClassName('connect_css')
   //let  声明一个局部变量，配合for 循环使用时，只有for循环内部的作用域能使用此变量
    for (let i = 0; i < connect_css.length; i++) {
        connect_css[ i ].onclick = function func ()
        {
                
            alert(connect_css[ i ].innerHTML);
        }

    }

};
