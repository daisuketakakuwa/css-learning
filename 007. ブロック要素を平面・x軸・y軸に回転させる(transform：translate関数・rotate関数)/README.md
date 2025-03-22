**🔴transformを適用できるのは inline要素以外(inline-block, block)のみ！！🔴**

# rotate関数

### 平面での回転
```css
transform: rotate(90deg);
```

### x軸/横線 を基準に回る
```css
transform: rotateX(90deg); /* 奥に90度倒れる */
transform: rotateX(-90deg); /* 手前に90度倒れる */
```

### y軸/縦線 を基準に回る
```css
transform: rotateY(90deg);
```

### ✅回転する支点/基準 を決める
✅**z軸(奥行)は、立体的な円の半径だととらえる。**
```css
/* x軸, y軸, z軸(奥行) */
transform-origin: center center 50px;
```
