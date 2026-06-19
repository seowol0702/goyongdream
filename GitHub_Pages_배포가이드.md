# 고용드림 홈페이지 — GitHub Pages 무료 배포 가이드

> 이 폴더(`goyongdream_website`)를 GitHub에 올리면 **무료로 호스팅**되고, 도메인만 연결하면 네이버·구글 검색에도 노출시킬 수 있습니다. 별도 호스팅 비용이 들지 않습니다.

---

## 1. 준비물
- GitHub 계정 (무료) — github.com 가입
- 이 폴더 전체 (`index.html` 등 8개 페이지 + `css/` + `js/`)

---

## 2. 배포 순서 (약 10분)

1. GitHub 로그인 → 우상단 **+ → New repository**
2. Repository name 입력 (예: `goyongdream`) → **Public** 선택 → **Create repository**
3. 만들어진 저장소에서 **Add file → Upload files**
4. 이 폴더 안의 **모든 파일·폴더를 드래그**해서 업로드 → **Commit changes**
   - ⚠️ `index.html`이 최상위(루트)에 있어야 합니다. 폴더째로 올리지 말고 **내용물**을 올리세요.
5. 상단 **Settings → 좌측 Pages**
6. **Source: Deploy from a branch** → Branch: **main** / 폴더: **/(root)** → **Save**
7. 1~2분 뒤 `https://(아이디).github.io/goyongdream/` 주소로 사이트가 열립니다.

---

## 3. 도메인 연결 (선택, 검색노출용)

1. 도메인 구입 (가비아·후이즈 등에서 `.com`/`.co.kr` 연 1~2만원대)
2. GitHub **Settings → Pages → Custom domain** 에 구입한 도메인 입력 → Save
3. 도메인 업체 DNS 설정에서 아래 추가:
   - `A` 레코드 4개 → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - 또는 `CNAME` → `(아이디).github.io`
4. GitHub Pages에서 **Enforce HTTPS** 체크 (무료 SSL 자동 적용)

---

## 4. 검색노출 (네이버·구글)

도메인 연결 후:
- **네이버 서치어드바이저**(searchadvisor.naver.com) → 사이트 등록 → 소유확인 → 사이트맵 제출
- **구글 서치콘솔**(search.google.com/search-console) → 도메인 등록 → 색인 요청
- 각 페이지에 이미 `description`·`keywords`·`og:` 메타태그가 들어가 있어, 등록만 하면 페이지별로 잡힙니다.

> 팁: 공지·블로그에 글을 꾸준히 올릴수록 검색 유입이 늘어납니다. (정적 사이트에서는 글 추가 시 `notice.html`에 항목을 추가하고 `post.html`을 복제해 글을 만들면 됩니다. 글 관리가 잦아지면 아임웹/카페24 게시판 기능이 더 편합니다.)

---

## 5. 게시 전 마지막 체크리스트
- [ ] 푸터·신청폼의 `000-0000-0000` → 고용드림 대표 연락처로 교체 (8개 파일 전체)
- [ ] `apply.html`의 `여기에_고용드림_새_웹훅_URL_붙여넣기` → 구글시트 웹훅 URL로 교체
- [ ] (선택) 협업 섹션의 "전문 노무법인/세무법인" → 실제 제휴 법인명 (확정 시)
- [ ] 지원금 금액·요건 최신 기준 검토

---

## 6. 수정 방법
- 색상·폰트: `css/style.css` 의 `:root` 변수만 바꾸면 전체 사이트에 일괄 적용됩니다.
- 메뉴 추가: 각 페이지 상단 `<ul class="nav-menu">` 와 푸터 메뉴에 항목 추가.
- 연락처 일괄 교체: 전체 파일에서 `000-0000-0000` 찾아 바꾸기.
