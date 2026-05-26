## 🧑‍🎓Profile

- 이름 : 이윤태 (Yoontae Lee)
- 거주지: 서울특별시 관악구
- 생년월일 : 2002.10.16.
- 연락처 : 010-9755-3453
- 이메일 : yoont1016@gmail.com
- 정보
    - GitHub: https://github.com/yunttai
    - tistory: https://dldbsxo02.tistory.com/

---

## 📂Activity

### **명지대학교 정보통신공학전공 (2021. 03. ~ 2027. 02. / 졸업예정)**

- 명지대학교 정보보안동아리 MJSEC 회장 (2025.09.~)
    - 리버싱 / 웹해킹 스터디 멘토 진행
    - 명지대학교(MJSEC) / 한양대학교 에리카캠퍼스(HY-CS) 연합 보안 세미나 주최 (2025.10.12.)
        - adobe flash 파일 구조, 리버싱 세미나 진행
        - swf파일 압축해제 도구 개발
    - MJSEC 3/4기 모집 문제 제작 및 배포 (2025.11.)
    - 제 2회 MSG CTF 운영 및 문제 개발 (2025.07.~2025.11.)
        - MISC ‘상’ 문제 제작 - “CAPTCHA THE FLAG”
- 컴퓨터공학전공 현상원 교수님 학부연구생 (2025.02.~)
- 명지대학교 정보보안동아리 MJSEC 부회장 (2024.07.~2025.08.)
    - 제 1~2회 MJSEC CTF 문제 제작 및 운영
    - 제 1회 MSG CTF 문제 제작
- 육군 병장 만기 전역 (2023.07.16.)

### **화이트햇스쿨 3기, KITRI 주관 (2025.03.~2025.09. / 수료)**

- 공통교육, 침해대응/위협/포렌식, 심화교육 강의 수강
- 악성코드 분석 자동화 플랫폼 구축 프로젝트 진행 (2025.04.~2025.08.)

---

## 🛠️ Skills

### Programming

- Python
- C/C++
- JAVA
- SQL (MySQL / SQLite / MariaDB)

### Reverse Engineering

- x64/32dbg, ollydbg
- IDA
- jpexs
- GDB, pwndbg
- HxD
- jadx-gui

### Develop

- Secure coding
- Secure Tool
- Back-end - Django, FastAPI, Flask, Spring Boot
- Dev-Ops - Docker, nginx, Kubernetes
- GCP
- Selenium
- AI

---

## 🧾 Project

### 대표 프로젝트

#### 1. **YARAAI_Web**

- 기간: 2025.04.~2025.08.
- GitHub: https://github.com/YARAAI-Web/YARAAI_Web
- Tech Stack: FastAPI, Python, React, TypeScript, IDA MCP, CAPA, YARA, Suricata, VirusTotal, MITRE ATT&CK, CWE
- 한 줄 설명: PE 악성코드 파일을 업로드하면 정적/동적 분석, IDA MCP, CAPA, MITRE ATT&CK, CWE, VirusTotal 정보를 통합하고 YARA 룰과 Suricata 룰을 자동 생성하는 웹 기반 악성코드 분석 플랫폼.
- 담당 역할
    - FastAPI 기반 악성코드 분석 파이프라인 구성
    - PE 업로드 이후 패커 탐지, 언패킹, 정적/동적 분석, VirusTotal 조회, YARA 룰 생성, Suricata 룰 변환, 리포트 저장, Call Graph 생성 흐름 구현
    - IDA MCP, CAPA, CWE, 악성 판별 결과를 하나의 분석 JSON으로 통합
- 성과
    - 악성코드 분석 결과를 실제 탐지 룰로 연결
    - MITRE ATT&CK, CWE, VirusTotal, OpenAI API 기반 요약을 포함한 리포트 흐름 구성

#### 2. **Reagan**

- 기간: 2025.03.~
- GitHub: https://github.com/MJSEC-MJU/Reagan
- Tech Stack: Django, Django REST Framework, React, Selenium, Docker, GCP VM, Nginx, AI
- 한 줄 설명: URL Detection AI, Packet Analysis AI, Break Captcha AI로 구성된 3단계 악성 URL 탐지 시스템.
- 담당 역할
    - Packet Analysis AI 파트 담당
    - `run_site → CAPTCHA 판단 → run_packet/run_captcha → 최종 판정` 분석 요청 파이프라인 구성
    - packet 분석 결과를 브라우저 차단 판단에 반영
    - whitelist 모델과 skip 처리 로직을 통한 오탐 관리
- 성과
    - URL 1차 분석과 패킷 기반 심층 분석 결과를 결합
    - Packet 분석 AI f1-score 90% 이상 확보

#### 3. **ELDEN_RING**

