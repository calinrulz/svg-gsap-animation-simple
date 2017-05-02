var xmlns = "http://www.w3.org/2000/svg";
var select = function(s) {
  return document.querySelector(s);
};
var selectAll = function(s) {
  return document.querySelectorAll(s);
};
var container = select('.container');

// center the container cos it's pretty an' that
TweenMax.set(container, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  xPercent: -50,
  yPercent: -50
});
TweenMax.set('svg', {
  visibility: 'visible'
});


var tl = new TimelineMax({repeat: -1});   // {repeat: -1}
tl.to('#gradPattern', 5, {
  attr: {
    x: 700
  },
  ease: Linear.easeNone
})
