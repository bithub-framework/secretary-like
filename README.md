# interfaces

有的交易所 order id 和 trade id 大于 int53，甚至不一定是数字，更不一定有序。

事件用 number 因为 Date 不能 JSON 序列化。

quantity 单位是被交易的 instrument，而不是 underlying BTC。

Side Operation Length 把自己负一下就是对面。

Side Operation Length 用其中两个相乘得另一个。由于乘法后类型自动转换为 number，所以这三个类型也直接设为 number 而不是 union type 或 const enum。
