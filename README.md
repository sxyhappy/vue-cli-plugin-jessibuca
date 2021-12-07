# jessibuca 播放器 vue-cli 插件

jessibuca 没有提供 npm package,只能通过 script 方式引入,所以使用 vue-cli 插件形式自动引入 jessibuca

插件会自动在 html 插入 index.js 的 script 标签,所以可以在代码中直接使用 Jessibuca 全局变量

## 安装

```bash
npm install vue-cli-plugin-jessibuca -D
# use yarn
yarn add vue-cli-plugin-jessibuca -D
```
## 使用

```js
const instance = new Jessibuca({})
```
