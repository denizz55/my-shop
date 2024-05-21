import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const CreateProductPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post('https://fakestoreapi.com/products', {
        title,
        description,
        price,
        image,
      });
      router.push('/');
    } catch (error) {
      console.error('Error creating product', error);
    }
  };

  return (
    <div>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Цена"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Адрес картинки"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateProductPage;
