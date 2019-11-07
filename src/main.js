
console.log('ok')

import './css/index.css'

import './css/index.scss'

import 'bootstrap/dist/css/bootstrap.css'


class Person{
    static info = {name:'zs',age:20}
}

console.log(Person.name);
// 通过Bable可以把高级语法转换为低级语法