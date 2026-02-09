export type UserRole = 'student' | 'mentor' | 'admin';

export interface DashboardContextType {
    role: UserRole;
}

export interface User {
    id: number;
    name: string;
    role: UserRole;
    email: string;
    status: 'Active' | 'Pending' | 'Rejected';
    avatar?: string;
}

export interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    category: string;
    attendees: number;
    status: 'Open' | 'Closed' | 'Closing Soon';
    registered: boolean;
}

export interface Mentor {
    name: string;
    role: string;
    expertise: string[];
    status: string;
    nextSession: string;
}
