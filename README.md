# interfaces

## 十进制小数

所有可能为十进制小数的值均采用高精度十进制库 [big.js](https://github.com/MikeMcl/big.js) 的 `Big` 表示。

## Data

`./src/data.ts` 中定义了一些 BitHub 各个组件通用的接口。

- `OrderId`
    
    有的交易所 order id 和 trade id 大于 int53，甚至不一定是数字，更不一定有序。

- `quantity`
    
    单位是被交易的 instrument，而不是 underlying BTC。

- `Side` `Operation` `Length`
    - 值为 `1` 表示 `BID` `OPEN` `LONG`，值为 -1 表示 `ASK` `CLOSE` `SHORT`。
    - 把自己负一下就是反向，用其中两个相乘得另一个。由于负号或乘法后类型自动转换为 `number`，所以这三个类型也直接设为 `number` 而不是 union type 或 const enum。

- `Assets`

    不同交易所保证金计算方式差别很大，详见 [Texchange](https://github.com/bithub-framework/texchange) 文档。保证金这个数据对通用策略没有价值，所以 Assets 中没有包含各种保证金，只包含最终可用余额 `reserve`。

### 序列化

`./src/serialization.ts` 中定义了一些与序列化有关的东西。

- `reviver`

    `data.ts` 中有的接口含有高精度十进制 Big 属性
    
    - `JSON.stringify` 时 Big 属性全部转换为 string
    - `JSON.parse` 时提供 reviver 将 string 属性还原为 Big

- `clone`

    `data.ts` 中只定义了接口，而实现这个接口的类不一定是 plain object，因此即使没有嵌套属性，`newObject = { ...oldObject }` 也不是好习惯。最好使用这个专门的 `clone` 函数来克隆 `data.ts` 中定义的接口。

## Config

`./src/config.ts` 中定义了市场与账户的配置。

- `calcDollarVolume`

    已知订单价格和数量计算成交额的函数。例如 underlying assets 为 100 USD 的 BTC 币本位合约，这个函数可以这么定义

    ```ts
    function calcDollarVolume(price: Big, quantity: Big): Big {
        return quantity.times(100).div(price);
    }
    ```

- `calcQuantity` 是 `calcDollarVolume` 的反函数，已知价格和成交额计算数量。

## Context

`./src/context.ts` 中定义了与 [SecretaryJS](https://github.com/bithub-framework/secretary-js) 中的上下文对象有关的接口。
