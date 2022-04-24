# interfaces

## 函数式数据结构接口

```ts
interface Readable<T> {
    getValue(): T;
}

interface Mutable<T> extends Readable<T> {
    setValue(v: T): T;
}

interface Readonly<T> extends Readable<T> {
    setValue(...args: never): never;
}
```

Readonly 和 Mutable 没有父子关系。

TS 中的 readonly 关键字是 readable 的意思，因此用 readonly 关键字修饰的数据结构在语法上不能认定为函数式数据结构。TS 没有比较方便的方法表示函数式数据结构接口，只能自己在语义上规定。

本接口包声明的类型，不区分是不是函数式，函数式的语义由包用户自行定义。
