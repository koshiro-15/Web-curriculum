//追従ヘッダー//
$(function () {
  function floatingHeader() {
    $(window).on("scroll", function () {
      $(".header").toggleClass("fixed", $(this).scrollTop() > 0);
    });
  }
  floatingHeader();
});

//-----------------------------------------------------------//

//メニューの開閉(SP)//
$(function () {
  $(".hamburger").on("click", function () {
    $(".hamburger,.contentlink").toggleClass("active");
  });
});
//-----------------------------------------------------------//

//『toTopボタン』の表示/非表示//
$(function () {
  function toTop() {
    $(window).on("scroll", function () {
      $(".top_arrow").toggleClass("active", $(this).scrollTop() > 90);
    });
  }
  toTop();
});

//-----------------------------------------------------------//

//スムーススクロール//
$(function () {
  $('a[href^="#"').on("click", function () {
    let adjust = $(".header");
    let speed = 400;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top - adjust.height();
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
  //-----------------------------------------------------------//
});
//モーダル//
$(function () {
  //モーダルウィンドウを表示する
  $(".img_category").on("click", function () {
    $(".modal").fadeIn();
    $(".modal_content").fadeIn();
    $(".close").fadeIn();
    let imgSrc = $(this).children("img").attr("src");
    let imgAlt = $(this).children("img").attr("alt");
    $(".modal_content").children("img").attr("src", imgSrc).attr("alt", imgAlt);
  });
  //モーダルウィンドウを閉じる
  $(".modal").on("click", function () {
    $(".modal").fadeOut();
    $(".modal_content").fadeOut();
    $(".close").fadeOut();
    //.modal_contentのoverflow-y:scrollを削除
    $(".modal_content").css("overflow-y", "visible");
  });
});
//-----------------------------------------------------------//

//タブ切り替え//
$(function () {
  $(".tab_panel:first-of-type").css("display", "flex");
  $(".tab-menu").on("click", function () {
    $(".current").removeClass("current");
    $(this).addClass("current");
    const index = $(this).index();
    $(".tab_panel").hide().eq(index).fadeIn(500).css("display", "flex");
  });
});
//-----------------------------------------------------------//

//ブラウザ幅がブレイクポイント超えたら再読み込み//
$(function () {
  $(window).on("resize", function () {
    if (window.matchMedia("(min-width: 750px)").matches) {
      setTimeout(function () {
        // リロード
        location.reload();
      }, 200);
    }
  });
});
//-----------------------------------------------------------//

//スライダー//
$(function () {
  let windowSize = $(window).width();
  if (windowSize <= 750) {
    $(".Childrenimg,.Adultsimg").slick({
      slidesToShow: 1, // 表示するスライド枚数
      slidesToScroll: 1, // スライドする数
      arrows: true, // 前・次のボタンを表示する
      dots: true, // ドットナビゲーションを表示する
      infinite: true,
      mobileFirst: false,
      fade: true,
      speed: 2000,
      //breakpoint: 750, //→if文で条件指定する（751px以上か750px以下か）750px以下の時にオプションを入れる
      //settings: "unslick",
    });
  } else {
    $(window).on("resize orientationchange", function () {
      $(".Childrenimg").slick("unslick");
    });
  }
});

//リサイズした時に実行
$(window).on("resize orientationchange", function () {
  $(".Chirdenimg").slick("resize");
});

//-----------------------------------------------------------//

//パララックス//
if ($(window).width() >= 751) {
  $(function () {
    function parallax() {
      //window heightを入れる変数を作る
      let winH = $(window).height();
      //mapの変数を作る→new Map()を入れただけのもの
      let elementPositions = new Map();
      function parallaxEffect() {
        //定数でwindow .scrolltopを取る
        const scroll = $(window).scrollTop();
        //each文でループ
        //each文の引数にindex element
        $(".js-mainvisual").each(function (index, element) {
          console.log("index: " + index);
          console.log("element: ", element);
          //定数に elementのoffset.topを入れる(element top)
          const elementTop = $(element).offset().top;
          //elementのouter.heightを定数に入れる(element height)
          const elementHeight = $(element).outerHeight();
          //elementtop+elementheght 定数でelement bottom
          const elementBottom = elementTop + elementHeight;
          //定数でpallaraximgを作る　mainvisualの中のelement.findでdivの中の画像を取っている（img要素）
          const parallaxImg = $(element).find("img");
          //if文でif(scroll top+window.hegiht >= element.top && scroll.top <= element.bottom){
          console.log(scroll);
          console.log(winH);
          console.log(elementTop);

          if (scroll + winH > elementTop && scroll < elementBottom) {
            //パララックスの動きの強度を決める変数を作る
            let positionY = (scroll + winH - elementTop) * -0.08;
            //map変数.set 第一引数element　第二引数positionY
            elementPositions.set(element, positionY);
            //pallaximg.css 第一引数top 第二引数${positionY}px
            parallaxImg.css("transform", `translateY(${positionY}px)`);
          } else {
            if (elementPositions.has(element)) {
              parallaxImg.css(
                "transform",
                `translateY(${elementPositions.get(element)}px)`
              );
            }
          }
        });
      }
      $(window).on("scroll", parallaxEffect);
      parallaxEffect();
    }
    parallax();
  });
}

//-----------------------------------------------------------//

//Googleマップを埋め込む//
//→html.cssで対応//
//-----------------------------------------------------------//

//ロード画面//

$(function () {
  $(window).on("load", function () {
    $(".loader").delay(500).fadeOut(500);
    $(".loader-bg").delay(800).fadeOut(700);
  });
  setTimeout(function () {
    $(".loader-bg").fadeOut(500);
  }, 5000);
});
