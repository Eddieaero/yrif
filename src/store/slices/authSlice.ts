import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserRole } from '../../types';

interface AuthState {
    role: UserRole;
    isAuthenticated: boolean;
    user: {
        name: string;
        email: string;
        avatar?: string;
    } | null;
}

const initialState: AuthState = {
    role: 'student',
    isAuthenticated: true, // Simulating logged in for MVP
    user: {
        name: 'Sarah Johnson',
        email: 'sarah.j@yrif.tz',
        avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=0F172A&color=fff',
    },
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setRole: (state, action: PayloadAction<UserRole>) => {
            state.role = action.payload;
        },
        login: (state, action: PayloadAction<AuthState['user']>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { setRole, login, logout } = authSlice.actions;
export default authSlice.reducer;
