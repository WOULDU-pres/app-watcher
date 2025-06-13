import { StyleSheet } from 'react-native';
import { spacing } from '../../theme/spacing';

export const styles = StyleSheet.create({
    card: {
        margin: spacing.sm,
        marginBottom: spacing.xs,
    },
    
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: spacing.sm,
    },
    
    titleContainer: {
        flex: 1,
        marginRight: spacing.sm,
    },
    
    roomName: {
        fontWeight: '600',
        marginBottom: spacing.xs,
    },
    
    statusContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing.xs,
    },
    
    statusChip: {
        height: 24,
        borderWidth: 1,
        backgroundColor: 'transparent',
    },
    
    activeChip: {
        borderColor: '#4CAF50',
    },
    
    inactiveChip: {
        borderColor: '#9E9E9E',
    },
    
    statusText: {
        fontSize: 12,
    },
    
    activeText: {
        color: '#4CAF50',
    },
    
    inactiveText: {
        color: '#9E9E9E',
    },
    
    alertChip: {
        height: 24,
        backgroundColor: '#FFEBEE',
        borderWidth: 1,
        borderColor: '#F44336',
    },
    
    alertText: {
        color: '#F44336',
        fontSize: 12,
    },
    
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.xs,
    },
    
    switch: {
        transform: [{ scale: 0.8 }],
    },
    
    deleteButton: {
        margin: 0,
    },
    
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
    },
    
    infoText: {
        color: '#666666',
    },
}); 