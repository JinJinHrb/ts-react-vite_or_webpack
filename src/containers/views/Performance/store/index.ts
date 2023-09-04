import { create } from 'zustand'
export const useQueryStore = create(set => ({
    name: '',
    setName: (name: string) => set({ name })
}))
