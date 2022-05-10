## vue3 + vite + typeScript

[基于 Vite 搭建开发体验超级丝滑的 Vue3 组件库开发框架](https://segmentfault.com/a/1190000041103446)


## 发包

```js
npm login

npm version patch | minor | major

npm publish
```
### 一些问题
- 只发布dist
package.json 中配置 "files": ["dist"],

- 仓库同名报错

- scoped包发布报错
按照提醒 加上 --access 

- 