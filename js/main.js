var logoEl = document.querySelector('.logo-animation');
var pathEls = document.querySelectorAll('.logo-animation path:not(.icon-curve)');
var innerWidth = window.innerWidth;
var maxWidth = 740;
var logoScale = innerWidth <= maxWidth ? innerWidth / maxWidth : 1;
var logoTimeline = anime.timeline();

logoEl.style.transform = 'translateY(50px) scale('+logoScale+')';

for (var i = 0; i < pathEls.length; i++) {
  var el = pathEls[i];
  el.setAttribute('stroke-dashoffset', anime.setDashoffset(el));
}

logoTimeline
  .add({
  targets: '.dot-e',
  translateX: [
    { value: -600, duration: 520, delay: 200, easing: 'easeInQuart' },
    { value: [-100, 0], duration: 500, delay: 1000, easing: 'easeOutQuart' }
  ],
  scale: [
    { value: [0, 1], duration: 200, easing: 'easeOutBack' },
    { value: 0, duration: 20, delay: 500, easing: 'easeInQuart' },
    { value: 1, duration: 200, delay: 1000, easing: 'easeOutQuart' },
    { value: 0, duration: 400, delay: 500, easing: 'easeInBack' }
  ],
  offset: 0
})
  .add({
  targets: '.dot-i',
  translateY: { value: [-200, 0], duration: 500, elasticity: 400 },
  scale: [
    { value: [0, 1], duration: 100, easing: 'easeOutQuart' },
    { value: 0, duration: 400, delay: 1400, easing: 'easeInBack' }
  ],
  delay: 1200,
  offset: 0
})
  .add({
  targets: '.fill.in',
  strokeDashoffset: {
    value: [anime.setDashoffset, 0],
    duration: 600,
    delay: function(el, i, t) { return 700 + ( i * 100 ); },
    easing: 'easeOutQuart'
  },
  stroke: {
    value: ['#FFF', function(el) { return anime.getValue(el.parentNode, 'stroke') } ],
    duration: 500,
    delay: 500,
    easing: 'easeInQuad'
  },
  opacity: {
    value: 0,
    duration: 1,
    delay: function(el, i, t) { return 1900 + ( i * 80 ); },
  },
  offset: 0
})
  .add({
  targets: '.fill.out',
  strokeDashoffset: [
    { value: [anime.setDashoffset, anime.setDashoffset], duration: 1890 },
    {
      value: [0, anime.setDashoffset],
      duration: 800,
      delay: function(el, i) { return (i * 80); },
      easing: 'easeInQuart'
    }
  ],
  offset: 0
})
  .add({
  targets: '.line.out',
  strokeDashoffset: {
    value: [0, anime.setDashoffset],
    duration: 1200,
    delay: function(el, i, t) { return 2500 + ( i * 100 ); },
    easing: 'easeInQuart'
  },
  strokeWidth: {
    value: [0, 2],
    delay: function(el, i, t) { return 2000 + ( i * 100 ); },
    duration: 200,
    easing: 'linear'
  },
  offset: 0
})
  .add({
  targets: '.icon',
  opacity: { value: 1, duration: 10, delay: 2800, easing: 'linear' },
  translateY: { value: 60, duration: 800 },
  delay: 4200,
  offset: 0
})
  .add({
  targets: '.icon-line',
  strokeDashoffset: [
    { value: [anime.setDashoffset, anime.setDashoffset], duration: 3000 },
    { value: 0, duration: 1200, easing: 'easeInOutQuart' }
  ],
  strokeWidth: {
    value: [8, 2],
    delay: 3000,
    duration: 800,
    easing: 'easeInQuad'
  },
  stroke: {
    value: ['#FFF', function(el) { return anime.getValue(el, 'stroke') } ],
    duration: 800,
    delay: 3400,
    easing: 'easeInQuad'
  },
  offset: 0
})
  .add({
  targets: ['.icon-text path', '.icon-text polygon'],
  translateY: [50, 0],
  opacity: { value: [0, 1], duration: 100, easing: 'linear' },
  delay: function(el, i, t) { return 4200 + ( i * 20 ); },
  offset: 0
});