export type SubMenuItem = {
    title: string
    href: string
    description?: string
}

export type MenuItem = {
    title: string
    href?: string
    subItems?: SubMenuItem[]
}

export interface NavbarProps {
    logo?: string
    menuItems: MenuItem[]
    showThemeToggle?: boolean
    showLogButton?: boolean
    buttonDisplay?: string
    onLogClick?: () => void
}