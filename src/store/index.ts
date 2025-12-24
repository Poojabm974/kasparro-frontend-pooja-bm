import { create } from 'zustand';
import type { Brand, ModuleId } from '@/types';

// Brand Store
interface BrandState {
    brands: Brand[];
    selectedBrandId: string | null;
    setBrands: (brands: Brand[]) => void;
    setSelectedBrand: (brandId: string) => void;
    getSelectedBrand: () => Brand | undefined;
}

export const useBrandStore = create<BrandState>((set, get) => ({
    brands: [],
    selectedBrandId: null,

    setBrands: (brands) => set({ brands }),

    setSelectedBrand: (brandId) => set({ selectedBrandId: brandId }),

    getSelectedBrand: () => {
        const state = get();
        return state.brands.find(b => b.id === state.selectedBrandId);
    },
}));

// Audit Module Store
interface AuditState {
    selectedModuleId: ModuleId;
    setSelectedModule: (moduleId: ModuleId) => void;
}

export const useAuditStore = create<AuditState>((set) => ({
    selectedModuleId: 'content-quality',
    setSelectedModule: (moduleId) => set({ selectedModuleId: moduleId }),
}));

// Theme Store (for dark/light mode)
interface ThemeState {
    isDark: boolean;
    toggleTheme: () => void;
    setTheme: (isDark: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
    isDark: false,
    toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
    setTheme: (isDark) => set({ isDark }),
}));
