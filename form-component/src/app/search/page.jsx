import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import getProducts from "@/helper/getProducts";

const Search = async ({ searchParams }) => {
    const { query } = await searchParams;
    const Products = getProducts(query);

    return (
        <div className="p-1 flex flex-col items-center gap-1">
            <SearchForm />
            {Products && Products.length > 0 ? <ProductList Products={Products} /> : <h1>No Products Found With {query} parameter.</h1>}
        </div>
    )
};

export default Search;