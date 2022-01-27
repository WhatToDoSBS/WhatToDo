CREATE TABLE freeboard(
                          iboard INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                          icategory INT UNSIGNED NOT NULL,
                          title VARCHAR(100) NOT NULL,
                          ctnt TEXT NOT NULL,
                          iuser INT UNSIGNED NOT NULL,
                          hits INT UNSIGNED DEFAULT 0,
                          isdel TINYINT UNSIGNED DEFAULT 0,
                          rdt DATETIME DEFAULT CURRENT_TIMESTAMP,
                          mdt DATETIME DEFAULT CURRENT_TIMESTAMP,
                          lastip varchar(15)
);

CREATE TABLE menu_category(
                              icategory INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                              nm VARCHAR(10) NOT NULL,
                              nmval VARCHAR(20) NOT NULL,
                              orderby TINYINT NOT NULL DEFAULT 0
);

INSERT INTO menu_category (nm)
VALUES
('게임'),
('넷플릭스'),
('유튜브'),
('게시판');

INSERT INTO menu_category (nmval)
VALUES
    ('game'),
    ('netflix'),
    ('youtube'),
    ('list');

CREATE TABLE t_user
(
    iuser      INT UNSIGNED AUTO_INCREMENT,
    uid        VARCHAR(15)  NOT NULL,
    upw        VARCHAR(100) NOT NULL,
    nm         VARCHAR(10)  NOT NULL,
    gender     TINYINT      NOT NULL CHECK ( gender IN (0, 1, 2, 3) ),
    profileimg VARCHAR(100),
    rdt        DATETIME DEFAULT CURRENT_TIMESTAMP,
    mdt        DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PRIMARY KEY (iuser),
    CONSTRAINT UNIQUE (uid)
);

CREATE TABLE rating_Game(
                            rnum INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                            gameNm VARCHAR(100),
                            gameRating VARCHAR(10),
                            gameRank VARCHAR(10)
);

// 게임메카 게임랭크 담는 DB
CREATE TABLE meca_rankdb (
                             irank INT AUTO_INCREMENT,
                             rankNum VARCHAR(10),
                             rankNm VARCHAR(100),
                             company VARCHAR(50),
                             PRIMARY KEY (irank)
);

// 게임메카 추가
ALTER TABLE meca_rankdb ADD COLUMN genre VARCHAR(10);
ALTER TABLE meca_rankdb ADD COLUMN cash VARCHAR(10);


// 스팀 크롤링 DB
CREATE TABLE steam_rankdb (
                              irank INT AUTO_INCREMENT,
                              rankNum VARCHAR(10),
                              rankNm VARCHAR(100),
                              PRIMARY KEY (irank)
);

// 게임 평점 크롤링 DB
CREATE TABLE rating_Game(
                            rnum INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                            gameNm VARCHAR(100),
                            gameRating VARCHAR(10),
                            gameRank VARCHAR(10)
);

// 웹툰 DB
CREATE TABLE webtoon (
                         wnum INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                         nm VARCHAR(50) NOT NULL,
                         writer VARCHAR(20) NOT NULL,
                         rating VARCHAR(10),
                         img VARCHAR(300),
                         weekend VARCHAR(10),
                         homepage INT DEFAULT 1
);