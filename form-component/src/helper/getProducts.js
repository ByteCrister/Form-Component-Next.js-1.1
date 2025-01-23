import ProductsData from "@/utils/ProductsData";

const getProducts = (query) => {
    return ProductsData().filter((product) => {
        return (String(product.id).includes(String(query)) || String(query).includes(String(product.id))) ||
            (String(product.title).includes(String(query)) || String(query).includes(String(product.title))) ||
            (String(product.price).includes(String(query)) || String(query).includes(String(product.price))) ||
            (String(product.description).includes(String(query)) || String(query).includes(String(product.description))) ||
            (String(product.category).includes(String(query)) || String(query).includes(String(product.category))) ||
            ((String(product.rating.rate).includes(String(query)) || String(query).includes(String(product.rating.rate))) ||
                (String(product.rating.count).includes(String(query)) || String(query).includes(String(product.rating.count))))
    });
};

export default getProducts;