import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.scss';
import { Home, Categories, Products } from './filePaths';

function App() {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 12;

  useEffect(() => {
    const getProductsCategories = async () => {
      await fetch("https://api.escuelajs.co/api/v1/categories")
        .then(res => res.json())
        .then(data => {
          setCategories(data);
        })
        .catch((error) => {
          console.log(error);
        })
    }

    getProductsCategories();
  }, [categories]);

  useEffect(() => {
    const getProducts = async () => {
      await fetch("https://api.escuelajs.co/api/v1/products")
        .then(res => res.json())
        .then(data => {
          setProducts(data);
        })
        .catch((error) => {
          console.log(error);
        })
    }

    getProducts();
  }, [products]);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home categories={categories} products={products} />} />
          <Route path='/categories' element={<Categories categories={categories} />} />
          <Route path='/products' element={<Products categories={categories} products={currentPosts} totalPosts={products.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App; 
