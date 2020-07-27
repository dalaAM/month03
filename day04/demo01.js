console.log('加载外部文件');
// var a = 0;
// var a, b, c;
// var a = 1, b = 2, c = 3;
// var str_a = a.toString();
// console.log(str_a, 10);
// 其他类型字符转字符串
// console.log(true.toString());
// 其他类型字符转数字（整数）
// console.log(Number('123'));   -->123
// console.log(Number('123.456'));-->123.456
// console.log(Number('123abg'));-->NAN
// console.log(Number(true));-->NAN
// console.log(Number(undefined));-->NAN
// console.log(Number(null)); -->NAN

// 其他类型字符转数字（小数）
// console.log(parseInt('123avb'));
// console.log(parseInt('123.456'));
// console.log(parseInt(123.456));
// console.log(parseFloat('123.456'));
// console.log(parseInt('123.45.6'));
// console.log(parseInt('123.asd6'))
// 隐式转换(加运算是字符串拼接，减法是数字减运算)
// console.log('10' + 1); -->101
// console.log('10' - 1);-->9


// 接收用户输入的一个数值，将数值加10后打印
// var num = prompt('请输入一个整数');
// console.log(parseInt(num) + 10);
// var age = prompt('请输入年龄');
// console.log("李炜的年龄是：" + age + "岁")
// console.log('10' - true)  //



// var a = 10
// console.log(a += 1) -->11
// console.log(a *= 10)-->110
// console.log(a -= 1)-->109
// console.log(a /= 2)-->54.5
// console.log(a %= 3)-->0.5
// a++;
// ++a;
// console.log(a)



//算术运算符


//a++,先返回a的值，在递增 （先返回1,在递增）a++ =1 ，a=2
//++a,先递增 ，在返回a值        （++a =1+2 =3,     a =3）

// var a = 1;
//a=1   a++ =1  a=2
//a=2  ++a =3  a=3
//a=3 a++ =3  a=4
// console.log(a++ + ++a + a++)//1+3+3


//a=4   a--=4  a=3
//a=3  --a =2  a=2
//a=2 a-- =2  a=1
// console.log(a-- - --a - a--)



console.log('abc' > 'a'); //-->true
console.log(Number(true) > Number(null));// -->true
// console.log('18' > 1);// -->true
// console.log('18' > 'abc') // -->18,NaN(false)
console.log(0 == Number(null));
// console.log(typeof (null));
// console.log(1 == true);
// console.log(0 == false);
// console.log(null);
console.log(0 == Number(null));
console.log(typeof (true));
console.log(typeof (undefined));
console.log(Number(undefined));
console.log(Number(null));
console.log(false == Number(null));
console.log(null == undefined);
//"两个等号判断的是数值是否相等，
//三个等号不仅判断数值相等，同时还判断数据类型是否相等"



var a = 1;
//a=4   a--=4  a=3
//a=3  --a =2  a=2
//a=2 a-- =2  a=1
// console.log(a-- - --a - a--)



// var year = prompt('请输入一个年份：')

// console.log(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)


// console.log(!0)



// 三目运算符，条件不满足执行条件2,条件满足执行条件1
// var a = 10;
// var b = 20;
// a > b ? console.log(a) : console.log(b);



// var year = prompt('请输入一个年份：');
// year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? console.log('是润年') : console.log('不是润年');



var num1 = prompt('请输入一个数字：');
num1 < 10 ? console.log('0' + num1) : console.log(num1);

