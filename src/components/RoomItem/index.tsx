import React from 'react';
import { View } from 'react-native';
import { Card, Chip, IconButton, Switch, Text } from 'react-native-paper';
import { styles } from './styles';

interface RoomItemProps {
    roomName: string;
    memberCount: number;
    isActive: boolean;
    lastActivity?: Date;
    alertCount?: number;
    onToggle?: (isActive: boolean) => void;
    onRemove?: () => void;
    onPress?: () => void;
    style?: any;
}

export const RoomItem: React.FC<RoomItemProps> = ({
    roomName,
    memberCount,
    isActive,
    lastActivity,
    alertCount = 0,
    onToggle,
    onRemove,
    onPress,
    style,
}) => {
    const formatLastActivity = (date?: Date) => {
        if (!date) return '활동 없음';
        
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        
        if (minutes < 60) return `${minutes}분 전`;
        if (hours < 24) return `${hours}시간 전`;
        return `${days}일 전`;
    };

    return (
        <Card 
            style={[styles.card, style]} 
            onPress={onPress}
            mode="outlined"
        >
            <Card.Content>
                <View style={styles.header}>
                    <View style={styles.titleContainer}>
                        <Text variant="titleMedium" style={styles.roomName} numberOfLines={1}>
                            {roomName}
                        </Text>
                        <View style={styles.statusContainer}>
                            <Chip 
                                mode="flat"
                                style={[styles.statusChip, isActive ? styles.activeChip : styles.inactiveChip]}
                                textStyle={[styles.statusText, isActive ? styles.activeText : styles.inactiveText]}
                            >
                                {isActive ? '감시중' : '중지됨'}
                            </Chip>
                            {alertCount > 0 && (
                                <Chip 
                                    mode="flat"
                                    style={styles.alertChip}
                                    textStyle={styles.alertText}
                                >
                                    {alertCount}개 알림
                                </Chip>
                            )}
                        </View>
                    </View>
                    
                    <View style={styles.actions}>
                        {onToggle && (
                            <Switch
                                value={isActive}
                                onValueChange={onToggle}
                                style={styles.switch}
                            />
                        )}
                        {onRemove && (
                            <IconButton
                                icon="delete"
                                size={20}
                                onPress={onRemove}
                                style={styles.deleteButton}
                            />
                        )}
                    </View>
                </View>

                <View style={styles.info}>
                    <Text variant="bodySmall" style={styles.infoText}>
                        멤버 {memberCount}명
                    </Text>
                    <Text variant="bodySmall" style={styles.infoText}>
                        • {formatLastActivity(lastActivity)}
                    </Text>
                </View>
            </Card.Content>
        </Card>
    );
}; 