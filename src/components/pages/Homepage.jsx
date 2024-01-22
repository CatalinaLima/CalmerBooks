import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../../services/firebase';
import Loader from '../Loader/Loader';
import './HomePage.css'

function Homepage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getData()
      .then((respuesta) => {
        // Obtener los últimos 4 elementos
        const ultimos4Productos = respuesta.slice(-4);
        setProducts(ultimos4Productos);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  
  

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
        <div className='header'>
                <img className="encabezado" src="/assets/encabezado.jpg" alt="Encabezado" />
            </div>
            <section className="section1">
        <h2 className="titleh2">CALMER COFFEE & BOOKS</h2>
        <div>
          <img className='foto' src="assets/1.jpg" alt="calmer" />
          <img className='foto' src="assets/2.jpg" alt="calmer" />
          <img className='foto' src="assets/3.jpg" alt="calmer" />
          <img className='foto' src="assets/4.jpg" alt="calmer" />
          <img className='foto' src="assets/5.jpg" alt="calmer" />
          <img className='foto' src="assets/6.jpg" alt="calmer" />
          <img className='foto' src="assets/7.jpg" alt="calmer" />
          <img className='foto' src="assets/8.jpg" alt="calmer" />
        </div>
      </section>
      <section className="section1">
        <h2 className="titleh2">NUESTROS MAS VENDIDOS!</h2>
        <div className="image-grid">
          {products.map((product) => (
            <div key={product.id} className="category-item">
              <img className="hpimg" src={product.image} alt={product.title} />
              <p className='titlehpgrid'>{product.title}</p>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}

export default Homepage;



