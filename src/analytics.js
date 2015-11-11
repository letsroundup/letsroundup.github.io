+function(l,y,t,i,c,s) {
  l['LocalyticsGlobal'] = i;
  l[i] = function() { (l[i].q = l[i].q || []).push(arguments) };
  l[i].t = +new Date;
  (s = y.createElement(t)).type = 'text/javascript';
  s.src = '//web.localytics.com/v3/localytics.js';
  (c = y.getElementsByTagName(t)[0]).parentNode.insertBefore(s, c);
  ll('init', '2a8c1a0ed02b9a3aa68270e-74ab6140-8727-11e5-9c3c-003e57fecdee', {} /* Options */);
}(window, document, 'script', 'll');
