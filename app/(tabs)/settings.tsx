import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Card, Divider, List, Switch, Text } from 'react-native-paper';
import { rootStore } from '../../src/store/RootStore';
import { styles } from './settingsStyles';

const SettingsScreen = observer(() => {
    const { user } = rootStore;
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [vibrationEnabled, setVibrationEnabled] = useState(true);
    const [autoWhitelistEnabled, setAutoWhitelistEnabled] = useState(false);

    const handleLogout = () => {
        // TODO: 로그아웃 처리
        console.log('로그아웃');
    };

    const handleExportData = () => {
        // TODO: 데이터 내보내기
        console.log('데이터 내보내기');
    };

    const handleImportData = () => {
        // TODO: 데이터 가져오기
        console.log('데이터 가져오기');
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* 헤더 */}
            <View style={styles.header}>
                <Text variant="headlineMedium" style={styles.title}>
                    설정
                </Text>
                <Text variant="bodyMedium" style={styles.subtitle}>
                    앱 환경설정 및 계정 관리
                </Text>
            </View>

            {/* 계정 정보 */}
            <Card style={styles.section}>
                <Card.Content>
                    <Text variant="titleMedium" style={styles.sectionTitle}>
                        계정 정보
                    </Text>
                    <View style={styles.accountInfo}>
                        <Text variant="bodyLarge" style={styles.username}>
                            {user.username || '사용자'}
                        </Text>
                        <Text variant="bodyMedium" style={styles.userRole}>
                            {user.role === 'admin' ? '관리자' : '일반 사용자'}
                        </Text>
                    </View>
                </Card.Content>
            </Card>

            {/* 알림 설정 */}
            <Card style={styles.section}>
                <Card.Content>
                    <Text variant="titleMedium" style={styles.sectionTitle}>
                        알림 설정
                    </Text>
                    
                    <List.Item
                        title="푸시 알림"
                        description="새로운 감지 알림을 받습니다"
                        left={props => <List.Icon {...props} icon="bell" />}
                        right={() => (
                            <Switch
                                value={notificationsEnabled}
                                onValueChange={setNotificationsEnabled}
                            />
                        )}
                        style={styles.listItem}
                    />
                    
                    <Divider style={styles.divider} />
                    
                    <List.Item
                        title="알림음"
                        description="알림 시 소리를 재생합니다"
                        left={props => <List.Icon {...props} icon="volume-high" />}
                        right={() => (
                            <Switch
                                value={soundEnabled}
                                onValueChange={setSoundEnabled}
                                disabled={!notificationsEnabled}
                            />
                        )}
                        style={styles.listItem}
                    />
                    
                    <Divider style={styles.divider} />
                    
                    <List.Item
                        title="진동"
                        description="알림 시 진동을 사용합니다"
                        left={props => <List.Icon {...props} icon="vibrate" />}
                        right={() => (
                            <Switch
                                value={vibrationEnabled}
                                onValueChange={setVibrationEnabled}
                                disabled={!notificationsEnabled}
                            />
                        )}
                        style={styles.listItem}
                    />
                </Card.Content>
            </Card>

            {/* 감지 설정 */}
            <Card style={styles.section}>
                <Card.Content>
                    <Text variant="titleMedium" style={styles.sectionTitle}>
                        감지 설정
                    </Text>
                    
                    <List.Item
                        title="자동 화이트리스트"
                        description="반복 감지 시 자동으로 화이트리스트에 추가"
                        left={props => <List.Icon {...props} icon="shield-check" />}
                        right={() => (
                            <Switch
                                value={autoWhitelistEnabled}
                                onValueChange={setAutoWhitelistEnabled}
                            />
                        )}
                        style={styles.listItem}
                    />
                    
                    <Divider style={styles.divider} />
                    
                    <List.Item
                        title="감시방 관리"
                        description="감시 중인 채팅방 목록을 관리합니다"
                        left={props => <List.Icon {...props} icon="chat-processing" />}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                        onPress={() => {
                            // TODO: 감시방 관리 화면으로 이동
                            console.log('감시방 관리');
                        }}
                        style={styles.listItem}
                    />
                    
                    <Divider style={styles.divider} />
                    
                    <List.Item
                        title="화이트리스트 관리"
                        description="예외 처리할 키워드를 관리합니다"
                        left={props => <List.Icon {...props} icon="format-list-checks" />}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                        onPress={() => {
                            // TODO: 화이트리스트 관리 화면으로 이동
                            console.log('화이트리스트 관리');
                        }}
                        style={styles.listItem}
                    />
                </Card.Content>
            </Card>

            {/* 데이터 관리 */}
            <Card style={styles.section}>
                <Card.Content>
                    <Text variant="titleMedium" style={styles.sectionTitle}>
                        데이터 관리
                    </Text>
                    
                    <View style={styles.buttonContainer}>
                        <Button
                            mode="outlined"
                            onPress={handleExportData}
                            icon="export"
                            style={styles.dataButton}
                        >
                            데이터 내보내기
                        </Button>
                        
                        <Button
                            mode="outlined"
                            onPress={handleImportData}
                            icon="import"
                            style={styles.dataButton}
                        >
                            데이터 가져오기
                        </Button>
                    </View>
                </Card.Content>
            </Card>

            {/* 앱 정보 */}
            <Card style={styles.section}>
                <Card.Content>
                    <Text variant="titleMedium" style={styles.sectionTitle}>
                        앱 정보
                    </Text>
                    
                    <List.Item
                        title="버전"
                        description="1.0.0"
                        left={props => <List.Icon {...props} icon="information" />}
                        style={styles.listItem}
                    />
                    
                    <Divider style={styles.divider} />
                    
                    <List.Item
                        title="개발자 정보"
                        description="OpenKakao Watcher Team"
                        left={props => <List.Icon {...props} icon="account-group" />}
                        style={styles.listItem}
                    />
                    
                    <Divider style={styles.divider} />
                    
                    <List.Item
                        title="오픈소스 라이선스"
                        left={props => <List.Icon {...props} icon="license" />}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                        onPress={() => {
                            // TODO: 라이선스 화면으로 이동
                            console.log('오픈소스 라이선스');
                        }}
                        style={styles.listItem}
                    />
                </Card.Content>
            </Card>

            {/* 로그아웃 */}
            <View style={styles.logoutContainer}>
                <Button
                    mode="contained"
                    onPress={handleLogout}
                    icon="logout"
                    buttonColor="#F44336"
                    textColor="#FFFFFF"
                    style={styles.logoutButton}
                >
                    로그아웃
                </Button>
            </View>
        </ScrollView>
    );
});

export default SettingsScreen; 