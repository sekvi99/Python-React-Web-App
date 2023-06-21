import { User } from "../types";
export interface SidebarContainerProps{
    isOpen: boolean;
};

export interface SidebarProps {
    isOpen: boolean;
    toggle: () => void;
};

export interface ToggleProps{
    toggle: () => void;
    user: User | null;
}