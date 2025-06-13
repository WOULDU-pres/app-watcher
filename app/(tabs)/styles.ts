import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    
    scrollView: {
        flex: 1,
    },
    
    header: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#2196F3',
    },
    
    title: {
        color: '#FFFFFF',
        fontWeight: '700',
        marginBottom: 4,
    },
    
    subtitle: {
        color: '#E3F2FD',
    },
    
    statsContainer: {
        padding: 16,
    },
    
    statsRow: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    
    statCard: {
        flex: 1,
        marginHorizontal: 4,
    },
    
    statusCard: {
        marginHorizontal: 16,
        marginBottom: 16,
    },
    
    statusContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 8,
    },
    
    statusItem: {
        alignItems: 'center',
    },
    
    statusValue: {
        fontWeight: '600',
        marginTop: 4,
    },
    
    alertsCard: {
        marginHorizontal: 16,
        marginBottom: 100, // FAB 공간 확보
    },
    
    emptyText: {
        textAlign: 'center',
        color: '#666666',
        marginTop: 16,
    },
    
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
}); 