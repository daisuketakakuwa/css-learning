## 画像表示方法、２パターン
① `img要素`<br/>
② `div要素`に`background-image`を設定する。

## img要素を使う
`width`、`height`をそれぞれ指定するかどうかで、アスペクト比を保てるか変わる。

|アスペクト比|width|height|実用的か|
|----|----|----|----|
|〇|✕|✕|No。元画像サイズをそのまま表示。|
|〇|〇|✕|✅YES。これを使おう。|
|✕|〇|〇|No。アスペクト比を保てない。|

👉img要素が1000pxで、親div要素が100pxでも、はみ出てしまう。

<br/>

## div要素にbackground-imageを設定する

```css
.bg-img {
  background-color: black;
  height: 300px;
  width: 100px;

  background-image: url(https://assets.designhill.com/design-blog/wp-content/uploads/2023/04/new-Twitter-logo-768x439.png);
}
```
画像全体を表示させるために、トリムされてもOKの場合
```css
  /* div要素を埋める形で画像が「拡大」される -> trimされた形となる */
  background-size: cover;
  /* 「拡大」された場合の基準の位置 -> trimの基準位置 */
  background-position: center;

```

画像全体を表示させるが、トリムさせたくない場合
```css
  background-size: contain;
```

