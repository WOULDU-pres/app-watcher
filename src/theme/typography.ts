import { MD3LightTheme } from 'react-native-paper';

export const typography = {
    ...MD3LightTheme.fonts,
    
    // 커스텀 폰트 스타일
    cardTitle: {
        fontFamily: 'System',
        fontSize: 18,
        fontWeight: '600' as const,
        lineHeight: 24,
    },
    
    cardSubtitle: {
        fontFamily: 'System',
        fontSize: 14,
        fontWeight: '400' as const,
        lineHeight: 20,
    },
    
    alertMessage: {
        fontFamily: 'System',
        fontSize: 16,
        fontWeight: '400' as const,
        lineHeight: 22,
    },
    
    statusText: {
        fontFamily: 'System',
        fontSize: 12,
        fontWeight: '500' as const,
        lineHeight: 16,
    },
    
    timestamp: {
        fontFamily: 'System',
        fontSize: 12,
        fontWeight: '400' as const,
        lineHeight: 16,
    },
    
    roomName: {
        fontFamily: 'System',
        fontSize: 16,
        fontWeight: '500' as const,
        lineHeight: 22,
    },
    
    statValue: {
        fontFamily: 'System',
        fontSize: 24,
        fontWeight: '700' as const,
        lineHeight: 32,
    },
    
    statLabel: {
        fontFamily: 'System',
        fontSize: 14,
        fontWeight: '400' as const,
        lineHeight: 20,
    },
} as const;

export type Typography = typeof typography; 