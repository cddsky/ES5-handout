---
sidebar: auto
---
# 数据类型

## 什么是数据类型？



在人类世界中，事物被常常被分门别类：

**动物** ：🙊 🐮 🐫 🐨

**水果** ：🍒 🍑 🍓 🥝 

**交通工具** ：🏍 🚕 🛩 🛳

......



在JS（ES5）世界中 `数据` 也被分门别类了，共分了6大类，分别是：

- String（字符串）
- Number（数字）
- Boolean（布尔）
- undefined（为定义）
- null（空）
- **Object（对象）**

以上就是JS的 **六大数据类型** 。比人类世界要简单多了。 



## 值类型和引用类型

  `Object` 又被称为 `引用类型` （或对象类型），其他的类型统称为 `值类型` （或基本类型）。

- 引用类型
  - **Object（对象）**
- 值类型
  - String（字符串）
  - Number（数字）
  - Boolean（布尔）
  - undefined（为定义）
  - null（空）

**怎么理解呢？**

现在将 `变量` 看作是一个 `包`，`数据` 就是存放在 `包` 里的 `东西` 。

```javascript

a👜 <- 🍎 // 将一个苹果放到a包里

b👜 <- 🐱 // 将一只猫放到另b包里

c👜 <- 🍎 + 🐱 // 将一只猫和一个苹果放到另c包里

```

这里的 `a👜` 数据的类型是 `水果`， `b👜` 数据的类型是 `动物` ，**那么 `c👜 ` 数据的类型是什么？**

我们可以说，既有 `水果` 又有 `动物` —— 那就叫 `复合类型` 吧！

**在JS中，将 `复合类型` 叫做 `引用类型` （也叫对象）。**

`a👜` 和 `b👜` 的数据类型，就是 `值类型`（或基本类型）。

> 引用类型 = 基本类型 + 基本类型 + ...

延申下：

```javascript
d👜 <- 🍎 + 🐱 + c👜 // 将一只猫、一个苹果、c包、放到另d包里
```

> 引用类型 = 基本类型 + 基本类型 + 复合类型 + ...



翠花上代码：

```javascript
var a = '🍎';
var b = '🐱';
var c = ['🍎','🐱'];
var d = ['🍎','🐱',c];
```

上正经代码：

```javascript
var name = 'jack';
var age = 20;
var hobby = ['css','html'];
var user = ['jack',20,hobby];
```

> 值类型：name、age
>
> 引用类型：hobby、user



### 引用类型的子类型

1. 一般对象（object）

2. 数组（array）

3. 函数（function）

## 对象

>  约定：如无特殊说明，以后提到的对象，都指一般对象。

对象：既可以存放 `值类型` ，也可以存放 `引用类型` 。

### 对象的定义

语法：

```javascript
变量名 = {}
```

代码：

```javascript
var user = {};
```

### 给对象赋值

语法：

```javascript
变量名 = {属性名:属性值,属性名:属性值,...}
//或
变量名 = {键名:值,键名:值,...}       
```

代码：

```javascript
var user = {
  name:'jack',
  age:20,
  hobby:['css','html']
}
```

### 对象的访问

语法1：

```javascript
变量名['属性名']
```

代码：

```javascript
user['name']; // jack
user['age']; // 20
user['hobby']; // ['css','html']
```

语法2：

```javascript
变量名.属性名
```

代码：

```javascript
user.name; // jack
user.age; // 20
user.hobby // ['css','html']
```

### 动态添加对象属性

语法：

```javascript
对象变量[新属性] = 值
//或
对象变量.新属性 = 值
```

代码：

```javascript
user['gender'] = 'boy';
// 或
user.gender = 'boy';
```

### 修改属性的值

语法：

```javascript
对象变量[属性] = 值
//或
对象变量.属性 = 值
```

代码：

```javascript
user['name'] = 'lili';
// 或
user.name = 'lili';
```

### 删除对象属性

```javascript
delete user.age;
```



> 思考:
>
> 1. `user[name]` 和 `user['name']` 的区别？
> 2. 能不能将属性名设置为 `1a-2b*&` 这样的字符串？



## 数组

可以简单的理解为：**将对象属性部分换成了连续的数字，就成了数组**。

数组是对像的一种简化形式。



### 数组的定义

语法：

```javascript
变量 = [元素, 元素, ...]
```

代码：

```javascript
var user = ['jack', 20, 'boy'];
```

约等于：

```javascript
var user = {
  0:'jack',
  1:20,
  2:'boy'
}
```

### 数组访问

语法：

```javascript
变量名[下标] // 变量名['属性名']
```

> 和对象不同，数组只能通过 `[ ]` 访问

代码：

```javascript
user[0]; // jack
user[1]; // 20
user[2]; // boy
```


### 动态添加数组元素

语法：

```javascript
数组变量[新下标] = 值
```

代码：

```javascript
user[3] = 'jack@qq.com';
```

> 思考：
>
> 1. 如果动态赋值 `user[6] = 'abc';` 那么 `user[4]`、`user[5]` 分别等于什么？


### 修改元素的值

语法：

```javascript
数组变量[下标] = 值
```

代码：

```javascript
user[1] = 30;
```

## 函数

### 函数的定义

语法：

```javascript
function 函数名(){
  代码块
}
// 或
变量名 = function 函数名(){
  代码块
}
// 或
变量名 = function(){
  代码块
}
```



### 作为值的函数

**在js中函数可以被当作 `值` 进行传递。**

代码：

```javascript
function foo(){}
// 等效
var fun = function foo(){}
// 等效
var fun = function(){}
```



### 作为对象的函数

可以将 `函数名` 或 `函数变量名` 当作 `对象` 进行属性赋值。

代码：

```javascript
function foo(){}
foo.gender = 'body';
```

或

```javascript
var fun = function(){}
fun.gender = 'body';
```

**可以将函数理解为是一种特殊的 `对象` 。**



## 复制赋值、引用赋值

**值类型的数据是复制赋值，对象（引用）类型的数据是引用赋值。**

代码1：

```javascript
var a = 1;
var b = a; // 
b = 100;
// 那么a的值是多少？
```

代码2:

```javascript
var arr1 = ['a','b'];
var arr2 = arr1;
arr2[0] = 'c';
// 那么 `arr1[0]` 的值是多少？
```

### 什么是引用

作图（内存图）解释



## 数据类型的判断

### typeof运算符

语法：

```javascript
typeof 值
// 或
typeof 变量
```

代码：

```javascript
typeof 'abc'; // "string"
typeof true; // "boolean"
typeof name; // "string"
typeof user.name; // "string"
typeof age; // "number"
typeof user.age; // "number"
typeof undefined; // "undefined"

typeof null; // "object"
typeof user; // "object"
typeof user.hobby; // "object"
typeof hobby; // "object"

```



## 组合使用

代码1：

```javascript
var user = {
  name:'jack',
  age:20,
  gender:'boy',
  hobby:['css','js','html'],
  say:function(){}
};

```

代码2:

```javascript

var users = [
  {
    name:'jack',
    age:20,
    gender:'boy',
    hobby:['css','js','html'],
    say:function(){}
  },
  {
    name:'lili',
    age:21,
    gender:'girl',
    hobby:['css','vue','html'],
    say:function(){}
  },
]
```



> 思考：如何访问属性 `hobby` 中的值？



