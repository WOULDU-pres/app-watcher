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
    
    accountInfo: {
        paddingVertical: spacing.sm,
    },
    
    username: {
        fontWeight: '600',
        color: '#1A1A1A',
        marginBottom: spacing.xs,
    },
    
    userRole: {
        color: '#666666',
    },
    
    listItem: {
        paddingHorizontal: 0,
        paddingVertical: spacing.sm,
    },
    
    divider: {
        marginVertical: spacing.xs,
        height: 1,
        backgroundColor: '#E0E0E0',
    },
    
    buttonContainer: {
        flexDirection: 'row',
        gap: spacing.md,
        marginTop: spacing.sm,
    },
    
    dataButton: {
        flex: 1,
        borderColor: '#2196F3',
    },
    
    logoutContainer: {
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.xl,
        marginBottom: spacing.xl,
    },
    
    logoutButton: {
        paddingVertical: spacing.sm,
    },
}); 