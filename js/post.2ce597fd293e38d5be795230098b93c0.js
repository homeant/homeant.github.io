// js/post.js
$(function() {
  let elConList = document.getElementsByClassName("highlight");
  $(".highlight div table").each((index, el) => {
    let buttonElement = $(`<div class='code-copy-warp'><button class='code-copy-btn'><i class="ti-files"></i><span>copy</span></button></div>`);
    $(el).before(buttonElement);
  });
  new ClipboardJS(".code-copy-btn", {
    text: function(trigger) {
      let preEl = $(trigger).parent().next("table").find("pre:eq(1)");
      return preEl[0].innerText;
    }
  });
  $(".highlight").hover(function(e) {
    $(e.currentTarget).find(".code-copy-warp").show();
  }, function(e) {
    $(e.currentTarget).find(".code-copy-warp").hide();
  });
});
