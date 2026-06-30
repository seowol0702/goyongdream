/* 고용드림 홈페이지 공통 스크립트 */
(function(){
  // 모바일 메뉴 토글
  var toggle=document.querySelector('.nav-toggle');
  var menu=document.querySelector('.nav-menu');
  if(toggle&&menu){
    toggle.addEventListener('click',function(){menu.classList.toggle('open');});
  }
  // 현재 페이지 활성 메뉴 표시
  var path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-menu a[data-page]').forEach(function(a){
    if(a.getAttribute('data-page')===path)a.classList.add('active');
  });

  // 하단 고정 CTA 버튼 (신청 페이지 제외, 전 페이지 공통)
  if(path!=='apply.html'){
    var fc=document.createElement('a');
    fc.href='apply.html';
    fc.className='float-cta';
    fc.innerHTML='1분 무료 진단 신청 <span aria-hidden="true">→</span>';
    document.body.appendChild(fc);
  }
})();

/* 고도화: 스크롤 리빌 + 숫자 카운트업 */
(function(){
  var IO = window.IntersectionObserver;

  function countUp(el){
    var t=el.firstChild;
    if(!t||t.nodeType!==3) return;
    var m=t.nodeValue.replace(/,/g,'').match(/\d+/);
    if(!m) return;
    var target=parseInt(m[0],10);
    if(!target||target>100000) return;
    var dur=1100, st=null;
    function step(ts){
      if(!st)st=ts;
      var p=Math.min((ts-st)/dur,1);
      var eased=Math.floor(target*(1-Math.pow(1-p,3)));
      t.nodeValue=eased.toLocaleString('en-US');
      if(p<1)requestAnimationFrame(step);
      else t.nodeValue=target.toLocaleString('en-US');
    }
    t.nodeValue='0';
    requestAnimationFrame(step);
  }

  var revealEls=[].slice.call(document.querySelectorAll('.head, .card, .report-mock, .assure, .tm-card, .stage, .cmp-card, .divider-cta, .lead-strip'));
  var countEls=[].slice.call(document.querySelectorAll('.cu, .benefit-amount, .case-amount'));

  if(!IO){
    revealEls.forEach(function(el){el.classList.add('in');});
    countEls.forEach(countUp);
    return;
  }
  revealEls.forEach(function(el){ if(!el.classList.contains('reveal')) el.classList.add('reveal'); });
  var ro=new IO(function(es){es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); ro.unobserve(e.target);} });},{threshold:.12,rootMargin:'0px 0px -7% 0px'});
  revealEls.forEach(function(el){ro.observe(el);});

  var co=new IO(function(es){es.forEach(function(e){ if(e.isIntersecting){ countUp(e.target); co.unobserve(e.target);} });},{threshold:.4});
  countEls.forEach(function(el){co.observe(el);});
})();
