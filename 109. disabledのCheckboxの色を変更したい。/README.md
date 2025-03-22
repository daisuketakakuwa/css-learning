# 完成版

|BEFORE|AFTER|
|----|----|
|![](https://storage.googleapis.com/zenn-user-upload/0c1f43f33919-20231110.png)|![](https://storage.googleapis.com/zenn-user-upload/fb64ca49ecc3-20231110.png)|

```html
<html>
  <body>
    <label class="input-checkbox-container">
    　<input id="input-checkbox" type="checkbox" />
      <span class="checkmark"></span>
    </label>
  </body>
</html>
```
```css

/* labelでくくることで、span/checkboxをすべて同じクリック対象とする。 */
.input-checkbox-container {
  display: inline-block;
  /* 子要素で absolute/top/left定義するので コンテナであるlabel要素はposition: relativeにする */
  position: relative;
  
  width: 22px;
  height: 22px;
  border: solid 1px black;
}

/* checkboxのstyle */
.input-checkbox-container #input-checkbox {
  width: 20px;
  height: 20px;
  margin: 0;
  /* checkboxは見えないようにする */
  opacity: 0;
  /* span にかぶさるように */
  position: absolute;
  top: 0px;
  left: 0px;
}

/* checkboxの上に表示するspan要素 */
.input-checkbox-container .checkmark {
  height: 20px;
  width: 20px;
  /* checkbox にかぶさるように */
  position: absolute;
  top: -1px;
  left: -1px;
}

/* checkboxがcheckedされたら、span要素の背景色/枠を変更する。 */
.input-checkbox-container #input-checkbox:checked ~ .checkmark {
  background-color: #00008f;
  border: solid 2px black;
}

/* checkboxがcheckedされたら、spanを起点に✓オブジェクトを配置する */
.input-checkbox-container .checkmark::after {
  /* contentの定義はマスト */ 
  content: "";
  position: absolute;
  left: 5px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
```

# はまったポイント
1. **親セレクタの指定方法**
2. **HTML要素の定義の順番**

# 基礎
参考：[非表示のチェックボックスの要素を切り替え｜mdn web docs](https://developer.mozilla.org/ja/docs/Web/CSS/:checked)
```html:HTML
<input type="checkbox" id="cb-1" />
<p>HELLO</p>
```
```css:CSS
#cb-1:checked ~ p {
  color: red;
}
```
|BEFORE|AFTER|
|----|----|
|![](https://storage.googleapis.com/zenn-user-upload/e27faec21a67-20231110.png)|![](https://storage.googleapis.com/zenn-user-upload/b60b98c00e79-20231110.png)|

※スコープが正しく設定されていないために、正常に動かないケース
```html
<label class="checkbox-label">
  <input type="checkbox" id="cb-1" />
</label>
<p>HELLO</p>
```
```css
#cb-1:checked ~ p {
  color: red;
}
```
## 親セレクタの指定方法
```html
<div class="checkbox-label">
  <input type="checkbox" id="cb-1" />
  <p>HELLO</p>
</div>
```
親クラス指定なし
```css
#cb-1:checked ~ p {
  color: red;
}
```
親クラス指定あり
```css
.checkbox-label #cb-1:checked ~ p {
  color: red;
}
```
**🔴先頭の親セレクタは「~」以降も適用されるから定義不要！**
```css:CSS(親クラス指定あり) 
.checkbox-label #cb-1:checked ~ .checkbox-label p {
  color: red;
}
```

## HTML要素の定義の順番
**🔴(以下NG例) **
```html
<div class="checkbox-label">
  <p>HELLO</p>
  <input type="checkbox" id="cb-1" />
</div>
```
```css
#cb-1:checked ~ p {
  color: red;
}
```

# Styled Componentで表現した場合
```jsx
import React from 'react';
import styled from 'styled-components';
import colors from '../../../../../styles/colors';

const LabelStyled = styled.label`
  display: inline-block;
  position: relative;
  width: 22px;
  height: 22px;
  border: solid 1px black;
`;

const InputCheckboxStyled = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  width: 20px;
  height: 20px;
  margin: 0;
  /* hide this checkbox */
  opacity: 0;
  /* overlap this checkbox with CheckedMark element */
  position: absolute;
  top: 0px;
  left: 0px;

  &:checked ~ #${(props) => props.id}-checkedMark {
    background-color: ${colors.axaBlue};
    border: solid 2px black;
  }
`;

const CheckedMark = styled.span`
  background-color: ${(props) => (props.disabled ? '#e6e6e6' : 'white')};
  border: 1px solid gray;
  height: 23px;
  width: 23px;
  /* overlap this element with the checkbox */
  position: absolute;
  top: -1px;
  left: -1px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};

  &::after {
    /* hide when unchecked */
    opacity: ${(props) => (props.checked ? '1' : '0')};
    content: '';
    position: absolute;
    left: 5px;
    top: 2px;
    width: 7px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const CheckboxStyled = (props) => {
  return (
    <LabelStyled>
      <InputCheckboxStyled
        id={props.id}
        checked={props.checked}
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
        onClick={props.onClick}
        data-testid={props.dataTestid}
      />
      <CheckedMark id={`${props.id}-checkedMark`} checked={props.checked} disabled={props.disabled} />
    </LabelStyled>
  );
};

CheckboxStyled.defaultProps = {
  checkboxName: '',
  checked: false,
  disabled: false,
  value: '',
  onChange: null,
  onClick: null,
  dataTestid: '',
};

export default CheckboxStyled;
```