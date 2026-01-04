export interface Auth {
    user: User;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Specialization {
    id: number;
    name: string;
    description: string;
    image?: string | null;
    conditions_count?: number;
    created_at?: string;
    updated_at?: string;
}

export interface Condition {
    id: number;
    specialization_id: number;
    name: string;
    description: string;
    specialization?: Specialization;
    created_at?: string;
    updated_at?: string;
}
