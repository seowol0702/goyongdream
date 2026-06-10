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
