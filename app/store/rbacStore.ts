"use client";

import { create } from 'zustand';

export interface Permission {
  id: string;
  name: string;
  description: string | null;
  createdAt: Date;
}

export interface Role {
  id: string;
  name: string;
  createdAt: Date;
  permissions: string[];
}

export interface User {
  id: string;
  email: string;
  createdAt: Date;
  roles: string[];
}

interface RBACState {
  permissions: Permission[];
  roles: Role[];
  users: User[];
  currentUser: { id: string; email: string } | null;
  isAuthenticated: boolean;
  
  // Auth actions
  login: (email: string) => void;
  logout: () => void;
  
  // Permission actions
  addPermission: (permission: Omit<Permission, 'id' | 'createdAt'>) => void;
  updatePermission: (id: string, updates: Partial<Permission>) => void;
  deletePermission: (id: string) => void;
  
  // Role actions
  addRole: (role: Omit<Role, 'id' | 'createdAt' | 'permissions'>) => void;
  updateRole: (id: string, updates: Partial<Role>) => void;
  deleteRole: (id: string) => void;
  
  // Role-Permission actions
  assignPermissionToRole: (roleId: string, permissionId: string) => void;
  removePermissionFromRole: (roleId: string, permissionId: string) => void;
}

const generateId = () => crypto.randomUUID();

// Sample data
const samplePermissions: Permission[] = [
  { id: '1', name: 'view:dashboard', description: 'Access the main dashboard', createdAt: new Date() },
  { id: '2', name: 'edit:articles', description: 'Create and edit articles', createdAt: new Date() },
  { id: '3', name: 'delete:articles', description: 'Delete articles', createdAt: new Date() },
  { id: '4', name: 'manage:users', description: 'Manage user accounts', createdAt: new Date() },
  { id: '5', name: 'view:analytics', description: 'View analytics data', createdAt: new Date() },
  { id: '6', name: 'manage:settings', description: 'Modify system settings', createdAt: new Date() },
];

const sampleRoles: Role[] = [
  { id: '1', name: 'Administrator', createdAt: new Date(), permissions: ['1', '2', '3', '4', '5', '6'] },
  { id: '2', name: 'Content Editor', createdAt: new Date(), permissions: ['1', '2', '5'] },
  { id: '3', name: 'Viewer', createdAt: new Date(), permissions: ['1', '5'] },
];

export const useRBACStore = create<RBACState>((set) => ({
  permissions: samplePermissions,
  roles: sampleRoles,
  users: [],
  currentUser: null,
  isAuthenticated: false,
  
  login: (email) => set({ 
    isAuthenticated: true, 
    currentUser: { id: generateId(), email } 
  }),
  
  logout: () => set({ 
    isAuthenticated: false, 
    currentUser: null 
  }),
  
  addPermission: (permission) => set((state) => ({
    permissions: [...state.permissions, {
      ...permission,
      id: generateId(),
      createdAt: new Date(),
    }]
  })),
  
  updatePermission: (id, updates) => set((state) => ({
    permissions: state.permissions.map((p) => 
      p.id === id ? { ...p, ...updates } : p
    )
  })),
  
  deletePermission: (id) => set((state) => ({
    permissions: state.permissions.filter((p) => p.id !== id),
    roles: state.roles.map((r) => ({
      ...r,
      permissions: r.permissions.filter((pId) => pId !== id)
    }))
  })),
  
  addRole: (role) => set((state) => ({
    roles: [...state.roles, {
      ...role,
      id: generateId(),
      createdAt: new Date(),
      permissions: [],
    }]
  })),
  
  updateRole: (id, updates) => set((state) => ({
    roles: state.roles.map((r) => 
      r.id === id ? { ...r, ...updates } : r
    )
  })),
  
  deleteRole: (id) => set((state) => ({
    roles: state.roles.filter((r) => r.id !== id)
  })),
  
  assignPermissionToRole: (roleId, permissionId) => set((state) => ({
    roles: state.roles.map((r) => 
      r.id === roleId && !r.permissions.includes(permissionId)
        ? { ...r, permissions: [...r.permissions, permissionId] }
        : r
    )
  })),
  
  removePermissionFromRole: (roleId, permissionId) => set((state) => ({
    roles: state.roles.map((r) => 
      r.id === roleId
        ? { ...r, permissions: r.permissions.filter((pId) => pId !== permissionId) }
        : r
    )
  })),
}));