import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useCart } from '../../contexts/CartContext';

const fetchProduct = async (id: string) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();

  const { data, error, isLoading } = useQuery(['product', id], () => fetchProduct(id as string), {
    enabled: !!id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;

  const handleAddToCart = () => {
    addToCart({
      id: data.id,
      title: data.title,
      price: data.price,
      quantity: 1,
    });
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`);
      router.push('/');
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };

  return (
    <div className='block_id_tovar'>
      <h1 className='title'>{data.title}</h1>
      <p className='description'>{data.description}</p>
      <img className='img_product'src={data.image} alt={data.title} />
      <p className='price'>price:{data.price}$</p>
      <div className='buttons'>
      <button className='butt_addcart' onClick={handleAddToCart}>Добавить в корзину</button>
      <button className='butt_delete' onClick={handleDelete}>Удалить</button>
      </div>
    </div>
  );
};

export default ProductPage;
