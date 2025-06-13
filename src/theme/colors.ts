import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

export const lightColors = {
    ...MD3LightTheme.colors,
    // OpenKakao Watcher 커스텀 색상
    success: '#4CAF50',
    warning: '#FF9800',
    danger: '#F44336',
    info: '#2196F3',
    
    // 감지 상태별 색상
    normalMessage: '#E8F5E8',
    spamMessage: '#FFEBEE',
    adMessage: '#FFF3E0',
    abusiveMessage: '#FCE4EC',
    announcementMessage: '#E3F2FD',
    
    // 채팅방 상태
    activeRoom: '#4CAF50',
    inactiveRoom: '#9E9E9E',
    
    // 알림 우선순위
    highPriority: '#F44336',
    mediumPriority: '#FF9800',
    lowPriority: '#4CAF50',
};

export const darkColors = {
    ...MD3DarkTheme.colors,
    // OpenKakao Watcher 커스텀 색상 (다크 모드)
    success: '#66BB6A',
    warning: '#FFB74D',
    danger: '#EF5350',
    info: '#42A5F5',
    
    // 감지 상태별 색상 (다크 모드)
    normalMessage: '#2E7D32',
    spamMessage: '#C62828',
    adMessage: '#E65100',
    abusiveMessage: '#AD1457',
    announcementMessage: '#1565C0',
    
    // 채팅방 상태 (다크 모드)
    activeRoom: '#66BB6A',
    inactiveRoom: '#757575',
    
    // 알림 우선순위 (다크 모드)
    highPriority: '#EF5350',
    mediumPriority: '#FFB74D',
    lowPriority: '#66BB6A',
};

export type AppColors = typeof lightColors; 