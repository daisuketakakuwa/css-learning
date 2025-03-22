## SASS記法で書く場合
✅ネストして分かりやすく！<br/>
✅`@for`文を利用。
```scss
.three-dot-spinner {
  text-align: center;
  
  div {
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: black;
    border-radius: 50%;
    /* STEP1. Animationさせたい要素に定義 */
    animation: sk-bouncedelay 1.4s infinite;
    /* STEP3. 遅延時間を定義 */
    @for $i from 1 through 2 {
      // セレクタに変数を展開する場合は #{}とする
      &:nth-child(#{$i}) {
        // Sassだと 単位を含んだ状態で四則演算できる
        animation-delay: 0.32s / $i;
      }
    }
    
  }
  
}

/* STEP2. Animationを定義する */
@keyframes sk-bouncedelay {
  0% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
  80% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
}
```


## `@keyframes`の書き方

```css
@keyframes sk-bouncedelay {
  0% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
  80% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
}
```
equals to
```css
@keyframes sk-bouncedelay {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
```
equals to
```css
@keyframes sk-bouncedelay {
  from, 80%, to {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
```