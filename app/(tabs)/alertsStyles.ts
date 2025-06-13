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
    
    searchContainer: {
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
        backgroundColor: '#FFFFFF',
    },
    
    searchbar: {
        elevation: 0,
        backgroundColor: '#F5F5F5',
    },
    
    filtersContainer: {
        backgroundColor: '#FFFFFF',
        paddingBottom: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    
    filtersContent: {
        paddingHorizontal: spacing.lg,
        gap: spacing.sm,
    },
    
    filterChip: {
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    
    selectedFilterChip: {
        backgroundColor: '#E3F2FD',
        borderColor: '#2196F3',
    },
    
    filterChipText: {
        color: '#666666',
        fontSize: 14,
    },
    
    selectedFilterChipText: {
        color: '#2196F3',
        fontWeight: '600',
    },
    
    alertsList: {
        flex: 1,
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.md,
    },
    
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: spacing.xl * 2,
    },
    
    emptyText: {
        color: '#999999',
        textAlign: 'center',
    },
    
    fab: {
        position: 'absolute',
        margin: spacing.lg,
        right: 0,
        bottom: 0,
        backgroundColor: '#F44336',
    },
}); 