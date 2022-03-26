$(function () {
  /** when click profile button */
  $(".user_box").on("click", function () {
    var html = "";
    html += '<div class="user_modal_container">';
    html += '<div class="modal_content">';
    html += '<div class="modal_header">';
    html += "<p>EDYCJA PROFILU</p>";
    html += "</div>";
    html += '<div class="modal_card">';

    html += '<div class="user_info_field">';
    html += "<p>Nazwa Użytkownika / login</p>";
    html += '<input type="text" class="search_form username" value="vlady" />';
    html += "</div>";

    html += '<div class="user_info_field">';
    html += "<p>Imię i nazwisko</p>";
    html +=
      '<input type="text" class="search_form user_fullname" value="Vladyslav Parkhomenko" />';
    html += "</div>";

    html += '<div class="user_info_field">';
    html += "<p>Email</p>";
    html +=
      '<input type="text" class="search_form email" value="vlady@gmail.com" />';
    html += "</div>";
    html += '<div class="user_info_field">';
    html += "<p>Nowe hasło</p>";
    html +=
      '<input type="password" class="search_form password" value="hasło" />';
    html += "</div>";

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

  /**  when click log out button */
  $(".logout_box").on("click", function () {
    var html = "";
    html += '<div class="logout_modal_container">';
    html += '<div class="modal_content">';
    html += '<div class="modal_header">';
    html += '<img src="../../images/sysadmin/warn.svg" alt="warn" />';
    html += "</div>";
    html += '<div class="modal_card">';
    html += '<div class="warn_info">';
    html += "<h1>CZY NA PEWNO CHCESZ SIĘ WYLOGOWAĆ?</h1>";
    html += "</div>";
    html += '<div class="modal_footer">';
    html += '<button class="cancel modify_btn">Anuluj</button>';
    html += '<button class="agree modify_btn">WYLOGUJ</button>';
    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";

    $("body").append(html);
    $(".logout_modal_container").show();
    $(".logout_modal_container .cancel").on("click", function () {
      $(".logout_modal_container").hide();
      $(".logout_modal_container").remove();
    });
    $(".logout_modal_container .agree").on("click", function () {
      $(".logout_modal_container").hide();
      $(".logout_modal_container").remove();
      // window.location.href = "../../index.html";
    });
  });
});
