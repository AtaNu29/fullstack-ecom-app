import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product } from './data'

export interface CartItem {
  product: Product
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product: Product) => {
        const items = get().items
        const existingItem = items.find((item) => item.product.id === product.id)
        
        if (existingItem) {
          // For digital products, don't allow duplicates
          return
        }
        
        set({ items: [...items, { product, quantity: 1 }] })
      },
      removeItem: (productId: string) => {
        set({ items: get().items.filter((item) => item.product.id !== productId) })
      },
      clearCart: () => {
        set({ items: [] })
      },
      getTotal: () => {
        return get().items.reduce((total, item) => total + item.product.price * item.quantity, 0)
      },
      getItemCount: () => {
        return get().items.length
      },
    }),
    {
      name: 'cart-storage',
    }
  )
)
