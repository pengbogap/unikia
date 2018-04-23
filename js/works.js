//ajax(
//    "get",
//    "data/works.php",
//    ""
//).then(data=>{
//        var ull=document.getElementById("list");
//        var html="";
//        for(let i in data){
//            var img=document.createElement("img");
//            var  src=data[i].limg;
//            console.log(img.src);
//            var id=data[i].id;
//            var src= data[i].limg;
//            html+=
//                `
//                  <li class="col-xs-12 col-sm-4 pro-l a${id}"><img src="${src}"></li>
//                `
//
//        }
//
//        ull.innerHTML=html;
//
//    })


//筛选
$("a").click(function (e) {
    e.preventDefault();
});
$(".pro-menu").on("click", "ul li a", function (e) {
    console.log($(".pro-l div"));
    $tar = $(e.target);
    console.log($tar);
    if ($tar.is("#all")) {
        $(".pro-l").css("display", "block");
        $(".websites").siblings().addClass("animated fadeIn");

    } else if ($tar.is("#websites")) {
        $(".websites").siblings().css("display", "none");
        $(".websites").css("display", "block");
        $(".websites").addClass("animated fadeIn");
    } else if ($tar.is("#appsdev")) {
        $(".appsdev").siblings().css("display", "none");
        $(".appsdev").css("display", "block");
        $(".appsdev").addClass("animated flipInX");

    }
    else if ($tar.is("#webdesign")) {
        $(".webdesign").siblings().css("display", "none");
        $(".webdesign").css("display", "block");
        $(".webdesign").addClass("animated bounceIn");

    }
    else if ($tar.is("#graphic")) {
        $(".graphic").siblings().css("display", "none");
        $(".graphic").css("display", "block");
        $(".graphic").addClass("animated bounceInLeft");

    }
    else if ($tar.is("#responsive")) {
        $(".responsive").siblings().css("display", "none");
        $(".responsive").css("display", "block");
        $(".responsive").addClass("animated flipInY");

    }
})
//end