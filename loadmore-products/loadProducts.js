
$(".tab").on("click","li", function (e) {
  e.preventDefault();
  var idx = $(this).index();
  $(this).siblings().removeClass("active");
  $(this).addClass("active");
  $(this).parents(".wrap").find(".panel").eq(idx).siblings().removeClass("current");
  $(this).parents(".wrap").find(".panel").eq(idx).addClass("current");
})

var products = [
  {
    img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
    name: '珂兰 黄金手 ed猴哥款',
    price: '￥405.00'
  },{
    img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
    name: '珂兰 黄金转运珠2 d猴哥款',
    price: '￥100.00'
  },{
    img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
    name: '珂兰 黄金手链 3D猴哥款',
    price: '￥45.00'
  }
];

function getProdHtml(prod){
  var html = '';
  html += '<li class="prod">';
  html +=   '<div class="cover"><a class="btn" href="">立即抢购</a></div>';
  html +=    '<a href="#">';
  html +=      '<img src="'+prod.img+'" alt="">';
  html +=      '<div class="prod-name">'+prod.name+'</div>';
  html +=      '<div class="prod-price">'+prod.price+'</div>';
  html +=    '</a>';
  html += '</li>';
  return html;
}

$('.btn-add').on('click', function(e){
  e.preventDefault();
  $.each(products, function(idx, prod){
    var html = getProdHtml(prod);
    $('.prod-ct').append(html);
  });
});

$('.prod-ct').on('mouseenter', '.prod', function(e){
  $(this).addClass('hover');
});
$('.prod-ct').on('mouseleave','.prod', function(e){
  $(this).removeClass('hover');
});

