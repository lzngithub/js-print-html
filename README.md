# js-print-html

一个通过原生js实现的打印机输出文本效果的库，可用于任何前端项目

## 使用示例

```js
import print from './index.js';

// 打印文本
const app = document.querySelector('#app');
print(app, '需要打印的文本内容', 500)
```