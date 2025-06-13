import { StyleSheet } from 'react-native';
import { spacing } from '../../theme/spacing';

export const styles = StyleSheet.create({
    card: {
        margin: spacing.sm,
        marginBottom: spacing.xs,
    },
    
    unread: {
        borderLeftWidth: 4,
        borderLeftColor: '#2196F3',
    },
    
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.sm,
    },
    
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    
    typeChip: {
        marginRight: spacing.sm,
        borderWidth: 1,
        backgroundColor: 'transparent',
    },
    
    timestamp: {
        color: '#666666',
    },
    
    roomName: {
        color: '#666666',
        fontWeight: '500',
    },
    
    message: {
        marginBottom: spacing.sm,
        lineHeight: 20,
    },
    
    divider: {
        marginVertical: spacing.sm,
    },
    
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: spacing.xs,
    },
    
    actionButton: {
        marginHorizontal: spacing.xs,
    },
    
    actionButtonText: {
        fontSize: 12,
    },
    
    confirmButton: {
        marginLeft: spacing.sm,
    },
}); 