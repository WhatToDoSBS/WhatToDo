# WhatToDo 뭐하Gee?
#### 다양한 할 거리(웹툰, 게임)를 랜덤으로 추천해주는 웹페이지    

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
![image](https://user-images.githubusercontent.com/91525736/159208418-9c7d327f-db46-47c7-921e-913a33e47e1e.png)

![image](https://user-images.githubusercontent.com/91525736/159208442-3890b458-c000-4a89-9a96-9e745fae2311.png)

## Webtoon Page
![image](https://user-images.githubusercontent.com/91525736/159208516-45be170f-2c1a-4743-b185-773cdfbde43b.png)

![image](https://user-images.githubusercontent.com/91525736/159209009-cbc5cbd9-4d4c-46b8-9939-7234568c1336.png)
## Board Page
![image](https://user-images.githubusercontent.com/91525736/159208620-062f160b-420f-4144-8cce-d3f4c5f853c1.png)

![image](https://user-images.githubusercontent.com/91525736/159209098-57c0d7af-c007-437a-b40c-406fc742fc78.png)
## Game Page
![image](https://user-images.githubusercontent.com/91525736/159208475-28277789-edce-4cae-b6b9-c340c805a46c.png)

![image](https://user-images.githubusercontent.com/91525736/159208986-33780339-cf0b-409a-8169-145fb5c813f6.png)
## Movie Page
![image](https://user-images.githubusercontent.com/91525736/159208566-05efd8b7-e526-40fa-82d4-b9a5f49a075c.png)
## My Page
로컬 로그인을 포함한 소셜 로그인 구현, interceptor와 cookie를 활용한 자동로그인, cookie를 이용한 아이디&비밀번호 찾기, 회원가입에 우편번호 API 활용 및 BOOTSTRAP 일부 활용
내정보 페이지 프로필 사진변경, 비밀번호 변경, 좋아요&댓글 조회
![image](https://user-images.githubusercontent.com/91525736/159208814-08b9a5b7-c420-4060-9873-e4529a8a7a36.png)

![image](https://user-images.githubusercontent.com/91525736/159208845-fcb909b0-3feb-40d4-8e6f-564e2f05808e.png)

## Login Page
![image](https://user-images.githubusercontent.com/91525736/159208879-7aeba6c2-6748-4486-a226-07f9f7e1daf3.png)
