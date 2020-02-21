// 动物基类
function Animal(age, name){
    this.age=age;
    this.name=name;
}

// 在动物基类基础上添加方法run
Animal.prototype.run= function  (){
    console.log(this.name+" running ....");
}

function Cat(age, name){
    this.age= age;
    this.name=name;
}

// 原型的继承方法
// Cat.prototype.constructor===Cat   这是原本默认的指向
Cat.prototype=new Animal();
Cat.prototype.constructor=Cat; //因为上面的代码把Cat的prototype指向了animal
var c= new Cat(1,"ss")//期望cat继承animal的属性和方法

c.run();//从animal原型上继承的方法

// 问题
// 1、之类的构造函数的参数，没法传递给父类的构造函数
// 2、之类的原型的constructor会被改变，需要自己改回来
 