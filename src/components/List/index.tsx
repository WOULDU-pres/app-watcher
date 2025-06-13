import React from 'react';
import { FlatList, View } from 'react-native';
import { Divider, List as PaperList } from 'react-native-paper';
import { styles } from './styles';

interface ListItem {
    id: string;
    title: string;
    description?: string;
    icon?: string;
    rightIcon?: string;
    onPress?: () => void;
    disabled?: boolean;
}

interface ListProps {
    items: ListItem[];
    title?: string;
    showDividers?: boolean;
    style?: any;
}

export const List: React.FC<ListProps> = ({
    items,
    title,
    showDividers = true,
    style,
}) => {
    const renderItem = ({ item, index }: { item: ListItem; index: number }) => (
        <View>
            <PaperList.Item
                title={item.title}
                description={item.description}
                left={item.icon ? (props) => <PaperList.Icon {...props} icon={item.icon!} /> : undefined}
                right={item.rightIcon ? (props) => <PaperList.Icon {...props} icon={item.rightIcon!} /> : undefined}
                onPress={item.onPress}
                disabled={item.disabled}
                style={styles.listItem}
            />
            {showDividers && index < items.length - 1 && (
                <Divider style={styles.divider} />
            )}
        </View>
    );

    return (
        <View style={[styles.container, style]}>
            {title && (
                <PaperList.Subheader style={styles.title}>
                    {title}
                </PaperList.Subheader>
            )}
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                style={styles.list}
            />
        </View>
    );
}; 