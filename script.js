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
  if ($('#email').val() == '' || $('#email').val().indexof('@') == -1 || $('#email').val().indexof('.') == -1) {
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