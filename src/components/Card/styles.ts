import { StyleSheet } from 'react-native';
import { spacing } from '../../theme/spacing';

export const styles = StyleSheet.create({
    card: {
        margin: spacing.sm,
        borderRadius: 12,
    },
    
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.sm,
    },
    
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    
    titleIcon: {
        margin: 0,
        marginRight: spacing.xs,
    },
    
    title: {
        flex: 1,
    },
    
    actionIcon: {
        margin: 0,
    },
    
    content: {
        marginTop: spacing.xs,
    },
    
    // 상태별 스타일
    normal: {
        backgroundColor: '#FFFFFF',
    },
    
    success: {
        backgroundColor: '#E8F5E8',
        borderLeftWidth: 4,
        borderLeftColor: '#4CAF50',
    },
    
    warning: {
        backgroundColor: '#FFF3E0',
        borderLeftWidth: 4,
        borderLeftColor: '#FF9800',
    },
    
    danger: {
        backgroundColor: '#FFEBEE',
        borderLeftWidth: 4,
        borderLeftColor: '#F44336',
    },
    
    info: {
        backgroundColor: '#E3F2FD',
        borderLeftWidth: 4,
        borderLeftColor: '#2196F3',
    },
}); 