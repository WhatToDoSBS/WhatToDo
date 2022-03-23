# WhatToDo 뭐하Gee?
#### 다양한 여가활동(웹툰, 게임, 영화)를 랜덤으로 추천해주는 웹페이지    

# 구현 기능
회원가입, 로그인&로그아웃(카카오 및 네이버 연동 로그인), My page(좋아요&리뷰 기록 확인, 정보 수정, 비밀번호 변경)
게시판 : 게시글&댓글 작성 및 수정, 삭제, 좋아요 기능, 페이징(javascript)
리뷰 : 작성 및 수정, 삭제, 좋아요 기능, 모달창 구현


## 기술 스택
**Java, Spring Framework, Javascript, Rest API, Ajax 통신, JSP/JSTL , Maria DB, Bootstrap, Git,HTML&CSS**

### Java/Spring Framework
Jsoup을 활용한 크롤링 및 Database CRUD 작업, RestAPI 구현, 영화진흥위원회 오픈 API&네이버 영화검색 API 활용, Random 로직구현
Mybatis, tiles, Servlet, taglib, hikari, jbcrypt 등 다양한 라이브러리 활용

### JavaScript/HTML&CSS
KaKao&NAVER Login, Ajax 통신 활용, Youtube api 활용, RestAPI 구현, Swiper library 사용(슬라이더), BootStrap 사용

### Maria DB
크롤링 데이터 CRUD로 데이터베이스에 활용, Select문에서 ORDER BY RAND()를 활용해 랜덤하게 뿌려줌.
Mybatis foreach 활용, JOIN, DISTINCT, LIMIT 활용

## Main Page

전체 프로젝트 기능을 요약, 팀 멤버 소개
![image](https://user-images.githubusercontent.com/91525736/159208418-9c7d327f-db46-47c7-921e-913a33e47e1e.png)



<br>
<br>

유튜브api 활용 실시간 인기 영상 구현
![image](https://user-images.githubusercontent.com/91525736/159208442-3890b458-c000-4a89-9a96-9e745fae2311.png)
@@ -36,9 +35,8 @@ Mybatis foreach 활용, JOIN, DISTINCT, LIMIT 활용

크롤링과 랜덤 로직을 통한 장르별 추천 웹툰 구현
![image](https://user-images.githubusercontent.com/91525736/159208516-45be170f-2c1a-4743-b185-773cdfbde43b.png)



<br>
<br>

선택 시 모달창에 상세보기와 바로가기, 좋아요, 댓글 구현
![image](https://user-images.githubusercontent.com/91525736/159209009-cbc5cbd9-4d4c-46b8-9939-7234568c1336.png)
@@ -47,9 +45,8 @@ Mybatis foreach 활용, JOIN, DISTINCT, LIMIT 활용

기본 게시판, 자바스크립트로 구현
![image](https://user-images.githubusercontent.com/91525736/159208620-062f160b-420f-4144-8cce-d3f4c5f853c1.png)



<br>
<br>

페이징, 검색 구현
![image](https://user-images.githubusercontent.com/91525736/159209098-57c0d7af-c007-437a-b40c-406fc742fc78.png)
@@ -58,9 +55,8 @@ Mybatis foreach 활용, JOIN, DISTINCT, LIMIT 활용

크롤링과 랜덤 로직을 통한 조건별 추천 게임 구현
![image](https://user-images.githubusercontent.com/91525736/159208475-28277789-edce-4cae-b6b9-c340c805a46c.png)



<br>
<br>

선택 시 모달창에 상세보기와 바로가기, 좋아요, 댓글 구현
![image](https://user-images.githubusercontent.com/91525736/159208986-33780339-cf0b-409a-8169-145fb5c813f6.png)
@@ -75,9 +71,8 @@ API를 통한 최신 영화정보를 불러와서 랜덤으로 화면에 구현
로컬 로그인을 포함한 소셜 로그인 구현, interceptor와 cookie를 활용한 자동로그인, cookie를 이용한 아이디&비밀번호 찾기, 회원가입에 우편번호 API 활용 및 BOOTSTRAP 일부 활용
내정보 페이지 프로필 사진변경, 비밀번호 변경, 좋아요&댓글 조회
![image](https://user-images.githubusercontent.com/91525736/159208814-08b9a5b7-c420-4060-9873-e4529a8a7a36.png)



<br>
<br>

로그인 한 아이디의 좋아요 목록 & 각각 매핑
![image](https://user-images.githubusercontent.com/91525736/159208845-fcb909b0-3feb-40d4-8e6f-564e2f05808e.png)
## Login Page
카카오, 네이버API 활용 로그인 구현
![image](https://user-images.githubusercontent.com/91525736/159208879-7aeba6c2-6748-4486-a226-07f9f7e1daf3.png)

## DB 구성도
![image](https://user-images.githubusercontent.com/91525736/159648453-76000d25-9ae8-4e85-992d-e7b9aad03209.png)

## 전체 페이지 구성도
![image](https://user-images.githubusercontent.com/91525736/159648545-4e856f5a-28e3-497e-adfb-d5d26c054546.png)
