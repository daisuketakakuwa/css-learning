## まとめ
👉特定の要素に限定にして順番をカウントしたいなら`nth-of-type`<br/>
👉色んな要素こみこみで順番をカウントしたいなら`nth-child`

## nth-child / first-child / last-child
✅**親要素の他の要素も含めたX番目 としてCountされる**
```html
<html>
  <body>
    <div>
      <strong>I'M strong</strong>
      <span>Item 1</span>
      <span>Item 2</span>
      <span>Item 3</span>
      <span>Item 4</span>
      <span>Item 5</span>
    </div>
  </body>
</html>
```
```css
div > span {
  color: olive;
}
/* 1番目の要素のみ適用 ... この例だと1番目はstrong要素だから反映されない */
div > span:nth-child(1) {
  color: purple;
}
/* 偶数要素に適用 */
/* odd->奇数, even->偶数もいける */
div > span:nth-child(2n) {
  color: red;
}
```

## nth-of-type / first-of-type / last-of-type
✅親(div)配下のspan要素のみの順番でカウントする。
```css
div > span {
  color: olive;
}

div > span:nth-of-type(1) {
  color: red;
}

div > span:nth-of-type(2) {
  color: green;
}

div > span:nth-of-type(3) {
  color: blue;
}
```
