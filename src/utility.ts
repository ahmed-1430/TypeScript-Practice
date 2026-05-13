// utility type

type Product = {
    id: number,
    name: string,
    price: string,
    stock: number,
    color?: string
}

// example of utilty 'pick'
type productSummary = Pick<Product, 'id' | 'name' | 'price'>

type ProductWithoutStock = Omit<Product, "stock" | "color">


type ProductWithColor = Required<Product>

const product: ProductWithColor = {
    id: 854,
    name: "Keyboard",
    price: '888',
    stock: 5,
    color: 'black'
};

type optionalProduct = Partial<Product>;

type productReadOnly = Readonly<Product>;

const emptyobj: Record<string, unknown> = {

}