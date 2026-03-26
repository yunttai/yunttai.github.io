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

### **악성코드 탐지 자동화 플랫폼 구축 (YARRAI, WHS 3기 프로젝트)**

![image.png](attachment:b3426622-196d-4144-830d-7361933517fb:c24b51e1-45e7-4063-bc99-a0d77aff3d35.png)

![image.png](attachment:c7180c44-c915-43fd-8ce5-4a38c69357ff:5651acf4-6f03-4e69-a0d7-74cdf11cf8cd.png)

![image.png](attachment:f320f7be-4cd9-41dc-9e30-764abc0b53dc:image.png)

- 기간: 2025.04.~2025.08.
- 담당 역할: 악성코드 분석, 웹 백엔드 파트 총괄, YARA-rule 생성 AI, MITRE ATT&CK Mapping
- Tech Stack: FastAPI, Python, YARA-rule, MITRE ATT&CK, AI
- https://github.com/YARAAI-Web/YARAAI_Web
- 과정
    - 매주 오프라인 1회, 온라인 1회 총 2회 회의 진행.
        
        → 온라인: Discord / 오프라인: BoB센터 or HSPACE 진행
        
    - 사전 지식 조사 및 파트 분배
        - 디버깅/리버싱 능력 향상
        - 정적 분석 및 YARA-rule 추출 AI에 사용될 학습 데이터 추출
        - 정적/동적 분석과 현업에서 사용할 만한 툴 정리 후 파트 분배
    - 설계 및 플랫폼 개발
        - Python, FastAPI를 이용하여 백엔드 개발 파트 총괄
        - IDAPython을 이용해 코드 추출 및 정적분석 기능 개발
        - MITRE ATT&CK을 자동으로 매핑 기능 개발
- 성과
    - Python 스크립트, MCP를 이용해 디컴파일 코드 추출 및 정적분석 자동화
    - cuckoo sandbox사용으로 악성코드 동적분석 자동화
    - AI 기반 악성코드 행위 학습 및 고도화된 탐지
    - YARA-rule 생성 자동화 및 악성코드 분석에 필요한 것들(MITRE ATT&CK, CWE  등) 연동
    - open-ai API를 통한 종합 리포트 제공

⇒ 속도가 느리면, 

⇒ AI엔지니어의 관점말고, 악성코드에 대해 속도를 빠르게 할 수 있는 방법 → 참조가 되는 부분만 mcp로 추출해서 속도를 빠르게 하였다. 이런 방식

보안 엔지니어가 가져야될 마인드를 이용해서 해야됨. 

크립토재커의 어떤 특징을 분류해서, 

### **악성 URL 탐지 플랫폼 구축**

![image.png](attachment:5604f3c5-c032-4e3b-ac68-f61155aadae4:image.png)

![image.png](attachment:01131d43-e9e4-4473-a685-63393069363b:image.png)

![image.png](attachment:7625eaa1-8dfc-4e0d-92eb-86c9e4a130f0:image.png)

- 기간: 2025.03.~
- 담당 역할: Packet 분석 AI, Django를 이용한 백엔드 파트 개발, slide-CAPTCHA 자동화 봇 개발
- Tech Stack: Django REST-Framework, Python, AI, Geetest CAPTCHA, Selenium
- https://github.com/MJSEC-MJU/Reagan
- 과정
    - 매주 오프라인 2회 회의 진행 (2025.03.~2025.06., 명지대학교)
    - AI 파이프라인 구축
        - **URL Detection AI**: 텍스트·메타데이터 기반 1차 필터링
        - **Packet Analysis AI**: 네트워크 패킷 레벨 심층 분석 (맡은 파트)
            - 악성사이트 1000개, 정상사이트 1000개 학습 모델로 선정
            
            → RandomForest 모델로 학습 진행 및 결과추출
            
        - **Break_Captcha_AI**: 사이트 분석 시, 우회 진입을 위한, CAPTCHA 챌린지 자동화 봇 개발
            - re-CAPTCHA V2 - GitHub: https://github.com/MJSEC-MJU/breakrecapcha_v2
            - slide-CAPTCHA - GitHub: https://github.com/MJSEC-MJU/slide-CAPTCHA-solver (맡은 파트)
    - 웹 플랫폼 개발
        - 백엔드 개발
            - AI 파이프라인 연결
            - Python, Django를 이용하여 백엔드 파트 개발
- 성과
    - Packet 분석 AI의 f1-score 90% 이상 추출
    - slide-CAPTCHA 자동화 봇 구축

### **제 2회 MSG CTF 사이트 개발**

- 기간: 2025.07.~2025.11.
- 담당 역할: 기획, 운영, Back-end Signature API 개발, 문제 개발
- Tech Stack: SpringBoot, Python, Flask, Selenium
- Back-end: https://github.com/MJSEC-MJU/MSG_CTF_BACK
- 문제 개발: https://github.com/MJSEC-MJU/MSG_CTF_WARGAME
- 과정
    - 매주 기획, 문제개발 회의 진행
        - 백엔드 Signature API 구축
        - “CAPTCHA THE FLAG” 문제의 geetest CAPTCHA 부분 문제 개발 및 자동화 봇 개발
- 성과
    - 5개 대학(명지대, 건국대(글로컬), 상명대,  순천향대, 중앙대) 해킹동아리 연합 CTF 개최
    - 축제+CTF 로 초보자도 재밌게 참여할 수 있는 오프라인 CTF 운영

---

## **자격증 및 기타사항**

- SQLD
- 파이썬프로그래밍 2급