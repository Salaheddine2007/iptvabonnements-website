(function(){
  var b=document.getElementById('burger'),m=document.getElementById('mnav');
  if(b&&m){b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false')});
    m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){m.classList.remove('open');b.setAttribute('aria-expanded','false')})})}
  document.querySelectorAll('.tab').forEach(function(t){t.addEventListener('click',function(){
    document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('on');x.setAttribute('aria-selected','false')});
    document.querySelectorAll('.plans').forEach(function(p){p.classList.remove('on');p.hidden=true});
    t.classList.add('on');t.setAttribute('aria-selected','true');
    var p=document.getElementById('plans-'+t.dataset.tab);if(p){p.hidden=false;p.classList.add('on')}
  })});
  if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);
    var el=e.target,to=+el.dataset.count,suf=el.dataset.suffix||'',t0=null;
    function step(ts){t0=t0||ts;var k=Math.min(1,(ts-t0)/1400);el.textContent=Math.round(to*(1-Math.pow(1-k,3))).toLocaleString('nl-NL')+suf;if(k<1)requestAnimationFrame(step)}
    requestAnimationFrame(step)})},{threshold:.5});
  document.querySelectorAll('[data-count]').forEach(function(el){io.observe(el)});
})();
