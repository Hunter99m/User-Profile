var typed = new Typed(".multiple-text", {
    strings: ["Web Developer", "Game Designer", "Frontend Developer", "YouTuber", "Blogger"],
    typeSpeed: 100, 
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


const tilt = $('.boxs').tilt({scale:1.01});

//burger abhi banan nhi abhi banaya jayega is liye koi bhi ise remove mat karna//

burger = document.querySelector('.burger')   
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
     rightNav.classList.toggle('v-class-resp');
     navList.classList.toggle('v-class-resp');
     navbar.classList.toggle('h-nav-resp');
})


function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src', profile.getImageUr());
    $(".data").css("display","block");
    $(".g-signin2").css("display","none");
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert("You Have Been signed Out Successfully");
      $(".g-signin2").css("display","Block");
      $(".data").css("display","none");
    });
}