export interface User {
    id: string;
    name: string;
    password: string;
    isAdmin: boolean;
    isAuthenticated: boolean;
}

export interface Item {
    id: string;
    name: string;
    avatar: string;
    price: number;
    percentageCGST: number;
    percentageSGST: number;
}

export interface Order {
    id: string;
    items: {itemId: string, itemQuantity: number}[];
    userId: string;
    orderDate: Date;
    amountGross: number;
    amountCGST: number;
    amountSGST: number;
    amountNet: number;
}
