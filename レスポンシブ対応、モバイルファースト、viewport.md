## 画像
各端末ごとに画像が適切に表示されるようにしたい。<br/>
１．img要素のsrcset<br/>
２．picture要素✕source要素<br/>
３．**メディアクエリ** -> `@media screen and (min-width: ---px)`でCSS制御(`background-image`を切り替える等)<br/>

## メディアクエリ
### ０．viewport で「今端末の横幅はこれくらいですよ」を定義する👈MUST!!!
これがないとメディアクエリが正しく動かない。
```html
<head>
  <meta name="viewport" content="width=device-width;" />
</head>
```

### １．横幅/端末によって読み込ませるCSSを切り替える
```html
<link rel="stylesheet" href="mobile.css" media="sceen and (max-width: 600px)" />
<link rel="stylesheet" href="desktop.css" media="sceen and (min-width: 601px)" />
```
CSSファイル(`index.css`)内で切り替える場合 **@importはCSS記法、SCSSでは非推奨の書き方**
```css
@import url("mobile.css") screen and (max-width: 600px)
@import url("desktop.css") screen and (min-width: 601px)
```

## モバイルファースト
```css
/* モバイル用のスタイル */
h1 {}

/* デスクトップ用のスタイル */
@media screen and (min-width: 601px) {
  h1{}
}
```

### デスクトップファーストの場合
```css
/* デスクトップ用のスタイル */
h1 {}

/* モバイル用のスタイル */
@media screen and (max-width: 600px) {
  h1{}
}
```
