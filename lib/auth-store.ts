import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from './data'
import { users } from './data'

interface AuthStore {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => { success: boolean; error?: string }
  logout: () => void
  register: (email: string, password: string, name: string) => { success: boolean; error?: string }
}

// Mock authentication - Replace with Supabase auth when connected
export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      login: (email: string, _password: string) => {
        // Mock login - In production, validate against Supabase
        const user = users.find((u) => u.email === email)
        
        if (user) {
          set({ user, isAuthenticated: true })
          return { success: true }
        }
        
        // For demo purposes, allow any email/password combo
        // If email contains "admin", grant admin role for demo
        const isAdminEmail = email.toLowerCase().includes('admin')
        const mockUser: User = {
          id: 'mock-' + Date.now(),
          email,
          name: email.split('@')[0],
          role: isAdminEmail ? 'admin' : 'customer',
          createdAt: new Date().toISOString(),
        }
        set({ user: mockUser, isAuthenticated: true })
        return { success: true }
      },
      logout: () => {
        set({ user: null, isAuthenticated: false })
      },
      register: (email: string, _password: string, name: string) => {
        // Mock registration - In production, use Supabase auth
        const existingUser = users.find((u) => u.email === email)
        
        if (existingUser) {
          return { success: false, error: 'Email already exists' }
        }
        
        const newUser: User = {
          id: 'user-' + Date.now(),
          email,
          name,
          role: 'customer',
          createdAt: new Date().toISOString(),
        }
        
        set({ user: newUser, isAuthenticated: true })
        return { success: true }
      },
    }),
    {
      name: 'auth-storage',
    }
  )
)

// Helper to check admin access
export function isAdmin(user: User | null): boolean {
  return user?.role === 'admin'
}

export function isStaff(user: User | null): boolean {
  return user?.role === 'admin' || user?.role === 'staff'
}
