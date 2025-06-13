export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    
    // 특정 용도별 spacing
    cardPadding: 16,
    screenPadding: 20,
    listItemPadding: 12,
    buttonPadding: 16,
    
    // 간격
    itemGap: 8,
    sectionGap: 24,
    componentGap: 16,
    
    // 여백
    headerMargin: 16,
    footerMargin: 20,
    contentMargin: 16,
} as const;

export type Spacing = typeof spacing; 