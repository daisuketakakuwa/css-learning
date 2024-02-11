// Target要素は縦横は100vh × 100vh なので、
// 文字のラインのところにきたらintersectする。
// 実行は１回だけでOKなので、実行後監視対象外とする。
const title1 = document.querySelector(".c1");
const title2 = document.querySelector(".c2");
const title3 = document.querySelector(".c3");

const cb = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // ID(.c1/.c2/.c3)取得
      const keyClass = entry.target.classList[1];
      // 文字列をすべて取得 & Animation付与
      const elements = document.querySelectorAll(`.${keyClass} > .letter`);
      elements.forEach((elem) => {
        elem.classList.add("drop-letter");
      });
    }
  });
};

const options = {
  root: null,
  // ある程度タイトルが見える位置を intersect 位置とする。
  rootMargin: "-50%",
};

const io = new IntersectionObserver(cb, options);
io.observe(title1);
io.observe(title2);
io.observe(title3);
