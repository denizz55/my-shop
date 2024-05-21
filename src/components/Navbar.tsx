import Link from 'next/link';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  return (
    <nav>
      <Link href="/">Главная</Link>
      <Link href="/create-product">Добавить продукт</Link>
      <div>
        <Link href="/cart">Корзина({cart.length})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
