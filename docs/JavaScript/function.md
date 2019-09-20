---
sidebar: auto
---

# 函数

函数是一个特殊的 `对象` 。

**可以当作一般对象，在其内部存放属性。**

代码：

```javascript
function foo(){}
foo.username = 'jack';
```

**也可以用来封装代码。**

## 封装代码

代码：

```javascript
function foo(){
  var name = 'jack';
  console.log(name);
}
```

## 执行代码

被函数封装（包裹）的代码，和外界是隔离的。

如果需要运行 `{ }` 内的代码，那么必须要使用 `( )` 。

语法：

```javascript
函数名()
// 或
函数变量()
// 或
(function(){})();
```

代码1：

```javascript
function add(){
  var a = 100, b = 200;
 	console.log(a+b);
}
```

执行函数：

```javascript
add();
```
代码2：

```javascript
var add = function(){
  var a = 100, b = 200;
 	console.log(a+b);
}
```

执行函数：

```javascript
add();
```

代码3：

```javascript
(function(){
  var a = 100, b = 200;
 	console.log(a+b);
})();
```

`代码2` 和 `代码3` 实际是等价的。

 **`( )` 的前面 `值` 或 `变量`  的数据类型必须是 `function` 。** 

## 变量作用域

从程序的角度出发，我们将浏览器从逻辑上分为三个范围，每个范围叫做一个 `域` 。

```
浏览器[
	/* 全局对象window */
	script[
		/* 代码 */
		function[
			/* 代码 */
		]
	]
]
```

第一层：浏览器，也叫做 `宿主环境`。

第二层： `宿主环境` 包裹了 `script脚本标签`。

第三层：`script脚本标签` 包裹 `function` 代码块。

作用域指的就是变量的 `所在域` ，**一个变量只有一个作用域。**

代码：

```html
<script>
  var username = 'jack';
  function foo(){
    var age = 20;
  }
  foo();
</script>
```

以上代码中变量 `username` 的作用域就是 `script` 标签，变量  `age` 的作用域就是 `function foo` 。

作用域表示了变量的有效范围，**上层作用域的范围包含了下层作用域**。

从代码的角度来说，**内层的代码，可以访问外层的变量，反之不行。**

代码1：

```html
<script>
  var username = 'jack';
  function foo(){
    console.log(username); // jack
  }
  foo();
</script>
```

 代码2:

```javascript
function foo(){
  var username = 'jack';
}
foo();

console.log(username); // username is not defined

```



## 变量的覆盖

如果内外层域的变量同名，`内层域` 的变量会覆盖 `外层域` 的变量。

代码：

```html
<script>
  var username = 'jack';
  function foo(){
    var username = 'lili';
    console.log(username); // lili 内层域的变量会覆盖外层域的变量。
  }
  foo();
</script>
```

## 函数的嵌套

代码：

```javascript
function fun1(){
  console.log('fun1');
  function fun2(){
    console.log('fun2');
    function fun3(){
      console.log('fun3');
    }
    fun3()
  }
  fun2()
}
fun1();
```

以上代码依次输出：

```
fun1
fun2
fun3
```

## 变量的作用域链

代码：

```html
<script>
  var username = 'jack'
  function fun1(){
    function fun2(){
      function fun3(){
        console.log(username); // 输出什么？？
      }
      fun3
    }
    fun2
  }
  fun1();
</script>
```

`fun3` 中输出变量 `username` 于是将会进行一下步骤的查找：

第1步：先在 `fun3域` 中查找 `变量username`,  未找到。

第2步：往上一层 `fun2域` 中查找 `变量username`,  未找到。

第3步：再往上一层 `fun1域` 中查找 `变量username`,  未找到。

第3步：再往上一层 `script域` 中查找 `变量username`,  找到。

第4步：输出 `jack`。

## 全局变量window

window变量，是浏览器的提供的顶级变量，也称为**全局变量**。

其数据类型是 `对象类型`，作用域是 `整个浏览器` 。

在上面的代码中，如果 `第4步` 依然未找到`username变量`，那么就会到这个 `window对象` 中查找，是否有 `username` 属性。

如果有，就输出 `window.username` 的值。

> **思考下：如果依然没有呢？**

## 函数参的参数

语法：

```javascript
function 函数名(参数1,参数2){}
```

### 局部变量

**参数本质上是函数的局部变量，其作用域只在函数内部。**

代码：

```javascript
function add(a,b){
  console.log(a+b); // NaN
}
add();

```

等价写法

```javascript

function add(){
  var a = undefined;
  var b = undefined;
  console.log(a+b);// NaN 
}

add();
```

### 调用时传参

代码：

```javascript
function add(a,b){
  console.log(a+b);// 300
}
add(100,200);
```

相当于，对变量 `a` 和 `b` 重新赋值：

```javascript
function add(a,b){
  a = 100;
  b = 200;
  console.log(a+b);// 300
}
add(100,200);
```

## 变量传参

### 变量是值类型

代码：

```javascript
var username = 'jack';
function foo(name){
  	name = 'lili';
}
foo(username);

console.log(username); // jack

```

等同于：

```javascript
var username = 'jack';
function foo(name){
  	name = username; // 复制赋值
  	name = 'lili';
}
foo(username);

console.log(username); // jack

```



### 变量是引用类型

代码：

```javascript
var user = {
  username:'jack'
};
function foo(obj){
  	obj.username = 'lili';
}
foo(user);

console.log(user.username); // lili

```

等同于：

```javascript
var user = {
  username:'jack'
};
function foo(obj){
  	obj = user; // 引用赋值
  	obj.username = 'lili';
}
foo(user);

console.log(user.username); // lili

```



> 其中原因，请参考 [复制赋值、引用赋值](./datatype.html#%E5%A4%8D%E5%88%B6%E8%B5%8B%E5%80%BC%E3%80%81%E5%BC%95%E7%94%A8%E8%B5%8B%E5%80%BC)

## 函数执行后的返回值

### 默认返回值

函数调用执行后都是有返回值的，默认返回 `undefined` 。

代码：

```javascript
function foo(){
  
}
var result = foo();
console.log(result); // undefined
```

### 自定义返回值

可以使用 `return` 自定义函数返回值。

代码：

```javascript
function foo(){
  return 123；
}
var result = foo();
console.log(result); // 123
```

`return` 的作用是

1. 设定函数的返回值（任意数据类型）
2. 结束后续代码的执行

代码：

```javascript
function foo(){
  return 123；
  console.log('你看不到我的！');
}
var result = foo();
console.log(result); // 123
```

代码中的 ` console.log('你看不到我的！');` 不会被执行。

## 闭包

## 递归函数

