const child1 = document.querySelector(".child1");
const child2 = document.querySelector(".child2");
// entries -> Observerに登録した全entryが第一引数に渡る
const cb = (entries, observer) => {
  entries.forEach((entry) => {
    // 画面内に入ってきた要素に対してCSSクラスを適用する
    if (entry.isIntersecting) {
      console.log("intersect started");
      entry.target.classList.add("inview");
    } else {
    	console.log("intersect ended");
      entry.target.classList.remove("inview");
    }
  });
};

const options = {
  // root = 交差枠のこと/Viewportに該当
  root: null,
  // intersectとみなされる交差枠の調整が可能
  // ・target要素が少し入ってきてからintersect扱いにしたい -> マイナスの値を設定する
  // ・単位としては px か % のみ
  rootMargin: "-100px",
};

const io = new IntersectionObserver(cb, options);
io.observe(child1);
io.observe(child2);