# Vite

### 1、图片打包相关

根据图片的内容(编码)给图片加后缀;  
相同文件名而内容不同时后缀不相同(同名更新);

如果同一图片被赋予了两个不同的文件名(即使不同目录), 则会打包成同一张图片,  
在实际引用该图片的地方也会替换成打包后的