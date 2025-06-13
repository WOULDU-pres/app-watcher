import React from 'react';
import { View } from 'react-native';
import { Card, IconButton, ProgressBar, Text } from 'react-native-paper';
import { styles } from './styles';

interface StatCardProps {
    title?: string; // admin.tsx에서 사용하는 속성
    label?: string; // 기존 속성 유지
    value: string | number;
    subtitle?: string; // admin.tsx에서 사용하는 속성
    icon?: string;
    progress?: number; // 0-1 사이의 값
    trend?: 'up' | 'down' | 'stable';
    trendValue?: string; // admin.tsx에서 사용하는 속성
    color?: string;
    onPress?: () => void;
    style?: any;
}

export const StatCard: React.FC<StatCardProps> = ({
    title,
    label,
    value,
    subtitle,
    icon,
    progress,
    trend,
    trendValue,
    color = '#2196F3',
    onPress,
    style,
}) => {
    const getTrendIcon = () => {
        switch (trend) {
            case 'up': return 'trending-up';
            case 'down': return 'trending-down';
            case 'stable': return 'trending-neutral';
            default: return undefined;
        }
    };

    const getTrendColor = () => {
        switch (trend) {
            case 'up': return '#4CAF50';
            case 'down': return '#F44336';
            case 'stable': return '#FF9800';
            default: return '#666666';
        }
    };

    return (
        <Card 
            style={[styles.card, style]} 
            onPress={onPress}
            mode="elevated"
        >
            <Card.Content>
                <View style={styles.header}>
                    <View style={styles.iconContainer}>
                        {icon && (
                            <IconButton 
                                icon={icon} 
                                size={24} 
                                iconColor={color}
                                style={styles.icon}
                            />
                        )}
                    </View>
                    {trend && (
                        <IconButton 
                            icon={getTrendIcon()!} 
                            size={16} 
                            iconColor={getTrendColor()}
                            style={styles.trendIcon}
                        />
                    )}
                </View>

                <Text variant="headlineMedium" style={[styles.value, { color }]}>
                    {value}
                </Text>

                <Text variant="bodyMedium" style={styles.label}>
                    {title || label}
                </Text>

                {subtitle && (
                    <Text variant="bodySmall" style={styles.subtitle}>
                        {subtitle}
                    </Text>
                )}

                {trendValue && (
                    <Text variant="bodySmall" style={[styles.trendValue, { color: getTrendColor() }]}>
                        {trend === 'up' ? '+' : trend === 'down' ? '-' : ''}{trendValue}
                    </Text>
                )}

                {progress !== undefined && (
                    <ProgressBar 
                        progress={progress} 
                        color={color}
                        style={styles.progressBar}
                    />
                )}
            </Card.Content>
        </Card>
    );
}; 