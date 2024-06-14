import Link from 'next/link';
import { useCart } from '../contexts/CartContext';
import Image from 'next/image';



const Navbar = () => {
  const { cart } = useCart();
  return (
    <nav>
      <Link className='name' href="/"> Fakestore </Link>
      <Link className='nav_list' href="/"> Главная </Link>
      <Link className='nav_list' href="/create-product">Добавить продукт</Link>
      <Link className='nav_list' href="/cart">Корзина({cart.length})</Link>
      <Link className='nav_list' href="/login">Авторизация</Link>
    </nav>
  );
};

export default Navbar;
