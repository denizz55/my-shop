import { useCart } from '../contexts/CartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Ваша корзина</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price} x {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {cart.length === 0 && <p>Ваша корзина пуста</p>}
    </div>
  );
};

export default CartPage;
