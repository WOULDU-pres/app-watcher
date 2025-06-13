import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Chip, FAB, Searchbar, Text } from 'react-native-paper';
import { AlertItem } from '../../src/components/AlertItem';
import { rootStore } from '../../src/store/RootStore';
import { styles } from './alertsStyles';

const AlertsScreen = observer(() => {
    const { recentAlerts } = rootStore;
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState<string>('all');

    const filters = [
        { key: 'all', label: '전체', count: recentAlerts.length },
        { key: 'spam', label: '도배', count: recentAlerts.filter(a => a.type === 'spam').length },
        { key: 'ad', label: '광고', count: recentAlerts.filter(a => a.type === 'ad').length },
        { key: 'abusive', label: '욕설/분쟁', count: recentAlerts.filter(a => a.type === 'abusive').length },
        { key: 'announcement', label: '공고', count: recentAlerts.filter(a => a.type === 'announcement').length },
        { key: 'unread', label: '미읽음', count: recentAlerts.filter(a => !a.isRead).length },
    ];

    const filteredAlerts = recentAlerts.filter(alert => {
        const matchesSearch = alert.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            alert.roomName.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesFilter = selectedFilter === 'all' || 
                            (selectedFilter === 'unread' ? !alert.isRead : alert.type === selectedFilter);
        
        return matchesSearch && matchesFilter;
    });

    const handleAlertAction = (alertId: string, action: 'ignore' | 'whitelist' | 'confirm') => {
        console.log(`Alert ${alertId}: ${action}`);
        rootStore.markAlertAsRead(alertId);
        
        // TODO: 실제 액션 처리 로직
        switch (action) {
            case 'ignore':
                // 무시 처리
                break;
            case 'whitelist':
                // 화이트리스트 추가
                break;
            case 'confirm':
                // 확인 처리
                break;
        }
    };

    const handleClearAll = () => {
        rootStore.clearAlerts();
    };

    return (
        <View style={styles.container}>
            {/* 헤더 */}
            <View style={styles.header}>
                <Text variant="headlineMedium" style={styles.title}>
                    알림 관리
                </Text>
                <Text variant="bodyMedium" style={styles.subtitle}>
                    감지된 메시지 목록
                </Text>
            </View>

            {/* 검색바 */}
            <View style={styles.searchContainer}>
                <Searchbar
                    placeholder="메시지 또는 채팅방 검색..."
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    style={styles.searchbar}
                />
            </View>

            {/* 필터 칩들 */}
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                style={styles.filtersContainer}
                contentContainerStyle={styles.filtersContent}
            >
                {filters.map(filter => (
                    <Chip
                        key={filter.key}
                        selected={selectedFilter === filter.key}
                        onPress={() => setSelectedFilter(filter.key)}
                        style={[
                            styles.filterChip,
                            selectedFilter === filter.key && styles.selectedFilterChip
                        ]}
                        textStyle={[
                            styles.filterChipText,
                            selectedFilter === filter.key && styles.selectedFilterChipText
                        ]}
                    >
                        {filter.label} ({filter.count})
                    </Chip>
                ))}
            </ScrollView>

            {/* 알림 목록 */}
            <ScrollView style={styles.alertsList} showsVerticalScrollIndicator={false}>
                {filteredAlerts.length === 0 ? (
                    <View style={styles.emptyContainer}>
                        <Text variant="bodyLarge" style={styles.emptyText}>
                            {searchQuery || selectedFilter !== 'all' 
                                ? '조건에 맞는 알림이 없습니다.' 
                                : '알림이 없습니다.'}
                        </Text>
                    </View>
                ) : (
                    filteredAlerts.map((alert) => (
                        <AlertItem
                            key={alert.id}
                            message={alert.message}
                            type={alert.type}
                            roomName={alert.roomName}
                            timestamp={alert.timestamp}
                            isRead={alert.isRead}
                            onAction={(action) => handleAlertAction(alert.id, action)}
                            onPress={() => {
                                // TODO: 알림 상세 화면으로 이동
                                rootStore.markAlertAsRead(alert.id);
                            }}
                        />
                    ))
                )}
            </ScrollView>

            {/* 플로팅 액션 버튼 */}
            {recentAlerts.length > 0 && (
                <FAB
                    icon="delete-sweep"
                    style={styles.fab}
                    onPress={handleClearAll}
                    label="전체 삭제"
                />
            )}
        </View>
    );
});

export default AlertsScreen; 