# interfaces

有的交易所 orderId 和 tradeId 大于 int53，甚至不一定是数字，更不一定有序。

事件用 number 因为 Date 不能 JSON 序列化

quantity 单位是被交易的 instrument 单位
