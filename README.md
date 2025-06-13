# OpenKakao Watcher

카카오톡 오픈채팅 도배/광고/욕설 감지 및 알림 시스템

## 📱 앱 개요

OpenKakao Watcher는 카카오톡 오픈채팅방에서 발생하는 도배, 광고, 욕설, 분쟁 등의 부적절한 메시지를 자동으로 감지하고 관리자에게 실시간 알림을 제공하는 React Native 앱입니다.

## 🏗️ 기술 스택

- **Framework**: React Native + Expo Router
- **UI Library**: React Native Paper (Material Design 3)
- **State Management**: MobX State Tree
- **Language**: TypeScript
- **Platform**: Android 전용 최적화

## 📂 프로젝트 구조

```
app-watcher/
├── app/                          # Expo Router 파일 기반 라우팅
│   ├── (tabs)/                   # 탭 네비게이션
│   │   ├── index.tsx            # 대시보드 (메인)
│   │   ├── alerts.tsx           # 알림 관리
│   │   ├── settings.tsx         # 설정
│   │   ├── admin.tsx            # 운영 대시보드
│   │   └── _layout.tsx          # 탭 레이아웃
│   └── _layout.tsx              # 루트 레이아웃
├── src/
│   ├── components/              # 재사용 가능한 UI 컴포넌트
│   │   ├── Card/               # 범용 카드 컴포넌트
│   │   ├── AlertItem/          # 알림 메시지 표시
│   │   ├── StatCard/           # 통계 카드
│   │   ├── List/               # 범용 리스트
│   │   ├── RoomItem/           # 감시방 정보 표시
│   │   ├── Button/             # 커스텀 버튼
│   │   └── TextField/          # 커스텀 입력 필드
│   ├── store/                  # MobX State Tree 상태 관리
│   │   ├── RootStore.ts        # 루트 스토어
│   │   └── models/
│   │       └── User.ts         # 사용자 모델
│   ├── theme/                  # 디자인 시스템
│   │   ├── colors.ts           # 색상 팔레트
│   │   ├── spacing.ts          # 간격 시스템
│   │   ├── typography.ts       # 타이포그래피
│   │   └── index.ts            # 테마 통합
│   ├── services/               # API 및 비즈니스 로직
│   ├── utils/                  # 공통 유틸리티
│   ├── config/                 # 앱 설정
│   └── i18n/                   # 다국어 지원
└── assets/                     # 정적 파일
```

## 🎯 주요 기능

### 1. 대시보드 (메인 화면)
- **실시간 통계**: 총 메시지 수, 감지율, 도배/광고 감지 현황
- **감시 현황**: 활성 감시방 목록 및 상태
- **최근 알림**: 최신 감지된 메시지 목록
- **빠른 액션**: 감시방 추가, 알림 설정 진입

### 2. 알림 관리
- **필터링**: 전체, 도배, 광고, 욕설/분쟁, 공고, 미읽음별 분류
- **검색**: 메시지 내용 및 채팅방명 검색
- **액션 처리**: 무시, 화이트리스트 추가, 확인 처리
- **일괄 관리**: 전체 삭제 기능

### 3. 설정
- **알림 설정**: 푸시 알림, 알림음, 진동 on/off
- **감지 설정**: 자동 화이트리스트, 감시방 관리, 화이트리스트 관리
- **데이터 관리**: 데이터 내보내기/가져오기
- **계정 정보**: 사용자 정보 및 권한 표시

### 4. 운영 대시보드 (관리자 전용)
- **API 사용량**: 실시간 API 호출 현황 및 한도 모니터링
- **비용 현황**: 월별 비용 추적 및 예산 대비 현황
- **시스템 상태**: 가동률, 응답시간, 오류율, 활성 방 수
- **로그 관리**: 시스템 로그 및 이벤트 추적
- **관리 도구**: 데이터 백업, 시스템 설정, 상세 분석

## 🚀 실행 방법

### 1. 환경 설정
```bash
# 의존성 설치
yarn install

# iOS 의존성 설치 (필요시)
cd ios && pod install && cd ..
```

### 2. 개발 서버 실행
```bash
# Expo 개발 서버 시작
npx expo start

# Android 에뮬레이터에서 실행
npx expo start --android

# 물리 기기에서 실행 (Expo Go 앱 필요)
npx expo start --tunnel
```

### 3. 빌드
```bash
# 개발 빌드
eas build --profile development --platform android

# 프로덕션 빌드
eas build --profile production --platform android
```

## 🛠️ 개발 가이드

### 컴포넌트 개발 규칙
1. **폴더 구조**: 모든 컴포넌트는 개별 폴더에 `index.tsx`와 `styles.ts` 포함
2. **UI 라이브러리**: React Native Paper 우선 사용
3. **스타일링**: 인라인 스타일 금지, 테마 시스템 활용
4. **타입 안전성**: 모든 props는 interface로 정의

### 상태 관리
- **로컬 상태**: React Hooks 우선 사용
- **전역 상태**: MobX State Tree로 관리
- **Observer 패턴**: 컴포넌트에 `observer` HOC 적용

### 스타일링 시스템
- **색상**: `src/theme/colors.ts`의 정의된 색상 사용
- **간격**: `src/theme/spacing.ts`의 spacing 시스템 활용
- **타이포그래피**: Material Design 3 기반 텍스트 스타일

## 🐛 에러 핸들링 내역

### 해결된 주요 이슈

#### 1. 스타일 모듈 에러
**문제**: `Cannot find module './styles' or its corresponding type declarations`
**원인**: 컴포넌트 폴더에 `styles.ts` 파일 누락
**해결**: 모든 컴포넌트 폴더에 `styles.ts` 파일 생성 및 StyleSheet 정의

#### 2. StatCard Props 타입 에러
**문제**: `Property 'title' does not exist on type 'StatCardProps'`
**원인**: admin.tsx에서 사용하는 props와 StatCard 인터페이스 불일치
**해결**: StatCard 인터페이스에 `title`, `subtitle`, `trendValue` 속성 추가

#### 3. User 모델 속성 에러
**문제**: `Property 'username' does not exist on type 'User'`
**원인**: settings.tsx에서 사용하는 username 속성이 User 모델에 정의되지 않음
**해결**: User 모델에 `username: types.optional(types.string, '')` 추가

#### 4. MobX State Tree 타입 에러
**문제**: MobX 모델의 타입 추론 문제
**해결**: 적절한 타입 정의 및 optional 속성 활용

#### 5. React Native Paper 테마 적용
**문제**: 다크/라이트 테마 자동 전환 미작동
**해결**: `app/_layout.tsx`에 PaperProvider 설정 및 useColorScheme 훅 활용

### 개발 중 주의사항
1. **TypeScript 체크**: `npx tsc --noEmit`으로 정기적 타입 검사
2. **Linter 준수**: ESLint 규칙 준수 및 자동 수정 활용
3. **컴포넌트 분리**: 1600라인 이상 파일 분할 권장
4. **메모리 관리**: MobX observer 패턴 올바른 사용

## 📋 TODO

- [ ] 실제 API 연동
- [ ] 푸시 알림 구현
- [ ] 데이터 백업/복원 기능
- [ ] 다국어 지원 완성
- [ ] 테스트 코드 작성
- [ ] 성능 최적화

## 📄 라이선스

MIT License

## 👥 개발팀

OpenKakao Watcher Team

---

**버전**: 1.0.0  
**최종 업데이트**: 2025년 6월
