import React from 'react';
import { View } from 'react-native';
import { IconButton, Card as PaperCard, Text } from 'react-native-paper';
import { styles } from './styles';

interface CardProps {
    title?: string;
    content?: string;
    icon?: string;
    status?: 'success' | 'warning' | 'danger' | 'info' | 'normal';
    onPress?: () => void;
    onActionPress?: () => void;
    actionIcon?: string;
    children?: React.ReactNode;
    style?: any;
}

export const Card: React.FC<CardProps> = ({
    title,
    content,
    icon,
    status = 'normal',
    onPress,
    onActionPress,
    actionIcon,
    children,
    style,
}) => {
    return (
        <PaperCard 
            style={[styles.card, styles[status], style]} 
            onPress={onPress}
            mode="elevated"
        >
            <PaperCard.Content>
                <View style={styles.header}>
                    <View style={styles.titleContainer}>
                        {icon && (
                            <IconButton 
                                icon={icon} 
                                size={20} 
                                style={styles.titleIcon}
                            />
                        )}
                        {title && (
                            <Text variant="titleMedium" style={styles.title}>
                                {title}
                            </Text>
                        )}
                    </View>
                    {actionIcon && onActionPress && (
                        <IconButton 
                            icon={actionIcon} 
                            size={20} 
                            onPress={onActionPress}
                            style={styles.actionIcon}
                        />
                    )}
                </View>
                
                {content && (
                    <Text variant="bodyMedium" style={styles.content}>
                        {content}
                    </Text>
                )}
                
                {children}
            </PaperCard.Content>
        </PaperCard>
    );
}; 