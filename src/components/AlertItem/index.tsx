import React from 'react';
import { View } from 'react-native';
import { Button, Card, Chip, Divider, Text } from 'react-native-paper';
import { styles } from './styles';

interface AlertItemProps {
    message: string;
    type: 'spam' | 'ad' | 'abusive' | 'announcement' | 'normal';
    roomName: string;
    timestamp: Date;
    isRead?: boolean;
    onAction?: (action: 'ignore' | 'whitelist' | 'confirm') => void;
    onPress?: () => void;
}

const getTypeLabel = (type: string) => {
    switch (type) {
        case 'spam': return '도배';
        case 'ad': return '광고';
        case 'abusive': return '욕설/분쟁';
        case 'announcement': return '공고';
        default: return '정상';
    }
};

const getTypeColor = (type: string) => {
    switch (type) {
        case 'spam': return '#F44336';
        case 'ad': return '#FF9800';
        case 'abusive': return '#E91E63';
        case 'announcement': return '#2196F3';
        default: return '#4CAF50';
    }
};

export const AlertItem: React.FC<AlertItemProps> = ({
    message,
    type,
    roomName,
    timestamp,
    isRead = false,
    onAction,
    onPress,
}) => {
    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <Card 
            style={[styles.card, !isRead && styles.unread]} 
            onPress={onPress}
            mode="outlined"
        >
            <Card.Content>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Chip 
                            mode="flat"
                            textStyle={{ color: getTypeColor(type) }}
                            style={[styles.typeChip, { borderColor: getTypeColor(type) }]}
                        >
                            {getTypeLabel(type)}
                        </Chip>
                        <Text variant="bodySmall" style={styles.timestamp}>
                            {formatTime(timestamp)}
                        </Text>
                    </View>
                    <Text variant="bodySmall" style={styles.roomName}>
                        {roomName}
                    </Text>
                </View>

                <Text variant="bodyMedium" style={styles.message} numberOfLines={3}>
                    {message}
                </Text>

                {type !== 'normal' && onAction && (
                    <>
                        <Divider style={styles.divider} />
                        <View style={styles.actions}>
                            <Button 
                                mode="text" 
                                onPress={() => onAction('ignore')}
                                style={styles.actionButton}
                                labelStyle={styles.actionButtonText}
                            >
                                무시
                            </Button>
                            <Button 
                                mode="text" 
                                onPress={() => onAction('whitelist')}
                                style={styles.actionButton}
                                labelStyle={styles.actionButtonText}
                            >
                                화이트리스트
                            </Button>
                            <Button 
                                mode="contained" 
                                onPress={() => onAction('confirm')}
                                style={styles.confirmButton}
                            >
                                확인
                            </Button>
                        </View>
                    </>
                )}
            </Card.Content>
        </Card>
    );
}; 