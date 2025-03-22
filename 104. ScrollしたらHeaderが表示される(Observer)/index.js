// Target要素は縦横は100vh × 100vh なので、
// 文字のラインのところにきたらintersectする。
// 実行は１回だけでOKなので、実行後監視対象外とする。
const kvArea = document.querySelector(".kv-area");

const cb = (entries) => {
  const headerMenuElem = document.querySelector(".header-menu");
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
        headerMenuElem.classList.remove("show-header");
    } else {
        // HeaderMenuを表示する

        // CSSの場合
        // 1. opacity: 1のクラスを付与する      
        headerMenuElem.classList.add("show-header");

        // Reactの場合
        // 1. useStateで状態を更新
        // 2. opacityを1へ変更する
    }
    // NOT intersectで、HeaderMenuを表示する
  });
};

const options = {
  root: null,
  // ある程度タイトルが見える位置を intersect 位置とする。
  rootMargin: "0px",
};

// 1. 監視対象 title
// 2. アクション cb
// 3. 1 を監視　isIntersecting　になったら　2(cb)を実行させる。
const io = new IntersectionObserver(cb, options);
io.observe(kvArea);

// 1. KV画像エリアが完全にスクロールで消えたら、
// 2. ぬるっとHeaderMenu部分を表示させる。