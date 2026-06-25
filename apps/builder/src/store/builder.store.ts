import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { PageConfig, ChatMessage } from '@/types/silicon'

interface BuilderState {
  messages: ChatMessage[]
  currentPage: PageConfig | null
  isGenerating: boolean

  addMessage: (message: ChatMessage) => void
  setCurrentPage: (page: PageConfig) => void
  setGenerating: (loading: boolean) => void
  reset: () => void
}

export const useBuilderStore = create<BuilderState>()(
  persist(
    (set) => ({
      messages: [],
      currentPage: null,
      isGenerating: false,

      addMessage: (message) =>
        set((state) => ({ messages: [...state.messages, message] })),

      setCurrentPage: (page) => set({ currentPage: page }),

      setGenerating: (loading) => set({ isGenerating: loading }),

      reset: () => set({ messages: [], currentPage: null, isGenerating: false }),
    }),
    {
      name: 'silicon-builder',
      partialize: (state) => ({
        messages: state.messages,
        currentPage: state.currentPage,
      }),
    },
  ),
)
