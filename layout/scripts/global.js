$(function () {
  $(".user_box").on("click", function () {
    var html = "";
    html += '<div class="user_modal_container">';
    html += '<div class="modal_content">';
    html += '<div class="modal_header">';
    html += "<p>modyfikowanie informacji o użytkowniku</p>";
    html += "</div>";
    html += '<div class="modal_card">';
    html +=
      '<input type="text" placeholder="" class="search_form username" value="Nazwa" />';
    html +=
      '<input type="text" placeholder="" class="search_form password" value="hasło" />';
    html += '<div class="modal_footer">';
    html += '<button class="cancel modify_btn">Anuluj</button>';
    html += '<button class="agree modify_btn">modyfikować</button>';
    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";

    $("body").append(html);
    $(".user_modal_container").show();

    $(".modify_btn").on("click", function () {
      $(".user_modal_container").hide();
      $(".user_modal_container").remove();
    });
  });
});
