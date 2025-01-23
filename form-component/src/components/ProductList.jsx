import Image from "next/image";

const ProductList = ({ Products }) => {
    return <div className="flex columns-5">
        {
            Products.map((product) => {
                return <li
                    className="flex flex-col mx-3 my-3 p-4 border border-black/10 shadow-sm rounded-xl max-w-64"
                    key={product.id}>
                    <Image
                        src={product.cover}
                        alt={product.title}
                        className="w-full object-cover"
                        width={100}
                        height={100} />
                    <h2 className="text-3xl my-3">{product.title}</h2>
                    <p>{product.description}</p>
                </li>
            })
        }
    </div>
};

export default ProductList