- 기간: 진행 중
- GitHub: https://github.com/MJSEC-MJU/ELDEN_RING
- Tech Stack: Kubernetes, Istio, Falco, Prometheus, Grafana, Loki, GitHub Actions, Harness, Redis, GitOps
- 한 줄 설명: Kubernetes 기반 AI 대 AI 능동 방어 및 시큐어코딩 자동화 시스템.
- 담당 역할
    - Secure Coding Plane 담당
    - Recovery Assurance Plane 담당
    - Runtime Defense Plane에서 전달받은 CWE/취약 코드 위치 기반 정적 분석 및 LLM 패치 생성 구조 설계
    - 후보 이미지를 staging namespace에서 기동 검증, 회귀 테스트, 공격 재현 테스트, SLO 검증까지 수행하는 흐름 설계
- 성과
    - 공격 탐지 이후 자동 패치, 검증, 운영 승격으로 이어지는 보안제품 구조 연구

#### 4. **MSG_CTF_BACK**

- 기간: 2025.07.~2025.11.
- GitHub: https://github.com/MJSEC-MJU/MSG_CTF_BACK
- Tech Stack: Java 17, Spring Boot, MySQL, Redis, Redisson, JWT, Docker, Nginx
- 한 줄 설명: CTFd를 사용하지 않고 직접 개발한 Spring Boot 기반 CTF 운영 플랫폼 백엔드.
- 담당 역할
    - Signature 문제 인증 API 설계 및 구현
    - 코드 등록, 검증, 중복 처리, Controller/Service/Repository/DTO 계층 구성
    - Signature API 관리자 권한 제한
    - Redis Redisson 분산락 기반 1회성 코드 소비 및 팀별 unlock 상태 관리
- 성과
    - CTF 운영에 필요한 특수 문제 인증 구조 구현
    - 동시 제출 상황에서 코드 중복 소비를 방지하는 백엔드 구조 경험

#### 5. **CTF-bot**

- 기간: 2026.03.
- GitHub: https://github.com/yunttai/CTF-bot
- Tech Stack: Python 3.11, discord.py, aiohttp, BeautifulSoup, SQLite, GitHub Actions, Discord Webhook
- 한 줄 설명: CTFtime과 K-CTF 정보를 수집·정규화하고 Discord로 조회/알림하는 보안 행사 정보 자동화 봇.
- 담당 역할
    - 전체 봇 구조 설계
    - CTFtime API와 K-CTF 데이터 수집 및 정규화
    - SQLite snapshot 저장, fallback 구조, Discord Slash Command, Webhook 알림 구현
    - GitHub Actions 기반 주기 실행과 schedule health monitor 구성
- 성과
    - 신규 CTF 알림과 DB 갱신 자동화
    - scheduled workflow 실패 감지 및 GitHub Issue 생성

### 보조 프로젝트

#### **swf_uncompress_tool**

- GitHub: https://github.com/yunttai/swf_uncompress_tool
- Tech Stack: Python, struct, zlib, lzma, SWF
- CWS/ZWS 압축 SWF를 FWS 형태로 변환하는 Flash 리버싱 보조도구.

#### **flask_photo_rating**

- GitHub: https://github.com/yunttai/flask_photo_rating
- Tech Stack: Flask, SQLAlchemy, SQLite, PIL, OpenCV, NumPy, OWASP ZAP
- 사진 업로드 후 휴리스틱 기반 점수를 계산하는 Flask 웹서비스와 ZAP DAST 자동화 workflow 실험.

#### **Study_group_platform**

- GitHub: https://github.com/yunttai/Study_group_platform
- Tech Stack: Django REST Framework, React, SimpleJWT, MySQL/PostgreSQL
- 사용자 인증, 그룹 생성/참여, 게시판, 댓글, 채팅 기능을 제공하는 스터디/프로젝트 매칭 플랫폼.

#### **BusCrowdRisk-KOR**

- GitHub: https://github.com/yunttai/BusCrowdRisk-KOR
- Tech Stack: FastAPI, LightGBM, SQLite, GBIS API, Python CLI
- 경기버스 실시간 도착/위치 데이터와 날씨·시간 feature를 결합해 다음 버스 만차 위험도를 예측하는 공공데이터 MVP.

#### **MSG_CTF_WEB**

- GitHub: https://github.com/MJSEC-MJU/MSG_CTF_WEB
- Tech Stack: React, Docker, Nginx, CTF Platform
- MSG CTF 운영 플랫폼의 프론트엔드 구성요소.

#### **MSG_DISCORDBOT**

- GitHub: https://github.com/MJSEC-MJU/MSG_DISCORDBOT
- Tech Stack: Discord Bot, Python, Automation
- MSG CTF 운영 시스템의 Discord Bot 기반 운영 자동화 구성요소.

---

## **자격증 및 기타사항**

- SQLD
- 파이썬프로그래밍 2급
