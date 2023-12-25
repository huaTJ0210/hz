# Javascript 基础篇

### 1、语言基础

#### 1.1 、JavaScript 语言概述

> - 脚本语言（script language）：不具备开发操作系统的能力，用来编写控制应用程序（浏览器）的脚本；
>
> - 嵌入式语言：依附于宿主环境（浏览器、服务器：Node），调用宿主环境提供的 API；
>
> - JavaScript 不是纯粹的面向对象编程语言，同时支持其他编程范式（函数式编程）
> - 操控浏览器的能力、Node、数据库操作、移动平台开发、跨平台的桌面应用

<!--more-->

#### 1.2、 ES6 新增语法支持

> [es6](https://www.babeljs.cn/docs/learn)

#### 1.3 、垃圾回收机制

> [javascript 的垃圾回收机制](https://zh.javascript.info/garbage-collection)
>
> - 可达性：以某种方式可访问或者可用的值，一定存储在内存中

### 2、基本语法

#### 1、 区分大小写

> 无论变量名、函数名、操作符均区分大小写

```javascript
// 以下两种变量为不同的变量
var test；
var Test；
```

#### 2、 标识符

> 标识符指的是用来识别各种值（变量、函数、属性或者函数参数）的合法名称;
>
> 标识符有一套命名规则（关键字、保留字不能作为标识符），不符合规则的就是非法标识符；
>
> JavaScript 引擎遇到非法标识符，就会报错；

#### 3、 语句

> 语句是为了完成某种任务而进行的操作，以分号结尾，省略分号意味着由解析器确定语句在哪里；

```javascript
// （0） 赋值语句
var a = 1 + 3;
var b = "abc";

// (1) if-else结构
var m = 0;
if (m === 3) {
  m += 1;
} else {
  m -= 1;
}

// (2)switch结构
var fruit = "apple";
switch (fruit) {
  case "banana":
    // ...
    break;
  case "apple":
    // ...
    break;
  default:
  // ...
}

// (3)三元运算符 : (条件) ? 表达式1 : 表达式2
var even = n % 2 === 0 ? true : false;

// (4) 循环语句 : while、for、do...while等
```

#### 4、 变量

> 变量就是为”值“起名，然后引用这个名字;

##### 4.0 var 关键字

> var [变量名称] ： 可以定义任意数据类型的变量

```javascript
var a = 1;
var b; // 只声明未赋值，则该变量的值为undefined
c; // 未声明直接使用： ReferenceError： x is not defined
```

##### 4.1 区块

> JavaScript 使用大括号，将多个相关的语句组合在一起，称为“区块”（block）。

```javascript
// (1) 普通块
{
  var a = 1;
}
console.log("a=" + a); // a=1 ； 此区块不构成单独的作用域scope

// (2) 函数块
function fuc() {
  var b = 1;
}
console.log("b=" + b); // Uncaught ReferenceError: b is not defined: 函数块存在作用域

// (3) 条件判断
var allowed = false;
if (allowed) {
  var c = 1;
}
console.log("c=" + c); // c=undefined ： 判断语句也不构成单独的作用域
```

##### 4.2 var 声明的作用域

> var [变量名称] ： 可以定义任意数据类型的变量

```javascript
// (1) 场景一 : 变量声明位于函数作用域中
function foo() {
  var message = "hi"; // 局部变量
}
foo();
console.log(message); //  ReferenceError： message is not defined

// (2) 场景二 ：变量声明被提升到全局作用域中
function foo() {
  message = "hi"; // 全局变量
}
foo();
console.log(message); //  "hi"
```

##### 4.3 var 声明变量提升

> JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。
>
> 这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升（hoist）。

```javascript
// （1）变量提升场景一：
console.log(a); // undefined
var a = 1;

// 上述代码等价与👇
var a;
console.log(a);
a = 1; // 由于变量的提升导致了a的声明被提前声明了

// （2）变量提升场景二：
var tmp = new Date();
function func() {
  // var tmp；会被隐式提升到这里
  console.log("1===>" + tmp); // undefined
  if (false) {
    var tmp = "hello"; // var tmp；声明会被提升；流程控制语句的{},不算作用域 【不存在块级作用域】
  }
  console.log("2===>" + tmp); // undefined : if判断为false，未执行tmp的赋值
}
func();
```

##### 4.4 var 声明变量的问题

```javascript
// 1 可以重复声明
var a = 12;
var a = 5;
// 2 无法限制修改，没有常量概念
var x = 4;
x = 5;
// 3 没有块级作用域 ：条件语句、循环语句等都不构成作用域
{
  var y = 0;
}
console.log(y); // 0
```

#### 5、 let 声明变量

> let 声明的范围是块作用域

##### 5.1 为什么需要块级作用域

```javascript
// 1、 内层变量可能会覆盖外层变量
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = "hello world";
  }
}

f(); // undefined

// 2、 计数的循环变量泄露为全局变量
var s = "hello";

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 5

// （3） 局部变量的写法
// IIFE 匿名立即执行函数,封装一个局部变量
(function () {
  var temp = "";
})();
// 块级作用域写法
{
  let tmp = "";
}
```

##### 5.2 let 的使用

```javascript
// 1、let声明的变量超出块级作用域就无效
{
  let a = 10;
  var b = 1;
}
a; // a is not defined
b; // 1

// 2、 对于for循环就适合使用let
for (let i = 0; i < 10; i++) {
  // ---
}
console.log(i); // ReferenceError : i is not defined

// 3 : 循环变量与内部变量也不是在一个作用域 ：设置循环变量的是父作用域，每轮循环都是新的作用域
for (let i = 0; i < 3; i++) {
  let i = "abc"; // 子作用域
  console.log(i);
}
// abc
// abc
// abc

// 4、let解决for循环闭包问题
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10: 闭包持有的i是全局的，导致每次循环i的值都会变化，最终数组中存储的i都为10

// 修改成以下方式就能解决：每次循环都是创建一个新的i变量，对于循环计数JavaScript引擎有记录
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6

// 5、 let声明的变量不会在作用域中被提升（暂时性死区）
console.log(name); // undefined
var name = "Matt";

console.log(age); // error
let age = 18;
```

#### 6、 const 的使用

> const 与 let 基本相同，使用它声明变量必须同时初始化变量，且尝试修改则会有运行时的错误产生；

```javascript
// (1) 基本使用
const age = 26;
age = 18; // TypeError

// (2) 引用类型的常量声明：常量`foo`储存的是一个地址，这个地址指向一个对象。
//不可变的只是这个地址，即不能把`foo`指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性

const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop; // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only

// 如果真想冻结对象不可以修改
const foo = Object.freeze({});
// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;
```

#### 7、表达式与运算符

##### 7.1 表达式

> 表达式是指能计算出值的任何可用程序单元。
> 表达式是一种 JS 短语，可使 JS 解释器用来产生一个值。

```javascript
// （1）常量、直接量
3.14;
"test";
// （2）关键字
null ;
this;
true;
// （3）变量
i;
k;
j;
// （4）数组、对象的初始化表达式
[1,2];
[1,,,4]; // [1,undefined,undefined,4]
[x:1,y:2];
// （5）函数表达式:普通函数和自动执行函数
var fe = function(){};
(function(){
 console.log('hello world');
})();

// （6）属性访问表达式
var o = {x:1};
o.x;
o['x'];

```

#### 8 运算符

##### 8.1 一元、二元、三元

```javascript
//基本运算符
+num;
a + b;
c ? a : b;
var val == true ? 1 : 2 ;// 1

// 赋值
x += 1;

// 比较
a == b ;

// 算数
a - b;
// 按位或 |: 二进制“或”(有 1 则为 1)，比如:1010 | 1011 = 1011，1010 | 1000 = 1010
// 按位与 &: 二进制“与”(有 0 则为 0)，比如:1010 & 1011 = 1010，1010 & 1000 = 1000
a | b ;
// 逻辑与 ：若左侧为false，则不计算右侧
exp1 && exp2;
```

##### 8.2 运算符，

```javascript
a, b;
var val = (1, 2, 3); //val = 3
```

##### 8.3 运算符 delete

```javascript
var obj = { x: 1 };
obj.x; // 1
delete obj.x;
obj.x; // undefined

var obj1 = {};
Object.defineProperty(obj1, "x", {
  configurable: false,
  value: 1,
});
delete obj.x; //false
obj.x;
```

##### 8.4 运算符 in

> 判断属性是否在对象中，不能不判断是本身属性还是继承属性

```javascript
window.x = 1;
"x" in window; // true
```

##### 8.5 相等操作符

> 严格相等运算符（===）比较的是是否为“同一个值”，类型不同直接返回 flase；对于复合类型（引用类型），
>
> 比较是否引用的是同一个地址；
>
> 相等运算符（==）比较的是“值是否相等”，类型不同会先转成原始类型，再进行比较

```javascript
const hasOwn = Object.prototype.hasOwnProperty;

/*
  (1) 使用 == 的问题，会进行类型转换
   0 == ‘’ // true
   null == undefined // true
   [1] == true // true
  (2) 使用全等 === 要求必须类型一致；但也有两个问题
  NaN === NaN // flase ；期待的是true
  +0 === -0 // true ；期待的是false

*/

// 比较基本类型的两个值是否相等
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // 解决NaN的问题
    return x !== x && y !== y;
  }
}

// React中的工具函数
export default function shallowEqual(objA, objB) {
  // 基本类型做比较
  if (is(objA, objB)) return true;

  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (let i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
```

##### 8.6 + 运算符

```javascript
//(1) JavaScript中由于 + 运算符的重载导致，导致在运算子不同时产生的结果不一样
var a = 1 + true; // 2
var b = 1 + "true"; // '1true'
var c = "3" + 4 + 5; // '345' 运算顺序从左到右
var d = 3 + 4 + "5"; // '75'

// (2) 除了+运算符以外，其他运算符都不会发生重载

/*
  (3) 对象相加
  运算子为对象，则对象会先自动调用valueOf方法；
  obj.valueOf();// {p:1}
  然后再调用toString();
  obj.valueOf().toString();// [object object]
          */
var obj = { p: 1 };
obj +
  2 - // "[object object]2"
  //(4) 余数运算符
  (1 % 2); // -1
1 % -2; // 1
// 正确的写法
function isOdd(n) {
  return Math.abs(n % 2) === 1;
}
isOdd(-5); // true
isOdd(-4); // false

// (5)指数运算符 [从右向左运算的]
x ** y;
```
