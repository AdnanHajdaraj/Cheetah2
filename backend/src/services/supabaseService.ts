import { createClient } from '@supabase/supabase-js';

class SupabaseService {
    private supabaseUrl: string;
    private supabaseKey: string;
    private supabase;

    constructor() {
        this.supabaseUrl = process.env.SUPABASE_URL || '';
        this.supabaseKey = process.env.SUPABASE_KEY || '';
        this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
    }

    async fetchProducts() {
        const { data, error } = await this.supabase
            .from('products')
            .select('*');

        if (error) {
            throw new Error(error.message);
        }

        return data;
    }

    async addProduct(product: any) {
        const { data, error } = await this.supabase
            .from('products')
            .insert([product]);

        if (error) {
            throw new Error(error.message);
        }

        return data;
    }
}

export default SupabaseService;