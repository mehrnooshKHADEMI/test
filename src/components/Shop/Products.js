import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 5000,
    name: "book1",
    description: "i ever the book",
  },
  {
    id: "p2",
    price: 6000,
    name: "book2",
    description: "i ever thevvvvv book",
  },
  {
    id: "p3",
    price: 7000,
    name: "book3",
    description: "i ever the bookbbbbbbbbb",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            id={product.id}
            key={product.key}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
