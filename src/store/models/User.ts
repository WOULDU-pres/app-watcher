import { types } from 'mobx-state-tree';

export const User = types
    .model('User', {
        id: types.identifier,
        name: types.string,
        username: types.optional(types.string, ''), // settings.tsx에서 사용하는 속성 추가
        email: types.optional(types.string, ''),
        role: types.enumeration('UserRole', ['admin', 'moderator', 'viewer']),
        isAuthenticated: types.optional(types.boolean, false),
        preferences: types.optional(
            types.model({
                darkMode: types.optional(types.boolean, false),
                notifications: types.optional(types.boolean, true),
                language: types.optional(types.string, 'ko'),
            }),
            {}
        ),
    })
    .actions((self) => ({
        setAuthenticated(isAuth: boolean) {
            self.isAuthenticated = isAuth;
        },
        updatePreferences(prefs: Partial<typeof self.preferences>) {
            Object.assign(self.preferences, prefs);
        },
        setDarkMode(enabled: boolean) {
            self.preferences.darkMode = enabled;
        },
        setNotifications(enabled: boolean) {
            self.preferences.notifications = enabled;
        },
        setLanguage(lang: string) {
            self.preferences.language = lang;
        },
    }))
    .views((self) => ({
        get isAdmin() {
            return self.role === 'admin';
        },
        get canModerate() {
            return self.role === 'admin' || self.role === 'moderator';
        },
    }));

export type UserType = typeof User.Type; 