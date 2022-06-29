## vue3 + vite + typeScript

[基于 Vite 搭建开发体验超级丝滑的 Vue3 组件库开发框架](https://segmentfault.com/a/1190000041103446)


## 发包

```js
npm login
npm version patch | minor | major
// major.minor.patch
npm publish

// 废弃指定版本，还是可以安装的，只是有warn
npm deprecate <pkg>@<version> <message> 

// 删除包
// 删除的版本24小时后方可重发!
// 只有发布72小时之内的包可以删除!
npm unpublish @alexwjj/jj-ui --force
```
### 一些问题
- 只发布dist
package.json 中配置 "files": ["dist"],

- 仓库同名报错

- scoped包发布报错
按照提醒 加上 --access 

- 