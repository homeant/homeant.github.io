// ns-params:@params
var algolia = {apiKey: "e37a948836695f8f15a1e05c533131a2", appId: "2SZB8KTTSW", indexName: "prod_tianhui.xin"};

// js/app.js
var {appId, indexName, apiKey} = algolia;
var searchClient = algoliasearch(appId, apiKey);
var initSearch = () => {
  const search = instantsearch({
    indexName,
    searchClient
  });
  search.addWidgets([
    instantsearch.widgets.searchBox({
      container: "#search-box"
    }),
    instantsearch.widgets.hits({
      container: "#search-hits",
      templates: {
        item: (hit) => {
          var {title, permalink, author, tags, summary, date, kind} = hit;
          if (title && kind == "page") {
            if (window.location.pathname.indexOf("/search") == 0) {
              return `<div class="single-blog-post mb-5">
    <a class="post-title" href="${permalink}"><h3>${title}</h3></a>
    <div class="post-meta">
        <div class="post-date"><i class="ti-timer"></i>${getDateStr(date * 1e3)}</div>
        ${author ? `<a class="post-author" href="#">${author}</a>` : ""}
    </div>    
    <div class="post-content">${summary}</div>
    <div class="post-tools">
        <a class="btn btn-primary mt-3" href="${permalink}">\u9605\u8BFB\u66F4\u591A</a>
    </div>
</div>`;
            }
            return `<a href="${permalink}" target="_blank">${title}</a>`;
          }
          return null;
        },
        empty: null
      }
    })
  ]);
  search.start();
};
function getDateStr(time) {
  var data = new Date(time);
  return data.getFullYear() + "-" + (+data.getMonth() + 1) + "-" + data.getDate();
}
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?e3d07aa08825ec20434c12c3591881c2";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
$(function() {
  if ($("#search-box").length > 0) {
    initSearch();
  }
  $(".preloader").fadeOut(100);
  $(".main-header-area").sticky();
  ScrollUp.init(".scrollUp", {
    classes: {
      init: "scrollUp-init",
      show: "scrollUp-show",
      hide: "scrollUp-hide"
    }
  });
  var table = $(".highlight div table");
  $(table).each((i, t) => {
    var pre = $(t).find("tbody tr td:first-child pre");
    $(pre).css({position: "absolute"});
    var lastPre = $(t).find("tbody tr td:last-child pre");
    $(lastPre).css({marginLeft: pre.width() + "px"});
  });
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: false
  });
});
