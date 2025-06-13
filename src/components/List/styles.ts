import { StyleSheet } from 'react-native';
import { spacing } from '../../theme/spacing';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        overflow: 'hidden',
    },
    
    title: {
        paddingHorizontal: spacing.md,
        paddingTop: spacing.sm,
        fontWeight: '600',
    },
    
    list: {
        flex: 1,
    },
    
    listItem: {
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        minHeight: 56,
    },
    
    divider: {
        marginHorizontal: spacing.md,
        height: 1,
    },
}); 