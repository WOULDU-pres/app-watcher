import { Instance, types } from 'mobx-state-tree';
import { User } from './models/User';

export const RootStore = types
    .model('RootStore', {
        user: types.optional(User, {
            id: 'default',
            name: 'Admin',
            role: 'admin',
        }),
        
        // 앱 상태
        isLoading: types.optional(types.boolean, false),
        error: types.optional(types.string, ''),
        
        // 감지 통계
        stats: types.optional(
            types.model({
                totalMessages: types.optional(types.number, 0),
                spamMessages: types.optional(types.number, 0),
                adMessages: types.optional(types.number, 0),
                abusiveMessages: types.optional(types.number, 0),
                announcements: types.optional(types.number, 0),
                activeRooms: types.optional(types.number, 0),
            }),
            {}
        ),
        
        // 최근 알림
        recentAlerts: types.optional(
            types.array(
                types.model({
                    id: types.identifier,
                    message: types.string,
                    type: types.enumeration(['spam', 'ad', 'abusive', 'announcement', 'normal']),
                    roomName: types.string,
                    timestamp: types.Date,
                    isRead: types.optional(types.boolean, false),
                })
            ),
            []
        ),
    })
    .actions((self) => ({
        setLoading(loading: boolean) {
            self.isLoading = loading;
        },
        
        setError(error: string) {
            self.error = error;
        },
        
        clearError() {
            self.error = '';
        },
        
        updateStats(stats: Partial<typeof self.stats>) {
            Object.assign(self.stats, stats);
        },
        
        addAlert(alert: {
            id: string;
            message: string;
            type: 'spam' | 'ad' | 'abusive' | 'announcement' | 'normal';
            roomName: string;
            timestamp: Date;
        }) {
            self.recentAlerts.unshift(alert);
            // 최대 50개까지만 유지
            if (self.recentAlerts.length > 50) {
                self.recentAlerts.splice(50);
            }
        },
        
        markAlertAsRead(alertId: string) {
            const alert = self.recentAlerts.find(a => a.id === alertId);
            if (alert) {
                alert.isRead = true;
            }
        },
        
        clearAlerts() {
            self.recentAlerts.clear();
        },
    }))
    .views((self) => ({
        get unreadAlertsCount() {
            return self.recentAlerts.filter(alert => !alert.isRead).length;
        },
        
        get detectionRate() {
            const total = self.stats.totalMessages;
            if (total === 0) return 0;
            const detected = self.stats.spamMessages + self.stats.adMessages + self.stats.abusiveMessages;
            return Math.round((detected / total) * 100);
        },
        
        get isDarkMode() {
            return self.user.preferences.darkMode;
        },
    }));

export type RootStoreType = Instance<typeof RootStore>;

// 스토어 인스턴스 생성
export const rootStore = RootStore.create({}); 