---
layout: pages
title: "About"
permalink: /about/
author_profile: false
sidebar:
  nav: home
---
<br><br>
<p><div style="border:#aaa 1px solid;border-radius:50%;overflow:hidden;width:10%;height:auto;">
  <img src="/assets/images/account.png" width="100%" style="user-select:none;-webkit-user-drag:none;">
</div></p>

아성가진리
Asungajinli

## About Me
<p></p>
<div class = "div1" markdown="1">
  <p>👤 이성진</p>
  🏫 경희대학교<br>
  📝 전자공학과<br>
  🎓 4학년<br>
  💼 학생입니다.<br><br>
</div>

<div class = "div2" markdown="1">
  <p>👤 LEE SUNGJIN</p>
  🏫 Kyunghee University<br>
  📝 Electronic Engineering<br>
  🎓 Senior<br>
  💼 Student.<br><br>
</div>

#### 🌐&nbsp;Contact Me

<a href="https://github.com/asungajinli" class="contact" target="_blank" rel="me">
  <i class="fab fa-fw fa-github" aria-hidden="true"></i>
</a>
&nbsp;&nbsp;
<a href="https://instagram.com/s_din.99" class="contact" target="_blank" rel="me">
  <i class="fab fa-fw fa-instagram" aria-hidden="true"></i>
</a>
&nbsp;&nbsp;
<span class="contact modal-link" data-target="myModal" rel="me">
  <i class="fas fa-fw fa-comment" style="cursor:pointer;" aria-hidden="true"></i>
</span>
&nbsp;&nbsp;
<a href="https://www.linkedin.com/in/asungajinli" class="contact" target="_blank" rel="me">
  <i class="fab fa-fw fa-linkedin" aria-hidden="true"></i>
</a>
&nbsp;&nbsp;
<a href="mailto:ssjj3552@gmail.com" class="contact" style="margin-bottom:8rem;" rel="me">
  <i class="fas fa-fw fa-envelope-square" aria-hidden="true"></i>
</a>


## About Blog
#### 🅰️&nbsp;Font
<a href="[/copyright/](https://sunn.us/suit/)" style="text-decoration:none;" target="_blank">SUIT</a>
<!--Spoqa Han Sans Neo-->

#### 🎨&nbsp;Color
<p>
<span class = "box" style="display: inline-block; width: 25px; text-align: center;" markdown = "1">
  <span style="color:#1C192B">■</span>
&nbsp;#1C192B&nbsp;&nbsp;|&nbsp;&nbsp;Text</p>
<p>
<span class = "box" style="display: inline-block; width: 25px; text-align: center;" markdown = "1">
  <span style="color:#24A091">■</span>
&nbsp;#24A091&nbsp;&nbsp;|&nbsp;&nbsp;Green</p>
<p>
<span class = "box" style="display: inline-block; width: 25px; text-align: center;" markdown = "1">
  <span style="color:#D1F951">■</span>
&nbsp;#D1F951&nbsp;&nbsp;|&nbsp;&nbsp;Yellow</p>
<p>
<span class = "box" style="display: inline-block; width: 25px; text-align: center;" markdown = "1">
  <span style="color:#F0383B">■</span>
&nbsp;#F0383B&nbsp;&nbsp;|&nbsp;&nbsp;Red</p>
<p>
<span class = "box" style="display: inline-block; width: 25px; text-align: center;" markdown = "1">
  <span style="color:#6454ED">■</span>
&nbsp;#6454ED&nbsp;&nbsp;|&nbsp;&nbsp;Blue</p>

#### <i class="fas fa-fw fa-copyright" aria-hidden="true"></i> Copyright
Copyright 2023. Lee Sung Jin All pictures cannot be copied without permission.<br>
<a href="/copyright/" style="text-decoration:none;" rel="nofollow noopener noreferrer"> Copyright Attribution</a>

---

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
$(document).ready(function() {
  // 모달 링크 클릭 이벤트 처리
  $(".modal-link").click(function(event) {
    imgSrc='/images/to/KakaoAddFriend.png'
    imgAlt = 'QR코드를 찍으세요';
    $('#modalImg').attr('src', imgSrc);
    $('#caption').text(imgAlt);
    $('#myModal').fadeIn();
    adjustModalSize();
    $(document).mousedown(function(e) {
        var modalContent = $('.modal-content');
        if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
            $('#myModal').fadeOut('fast');
        }
    });
  });
  // 모달 닫기 버튼 클릭 이벤트 처리
  $('.close').on('click', function() {
      $('#myModal').fadeOut('fast');
  });
});

</script>