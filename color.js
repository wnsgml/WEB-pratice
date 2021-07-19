// 객체에 있는 함수는 메소드 라고 한다.
var Link = {
  setColor:function (color) {
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while (i < alist.length) {
    //     alist[i].style.color = color;
    //     i = i + 1;
    //   }
    $('a').css('color',color);
    }
}
var Body = {
  setbackgroundsetColor:function (color) {
      //document.querySelector('body').style.backgroundColor = color;
      $('body').css('backgroundColor',color);
  },
  setColor:function (color) {
      //document.querySelector('body').style.color = color;
      $('body').css('color',color);
  }
}
function nightDayhandler (self) {
  var target = document.querySelector('body');
  if(self.value === 'night') {
    Body.setbackgroundsetColor('black');
    Body.setColor('white');
    self.value = 'day';

    Link.setColor('powderblue');
  }
  else {
    Body.setbackgroundsetColor('white');
    Body.setColor('black');
    self.value = 'night';

    Link.setColor('blue');
  }
}
