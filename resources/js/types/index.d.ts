export interface User {
    id: number | undefined;
    name: string;
    meta: {
        contact?: {
            address?: string
            city?: string
            country?: string,
            phone?: string
        },
        billing: {
            name?: string,
            email?: string,
            phone?: string,
            country?: string,
            address?: string,
            state?: string,
            city?: string,
            zip?:string
        }
    };
    userName: string
    mobile: string
    active: boolean
    password: string
    password_confirmation?: string
    email: string;
}

export type PageProps<T extends Record<string, any> = Record<string, any>> = T & {
    auth: {
        user: User;
    };
};
