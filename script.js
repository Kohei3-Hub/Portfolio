//ハンバーガーメニューボタン切り替え
const navSp = document.querySelector('.nav_sp');
const menuBtnOpen = document.querySelector('.menu_btn_open');
const menuBtnClose = document.querySelector('.menu_btn_close');
const haburgerMenu = document.querySelector('.hamburger_menu');
navSp.addEventListener('click', () =>{
  menuBtnOpen.classList.toggle('active');
  menuBtnClose.classList.toggle('active');
  haburgerMenu.classList.toggle('active');

  $('.hamburger_menu a').click(function() {
      $('.menu_btn_open').removeClass('active');
      $('.menu_btn_close').removeClass('active');
      $('.hamburger_menu').removeClass('active');
  })
});


//カルーセル(広告バナー)
$('.Sp_veiw').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.Sp_carousel_menu',
});
$('.Sp_carousel_menu').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  centerMode: true,
  centerPadding: '20%',
  focusOnSelect: true,
  asNavFor: '.Sp_veiw',
});

// お問い合わせフォームの入力チェック
$('#submit').on('click', function (event) {
  // formタグによる送信を拒否
  event.preventDefault();

  // 入力チェックをした結果をresultに格納
  let result = inputCheck();
});

$('#name').blur(function () {
  inputCheck();
});
$('#furigana').blur(function () {
  inputCheck();
});
$('#email').blur(function () {
  inputCheck();
});

function inputCheck() {
  // エラーのチェック結果
  let result;

  // エラーメッセージのテキスト
  let message = '';

  // エラーがなければfalse、エラーがあればtrue
  let error = false;
  // お名前のチェック
  if ($('#name').val() == '') {
    // エラーあり
    $('#name').css('background-color', '#f79999');
    error = true;
    message += 'お名前を入力してください。\n';
  } else {
    // エラーなし
    $('#name').css('background-color', '#ffffff');
  }

  //フリガナのチェック
  if ($('#furigana').val() == '') {
    $('#furigana').css('background-color', '#f79999');
    error = true;
    message += 'お名前を入力してください。\n';
  } else {
    $('#furigana').css('background-color', '#ffffff');
  }
  //emailのチェック
  if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1) {
    $('#email').css('background-color', '#f79999');

    error = true;
    message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
  } else {
    $('#email').css('background-color', '#ffffff');

    //エラー有無で送信ボタン切り替え
    if (error == true) {
      $('#submit').attr('src', 'images/btn2_error.png');
    } else {
      $('#submit').attr('src', 'images/btn2.png');
    }
  }
}

//サムネイル画像を切り替え
$(function () {
  $('.Pc_menu img').on('click', function () {
    img = $(this).attr('src');
    //クラス付け替え
    $('.Pc_menu li').removeClass('current');
    $('this').parent().addClass('current');
    //fadeOut後にsrc変更してfadeIn
    $('.Pc_veiw img').fadeOut(300, function () {
      $('.Pc_veiw img').attr('src', img).on('load', function () {
        $(this).fadeIn(300);
      });
    });
  });
});