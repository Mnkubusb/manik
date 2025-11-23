/* eslint-disable @typescript-eslint/no-explicit-any */
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '@/constants';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';


interface WindowItem {
    isOpen: boolean;
    zIndex: number;
    data: any[] | null;
}

interface WindowStore {
    windows: Record<string, WindowItem>;
    nextZIndex: number;
    openWindow: (windowKey: string, data?: any[] | null) => void;
    closeWindow: (windowKey: string) => void;
    focusWindow: (windowKey: string) => void;
}

const useWindowStore = create<WindowStore>()(immer((set: (fn: (state: WindowStore) => void) => void) => ({
        windows: WINDOW_CONFIG as Record<string, WindowItem>,
        nextZIndex: INITIAL_Z_INDEX + 1,
        openWindow: (windowKey: string, data?: any[] | null) => set((state) => {
            const win = state.windows[windowKey];
            if(!win) return;
            win.isOpen = true;
            win.zIndex = state.nextZIndex;
            win.data = data ?? win.data;
            state.nextZIndex++;
        }),
        closeWindow: (windowKey: string) => set((state) => {
            const win = state.windows[windowKey];
            if (!win) return;
            win.isOpen = false;
            win.zIndex = INITIAL_Z_INDEX;
            win.data = null;
        }),
        focusWindow: (windowKey: string) => set((state) => {
            const win = state.windows[windowKey];
            if (!win) return;
            win.zIndex = state.nextZIndex++;
        })
})));

export default useWindowStore;