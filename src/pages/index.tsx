import { useQuery } from 'react-query';
import axios from 'axios';
import Link from 'next/link';

const fetchProducts = async () => {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  return data;
};

const HomePage = () => {
  const { data, error, isLoading } = useQuery('products', fetchProducts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <h1>Товары</h1>
      <ul>
        {data.map((product: any) => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
