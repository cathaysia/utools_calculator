# 计算器

使用 JS 的 eval 和 Math 构建的计算器，支持以下运算符（大小写敏感）

1. 基本的加减乘除以及**（次方）、%（求余）、大小判断、
2. 逻辑运算符和位运算符： |, ||, &, &&, ^, <<, >>, ~
3. 以下函数
    abs acos asin atan atan2 ceil cos exp floor log max min pow random round sin sqrt tan toSource valueOf 
4. 以下常数
    e pi ln2 ln10 log2e log10e sqrt1_2 sqrt2

当然，由于是使用 eval() 进行运算，这意味着你可以运行任意 JS 函数，比如 `Date()` 用来获取当前时间、`decodeURI()` 用来解码 URI。。。

如果插件崩掉了，请先退出插件在重启即可。一般来说，我已经尽力避免了插件崩掉的情况，但是天有不测风云。。。