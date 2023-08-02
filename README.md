## 初始化vue项目
```
vue create demo
```

## 安装组件库
```
npm i ruigu-vue-tools
```

## 全局导入
```
import ruiguUI from 'ruigu-vue-tools'
import 'ruigu-vue-tools/dist/ruigu-vue-tools.css'
Vue.use(ruiguUI)
```

## 组件使用
```
1.时钟组件：textColor 字体颜色
```
```
<template>
  <div id="app">
      <ruigu-clock textColor="#f00"></ruigu-clock>
  </div>
</template>
```

## 指导地址
http://www.jnnr.cn/a/479014.html
