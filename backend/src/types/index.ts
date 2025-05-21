export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    created_at: string;
}

export interface ApiResponse<T> {
    data: T;
    error: string | null;
}