# Product Requirements Document

## 1. Executive Summary

**OpenKakao Watcher**는 카카오톡 오픈채팅방의 도배, 광고, 분쟁/욕설 등 이상 메시지를 Gemini 기반으로 자동 감지하여, 관리자에게 실시간 알림을 제공하는 시스템입니다. 스마트폰 NotificationListener를 활용하여 공식 API의 부재를 극복하며, PC 또는 클라우드 서버에서 상시 구동이 가능합니다. 관리 효율성을 높이고, 불필요한 수동 모니터링 시간을 줄여 줍니다.

## 2. Problem Statement

### 사용자 Pain Point
- 카카오톡 오픈채팅방에서 도배, 광고, 분쟁성 메시지가 빈번하나, 관리자가 일일이 상시 모니터링하기엔 부담이 큼
- 공식 API 부재로 별도 자동화/모니터링 툴을 사용할 수 없음
- 불필요하거나 무의미한 메시지가 많아 중요한 이벤트(예: 공고 게재)를 놓치기도 함

### 시장/기술적 Gap
- 카카오톡 오픈채팅의 이상 메시지 통합 모니터링 솔루션 부재
- 관리 자동화 수요는 높으나 공식적 툴이 없음

## 3. Goals and Objectives

- **Primary Goal:**  
  오픈채팅 이상 메시지(도배, 광고, 욕설, 분쟁 등) 감지를 실시간으로 자동화하고, 관리 부담을 줄인다.

- **Secondary Goals:**  
  - 카카오톡 공식 API 없이 안정적으로 감지 시스템 운영  
  - Gemini 기반 메시지 분류로 오탐/누락 최소화  
  - 메시지 필터 및 이벤트 트리거(예: 공고 등록 감지) 기능 추가  
  - 알림 채널 다양화(텔레그램, 콘솔, 디스코드 등)  
  - 운영 비용 최소화

- **Success Metrics:**  
  - 이상 메시지 감지 정확도 95% 이상
  - 오탐(정상 메시지 오분류) 5% 미만
  - 관리자 반응 시간 10분 내 90% 이상
  - ↓관리자 직접 모니터링 시간 60% 이상 감소

## 4. Target Audience

### Primary Users
- 카카오톡 오픈채팅방(100인 이상 활성) 운영자 및 관리자  
  - 20~40대, 커뮤니티 및 팀, 공고/이벤트관리
  - 항상 온라인이 어려운 소규모 운영팀

### Secondary Users
- 공동관리자/부방장, 운영팀원
- 채팅방 회원(간접적 수혜)
- IT 솔루션 도입 관심 커뮤니티

## 5. User Stories

- **As an open chat admin**, I want to receive instant alerts when spam/ads/abusive/conflict messages are detected so that I can take timely action.
- **As an open chat admin**, I want normal activity notifications (e.g., regular public post by a bot) to be identified automatically, so that I don’t miss major announcements.
- **As a secondary admin**, I want to share the monitoring load with a minimal number of staff, reducing manual labor.
- **As a user**, I want the privacy of my chat messages to be respected and not be indiscriminately logged.

## 6. Functional Requirements

### Core Features

- **Notification-based Message Capture**
  - Android 앱(NotificationListenerService)로 카카오톡 알림 실시간 감지
  - 감시 대상 오픈채팅방만 필터
  - [Acceptance Criteria]
    - 필터 기준(방 제목, 패키지명 등) 정확히 설정
    - 정상/이상 메시지 구분된 상태로 서버에 전송

- **Gemini 기반 메시지 분석**
  - Supabase Edge Function에서 알림 메시지 수신 후 Gemini API로 분류 (정상/도배/광고/욕설/분쟁)
  - [Acceptance Criteria]
    - 감지 정확도 95% 이상
    - 1건당 1초 이내 처리

- **이상 메시지 실시간 관리자 알림**
  - 카카오톡 봇을 통해 관리자에게 신속 알림 전송
  - [Acceptance Criteria]
    - 감지 후 5초 내 알림 전송

- **공고·이벤트 메시지 감지 및 별도 알림**
  - 공지/공고 메시지 패턴 자동 감지(예: 6시반 공고)
  - [Acceptance Criteria]
    - 일정한 시간 바깥의 보냄도 감지 및 표시
    - 공고 감지 시 “공지 등록 필요” 알림 전송

- **로그 기록/저장**
  - 수신 시각, 메시지 원문, 감지 결과, 전송 여부 저장 (SQLite 또는 CSV)
  - [Acceptance Criteria]
    - 비식별화 또는 암호화 저장 옵션 지원

### Supporting Features

