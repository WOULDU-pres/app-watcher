import { StyleSheet } from 'react-native';
import { spacing } from '../../theme/spacing';

export const styles = StyleSheet.create({
    card: {
        margin: spacing.sm,
        minHeight: 120,
        flex: 1,
    },
    
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: spacing.xs,
    },
    
    iconContainer: {
        flex: 1,
    },
    
    icon: {
        margin: 0,
        alignSelf: 'flex-start',
    },
    
    trendIcon: {
        margin: 0,
    },
    
    value: {
        fontWeight: '700',
        marginBottom: spacing.xs,
    },
    
    label: {
        color: '#666666',
        marginBottom: spacing.sm,
    },
    
    progressBar: {
        height: 4,
        borderRadius: 2,
    },
    
    subtitle: {
        color: '#666666',
        marginTop: spacing.xs,
    },
    
    trendValue: {
        fontSize: 12,
        fontWeight: '600',
        marginTop: spacing.xs,
    },
}); 