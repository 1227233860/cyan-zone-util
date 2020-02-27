# cyan-zone-util

## 描述
该库收集一些开发中用到的一些工具类（可能以Angular项目为主），以便提升工作效率。
具体使用方式在每个文件中都有示例。

## 安装方法
进入项目，使用npm直接安装即可使用。

`
npm i @cyan-zone/util
`

## 使用方法
先在组件中导入对应类,初始化后即可使用。

## 导入
可以全部导入

`
import { __Array, __Http } from '@cyan-zone/util';
`

也可以深层导入

`
import { __Array } from '@cyan-zone/util/array';
`

`
import { __Http } from '@cyan-zone/util/http';
`

如果使用到的类不是很多，建议使用深层导入，以便减少包的体积。
