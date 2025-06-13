import { StyleSheet } from 'react-native';
import { spacing } from '../../src/theme/spacing';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    
    header: {
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.lg,
        paddingBottom: spacing.md,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    
    title: {
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: spacing.xs,
    },
    
    subtitle: {
        color: '#666666',
    },
    
    unauthorizedContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: spacing.xl,
        backgroundColor: '#F5F5F5',
    },
    
    unauthorizedTitle: {
        fontWeight: '600',
        color: '#1A1A1A',
        marginBottom: spacing.md,
        textAlign: 'center',
    },
    
    unauthorizedText: {
        color: '#666666',
        textAlign: 'center',
    },
    
    periodContainer: {
        backgroundColor: '#FFFFFF',
        paddingVertical: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    
    periodChips: {
        flexDirection: 'row',
        paddingHorizontal: spacing.lg,
        gap: spacing.sm,
    },
    
    periodChip: {
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    
    selectedPeriodChip: {
        backgroundColor: '#E3F2FD',
        borderColor: '#2196F3',
    },
    
    periodChipText: {
        color: '#666666',
        fontSize: 14,
    },
    
    selectedPeriodChipText: {
        color: '#2196F3',
        fontWeight: '600',
    },
    
    section: {
        marginHorizontal: spacing.lg,
        marginVertical: spacing.sm,
        borderRadius: 12,
        elevation: 2,
    },
    
    sectionTitle: {
        fontWeight: '600',
        color: '#1A1A1A',
        marginBottom: spacing.md,
    },
    
    // API 사용량
    usageContainer: {
        paddingVertical: spacing.sm,
    },
    
    usageInfo: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: spacing.md,
    },
    
    usageNumber: {
        fontWeight: '700',
        color: '#1A1A1A',
        marginRight: spacing.xs,
    },
    
    usageLimit: {
        color: '#666666',
    },
    
    progressBar: {
        height: 8,
        borderRadius: 4,
        marginBottom: spacing.sm,
    },
    
    usagePercent: {
        color: '#666666',
        textAlign: 'right',
    },
    
    // 비용 현황
    costGrid: {
        flexDirection: 'row',
        gap: spacing.md,
    },
    
    costCard: {
        flex: 1,
    },
    
    // 시스템 상태
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing.sm,
    },
    
    statCard: {
        width: '48%',
    },
    
    // 로그
    logHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.sm,
    },
    
    logItem: {
        paddingHorizontal: 0,
        paddingVertical: spacing.sm,
    },
    
    logDivider: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginVertical: spacing.xs,
    },
    
    // 관리 도구
    toolsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing.sm,
        marginTop: spacing.sm,
    },
    
    toolButton: {
        flex: 1,
        minWidth: '30%',
        borderColor: '#2196F3',
    },
}); 