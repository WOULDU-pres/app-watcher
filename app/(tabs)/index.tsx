import { observer } from 'mobx-react-lite';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { FAB, Text } from 'react-native-paper';
import { AlertItem } from '../../src/components/AlertItem';
import { Card } from '../../src/components/Card';
import { StatCard } from '../../src/components/StatCard';
import { rootStore } from '../../src/store/RootStore';
import { styles } from './styles';

const DashboardScreen = observer(() => {
    const { stats, recentAlerts, unreadAlertsCount, detectionRate } = rootStore;

    const handleAddRoom = () => {
        // TODO: 감시방 추가 로직
        console.log('감시방 추가');
    };

    const handleAlertAction = (alertId: string, action: 'ignore' | 'whitelist' | 'confirm') => {
        // TODO: 알림 액션 처리 로직
        console.log(`Alert ${alertId}: ${action}`);
        rootStore.markAlertAsRead(alertId);
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* 헤더 */}
                <View style={styles.header}>
                    <Text variant="headlineMedium" style={styles.title}>
                        OpenKakao Watcher
                    </Text>
                    <Text variant="bodyMedium" style={styles.subtitle}>
                        실시간 오픈채팅 감시 대시보드
                    </Text>
                </View>

                {/* 통계 카드들 */}
                <View style={styles.statsContainer}>
                    <View style={styles.statsRow}>
                        <StatCard
                            label="총 메시지"
                            value={stats.totalMessages}
                            icon="message-text"
                            color="#2196F3"
                            style={styles.statCard}
                        />
                        <StatCard
                            label="감지율"
                            value={`${detectionRate}%`}
                            icon="shield-check"
                            progress={detectionRate / 100}
                            color="#4CAF50"
                            style={styles.statCard}
                        />
                    </View>
                    
                    <View style={styles.statsRow}>
                        <StatCard
                            label="도배 감지"
                            value={stats.spamMessages}
                            icon="alert-circle"
                            color="#F44336"
                            style={styles.statCard}
                        />
                        <StatCard
                            label="광고 감지"
                            value={stats.adMessages}
                            icon="bullhorn"
                            color="#FF9800"
                            style={styles.statCard}
                        />
                    </View>
                </View>

                {/* 감시 현황 */}
                <Card
                    title="감시 현황"
                    icon="eye"
                    style={styles.statusCard}
                >
                    <View style={styles.statusContent}>
                        <View style={styles.statusItem}>
                            <Text variant="bodyMedium">활성 채팅방</Text>
                            <Text variant="titleMedium" style={styles.statusValue}>
                                {stats.activeRooms}개
                            </Text>
                        </View>
                        <View style={styles.statusItem}>
                            <Text variant="bodyMedium">미읽은 알림</Text>
                            <Text variant="titleMedium" style={[styles.statusValue, { color: '#F44336' }]}>
                                {unreadAlertsCount}개
                            </Text>
                        </View>
                    </View>
                </Card>

                {/* 최근 알림 */}
                <Card
                    title="최근 알림"
                    icon="bell"
                    actionIcon="chevron-right"
                    onActionPress={() => {/* TODO: 알림 목록으로 이동 */}}
                    style={styles.alertsCard}
                >
                    {recentAlerts.length === 0 ? (
                        <Text variant="bodyMedium" style={styles.emptyText}>
                            최근 알림이 없습니다.
                        </Text>
                    ) : (
                        recentAlerts.slice(0, 3).map((alert) => (
                            <AlertItem
                                key={alert.id}
                                message={alert.message}
                                type={alert.type}
                                roomName={alert.roomName}
                                timestamp={alert.timestamp}
                                isRead={alert.isRead}
                                onAction={(action) => handleAlertAction(alert.id, action)}
                            />
                        ))
                    )}
                </Card>
            </ScrollView>

            {/* 플로팅 액션 버튼 */}
            <FAB
                icon="plus"
                style={styles.fab}
                onPress={handleAddRoom}
                label="감시방 추가"
            />
        </View>
    );
});

export default DashboardScreen;
