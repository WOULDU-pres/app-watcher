import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Card, Chip, List, ProgressBar, Text } from 'react-native-paper';
import { StatCard } from '../../src/components/StatCard';
import { rootStore } from '../../src/store/RootStore';
import { styles } from './adminStyles';

const AdminScreen = observer(() => {
    const { user } = rootStore;
    const [selectedPeriod, setSelectedPeriod] = useState<'day' | 'week' | 'month'>('month');

    // 모의 데이터 (실제로는 API에서 가져올 데이터)
    const apiUsage = {
        current: 1250,
        limit: 5000,
        percentage: 0.25,
    };

    const costData = {
        thisMonth: 45000,
        lastMonth: 38000,
        budget: 100000,
    };

    const systemStats = {
        uptime: '99.8%',
        responseTime: '120ms',
        errorRate: '0.2%',
        activeRooms: 15,
    };

    const recentLogs = [
        { id: '1', type: 'info', message: 'API 호출 한도 25% 도달', timestamp: new Date(Date.now() - 1000 * 60 * 30) },
        { id: '2', type: 'warning', message: '응답 시간 증가 감지', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2) },
        { id: '3', type: 'success', message: '시스템 업데이트 완료', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6) },
        { id: '4', type: 'error', message: 'API 호출 실패 (재시도 성공)', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12) },
    ];

    const getLogIcon = (type: string) => {
        switch (type) {
            case 'error': return 'alert-circle';
            case 'warning': return 'alert';
            case 'success': return 'check-circle';
            default: return 'information';
        }
    };

    const getLogColor = (type: string) => {
        switch (type) {
            case 'error': return '#F44336';
            case 'warning': return '#FF9800';
            case 'success': return '#4CAF50';
            default: return '#2196F3';
        }
    };

    const formatTimestamp = (date: Date) => {
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        
        if (hours < 1) {
            const minutes = Math.floor(diff / (1000 * 60));
            return `${minutes}분 전`;
        }
        if (hours < 24) return `${hours}시간 전`;
        
        const days = Math.floor(hours / 24);
        return `${days}일 전`;
    };

    if (user.role !== 'admin') {
        return (
            <View style={styles.unauthorizedContainer}>
                <Text variant="headlineSmall" style={styles.unauthorizedTitle}>
                    접근 권한이 없습니다
                </Text>
                <Text variant="bodyMedium" style={styles.unauthorizedText}>
                    관리자 권한이 필요한 페이지입니다.
                </Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* 헤더 */}
            <View style={styles.header}>
                <Text variant="headlineMedium" style={styles.title}>
                    운영 대시보드
                </Text>
                <Text variant="bodyMedium" style={styles.subtitle}>
                    시스템 상태 및 비용 관리
                </Text>
            </View>

            {/* 기간 선택 */}
            <View style={styles.periodContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.periodChips}>
                        {[
                            { key: 'day', label: '오늘' },
                            { key: 'week', label: '이번 주' },
                            { key: 'month', label: '이번 달' },
                        ].map(period => (
                            <Chip
                                key={period.key}
                                selected={selectedPeriod === period.key}
                                onPress={() => setSelectedPeriod(period.key as any)}
                                style={[
                                    styles.periodChip,
                                    selectedPeriod === period.key && styles.selectedPeriodChip
                                ]}
                                textStyle={[
                                    styles.periodChipText,
                                    selectedPeriod === period.key && styles.selectedPeriodChipText
                                ]}
                            >
                                {period.label}
                            </Chip>
                        ))}
                    </View>
                </ScrollView>
            </View>

            {/* API 사용량 */}
            <Card style={styles.section}>
                <Card.Content>
                    <Text variant="titleMedium" style={styles.sectionTitle}>
                        API 사용량
                    </Text>
                    
                    <View style={styles.usageContainer}>
                        <View style={styles.usageInfo}>
                            <Text variant="headlineSmall" style={styles.usageNumber}>
                                {apiUsage.current.toLocaleString()}
                            </Text>
                            <Text variant="bodyMedium" style={styles.usageLimit}>
                                / {apiUsage.limit.toLocaleString()} 호출
                            </Text>
                        </View>
                        
                        <ProgressBar
                            progress={apiUsage.percentage}
                            color={apiUsage.percentage > 0.8 ? '#F44336' : '#4CAF50'}
                            style={styles.progressBar}
                        />
                        
                        <Text variant="bodySmall" style={styles.usagePercent}>
                            {Math.round(apiUsage.percentage * 100)}% 사용됨
                        </Text>
                    </View>
                </Card.Content>
            </Card>

            {/* 비용 현황 */}
            <Card style={styles.section}>
                <Card.Content>
                    <Text variant="titleMedium" style={styles.sectionTitle}>
                        비용 현황
                    </Text>
                    
                    <View style={styles.costGrid}>
                        <StatCard
                            title="이번 달"
                            value={`₩${costData.thisMonth.toLocaleString()}`}
                            trend={costData.thisMonth > costData.lastMonth ? 'up' : 'down'}
                            trendValue={`${Math.abs(costData.thisMonth - costData.lastMonth).toLocaleString()}`}
                            style={styles.costCard}
                        />
                        
                        <StatCard
                            title="예산 대비"
                            value={`${Math.round((costData.thisMonth / costData.budget) * 100)}%`}
                            subtitle={`₩${costData.budget.toLocaleString()} 중`}
                            style={styles.costCard}
                        />
                    </View>
                </Card.Content>
            </Card>

            {/* 시스템 상태 */}
            <Card style={styles.section}>
                <Card.Content>
                    <Text variant="titleMedium" style={styles.sectionTitle}>
                        시스템 상태
                    </Text>
                    
                    <View style={styles.statsGrid}>
                        <StatCard
                            title="가동률"
                            value={systemStats.uptime}
                            style={styles.statCard}
                        />
                        
                        <StatCard
                            title="응답시간"
                            value={systemStats.responseTime}
                            style={styles.statCard}
                        />
                        
                        <StatCard
                            title="오류율"
                            value={systemStats.errorRate}
                            style={styles.statCard}
                        />
                        
                        <StatCard
                            title="활성 방"
                            value={systemStats.activeRooms.toString()}
                            style={styles.statCard}
                        />
                    </View>
                </Card.Content>
            </Card>

            {/* 최근 로그 */}
            <Card style={styles.section}>
                <Card.Content>
                    <View style={styles.logHeader}>
                        <Text variant="titleMedium" style={styles.sectionTitle}>
                            최근 로그
                        </Text>
                        <Button
                            mode="text"
                            onPress={() => {
                                // TODO: 전체 로그 화면으로 이동
                                console.log('전체 로그 보기');
                            }}
                        >
                            전체 보기
                        </Button>
                    </View>
                    
                    {recentLogs.map((log, index) => (
                        <View key={log.id}>
                            <List.Item
                                title={log.message}
                                description={formatTimestamp(log.timestamp)}
                                left={props => (
                                    <List.Icon 
                                        {...props} 
                                        icon={getLogIcon(log.type)}
                                        color={getLogColor(log.type)}
                                    />
                                )}
                                style={styles.logItem}
                            />
                            {index < recentLogs.length - 1 && (
                                <View style={styles.logDivider} />
                            )}
                        </View>
                    ))}
                </Card.Content>
            </Card>

            {/* 관리 도구 */}
            <Card style={styles.section}>
                <Card.Content>
                    <Text variant="titleMedium" style={styles.sectionTitle}>
                        관리 도구
                    </Text>
                    
                    <View style={styles.toolsContainer}>
                        <Button
                            mode="outlined"
                            icon="database-export"
                            onPress={() => {
                                // TODO: 데이터 백업
                                console.log('데이터 백업');
                            }}
                            style={styles.toolButton}
                        >
                            데이터 백업
                        </Button>
                        
                        <Button
                            mode="outlined"
                            icon="cog"
                            onPress={() => {
                                // TODO: 시스템 설정
                                console.log('시스템 설정');
                            }}
                            style={styles.toolButton}
                        >
                            시스템 설정
                        </Button>
                        
                        <Button
                            mode="outlined"
                            icon="chart-line"
                            onPress={() => {
                                // TODO: 상세 분석
                                console.log('상세 분석');
                            }}
                            style={styles.toolButton}
                        >
                            상세 분석
                        </Button>
                    </View>
                </Card.Content>
            </Card>
        </ScrollView>
    );
});

export default AdminScreen; 