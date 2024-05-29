import Link from 'next/link';
import { useCart } from '../contexts/CartContext';
import Image from 'next/image';



const Navbar = () => {
  const { cart } = useCart();
  return (
    <nav>
      <Link className='name' href="/"> Fakestore </Link>
      <Link href="/"> Главная </Link>
      <Link href="/create-product">Добавить продукт</Link>
      <Link href="/cart">Корзина({cart.length})</Link>
      <Link href="/login">Авторизация</Link>
    </nav>
  );
};

export default Navbar;
