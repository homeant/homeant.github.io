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
          var {title, permalink} = hit;
          if (title) {
            console.log(hit);
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
