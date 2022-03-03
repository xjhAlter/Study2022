# iOS 兼容问题记录

### 1、z-index 失效

#### 问题描述：z-index 属性没有生效

#### 原因：父级元素上使用了 `-webkit-overflow-scrolling: touch;`

#### 解决方案：`-webkit-overflow-scrolling: unset;`

---

### 2、100vh

#### 问题描述：ios 浏览器使用 100vh 自动撑满页面时会出现滚动条

#### 原因：在 safari 和 chrome 浏览器中，100vh 是指去掉地址栏后的高度，所以会出现滚动条（即如果没有地址栏，则没有滚动条）

#### 解决方案：通过 js 获取 `window.innerHeight`, 并将其设置为全屏高度, 其他地方改为使用 `height: 100%`

---