- 관리자 알림 채널 다중 지원(텔레그램, 디스코드 선택적 설정)
- 메시지 필터(시간대별/빈도 기반 감지 조건)
- 예외 단어/화이트리스트(오탐 최소화)
- 운영/비용 대시보드 (월별 API 사용량 카운트, 경보 바이패스 관리)
- 테스트/시뮬레이션 모드 (실 메시지 없이 로직 검증 가능)
- 관리자 알림 수신자 지정(2명 이상 공동 관리)

## 7. Non-Functional Requirements

- **Performance**: 
  - 실시간(최대 10초 내) 감지 및 알림
  - 하루 1,000건 이상 메시지 처리에도 무리 없는 시스템
- **Security**: 
  - 서버-모바일 간 HTTPS 통신 필수
  - 데이터(특히 메시지) 비식별/암호화 옵션
  - 외부로 데이터 유출 차단
- **Usability**: 
  - 관리자용 대시보드 간단(React Native UI)
  - 앱 자동업데이트 지원 (f-droid, apk 재배포 등)
- **Scalability**:
  - 여러 채팅방 병렬 감시 지원
- **Compatibility**:
  - Android 10 이상, PC는 윈도우/리눅스(Minimum)

## 8. Technical Considerations

- **Architecture**:  
  - Android(NotificationListener) → Supabase Edge Function (서버리스 JS/TS 코드) → Gemini 분석 → Alert 시스템(카카오톡 봇)
- **Integration**:  
  - Gemini Google AI API 연동
  - 카카오톡 챗봇 API 연동 (Kakao i Open Builder)
- **Data**:  
  - Supabase PostgreSQL DB를 활용한 로그 저장, 메시지 비식별화 및 암호화 처리
- **Dependencies**:  
  - JavaScript/TypeScript (Supabase Edge Functions), React Native(앱), Google AI Gemini Client, 카카오톡 i Open Builder SDK

## 9. Success Metrics and KPIs

- 감지된 이상 메시지 중 실제 이상 비율(Precision, ≥95%)
- 정상 메시지에서 오탐률(≤5%)
- 알림이 관리자에게 전달되는 평균 소요 시간(≤10초)
- 운영자 직접 모니터링 시간 감소(60% 이상)
  - 서버 무중단 운용률(99% 이상)
  - 월별 Gemini API 사용량/비용 집계(예상범위 내 유지)

## 10. Timeline and Milestones

- **Phase 1: MVP (총 5~6일)**
  - 요구 분석/설계: 1일
  - NotificationListener Android 앱 개발: 2~3일
  - Supabase Edge Function + Gemini 통합: 1일
  - 카카오톡 봇 알림 구현, 통합테스트: 1일
  - Supabase 운영 배포 및 환경설정: 0.5일

- **Phase 2: 고도화 (10일 내)**
  - 공고/이벤트 자동감지 기능
  - 디스코드 등 부가 알림 채널 추가
  - 대시보드, 오탐 조정, 관리자-공동관리자 권한분리 UI

- **Phase 3: 운영 최적화 (3주 내)**
  - 예외 규칙(화이트리스트), 사용량 대시보드, 다중채팅방 관리
  - 비용 최적화(모델 교체 등), 확장 버전

## 11. Risks and Mitigation

- **기술 리스크:**  
  - 카카오톡 업데이트로 알림 체계 변경 시 감지 실패 가능 → 정기 업데이트, 신규 NotificationListener 유지관리
  - Gemini API 요금 급증(사용량 폭증) → 사용량 리밋/알림, 모델 버전 CLI fallback 옵션
  - Supabase 서비스 장애 가능성 → 다중 리전 설정, 장애 시 임시 로컬 백업 활용
- **비즈니스 리스크:**  
  - 오탐 지속 발생 시 신뢰 하락 → 화이트리스트, 신뢰도 낮은 메시지 사용자 확인 전 알림
- **사용자 수용 리스크:**  
  - 초기 세팅 복잡함 → 설치 가이드 제공, 자동설정 스크립트 지원

## 12. Future Considerations

- 카카오톡 Webhook/API 공식 지원 시 즉시 전환
- Slack 등 타 플랫폼 채팅 감지 기능 확대
- Android/iOS 공통버전 확장
- 인공지능 모델 커스텀(바이럴/신종 광고 탐지 적응)
- 클라우드 관리형 서비스 상용화, 프리미엄 부가 서비스(통계, AI 자동차단 등) 제공
- 공동관리자 관리체계 강화(다중 알림, 경고 공동 히스토리)
- Supabase 활용도 확대(실시간 이벤트 분석, 대시보드 강화 등)
