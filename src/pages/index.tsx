import { useQuery } from 'react-query';
import axios from 'axios';
import Link from 'next/link';

const fetchProducts = async () => {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  return data;
};

const HomePage = () => {
  const { data, error, isLoading } = useQuery('products', fetchProducts);

  if (isLoading) return <div>Загрузка</div>;
  if (error) return <div>Error loading products</div>;

  return (      
    
    <div className='page'>
    <img className='banner' src="https://vibirai.ru/image/1214610.jpg" alt="banner" />
    <h1>Товары</h1>
    <div className='product'>
      <ul className="product-list">
        {data.map((product: any) => (
          <li key={product.id} className="product-card">
            <Link href={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} className="product-image" />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">{product.price} $ </p>
              <button className="product-button">Купить</button>
            </Link>
          </li>
        ))}
      </ul>
 
      <div className="info">
          <h1>О компании Fakestore</h1> 
        <p>Fakestore - это ваша надежная платформа для покупок, предлагающая широкий ассортимент товаров по отличным ценам.Мы всегда рады нашим покупателям и ждем вас всегда!</p> <br/>
    </div>
      </div>
    </div>
);
};

export default HomePage;
