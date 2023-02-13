import { useState } from "react";

const useProductService = () => {
  const [error, setError] = useState(null);
  const _apiBase = "https://api.escuelajs.co/api/v1/products";
  const _baseOffset = 50;
  const getResourse = async (url) => {
    try {
      let result = await fetch(url);
      if (!result.ok) {
        throw new Error(`Could not fetch ${url}, status: ${result.status}`);
      }
      return await result.json();
    } catch (error) {
      setError(error.message);
    }
  };

  const getAllProducts = async (offset = _baseOffset) => {
    const result = await getResourse(`${_apiBase}?offset=${offset}&limit=16`);
    return result;
  };
  const getOneProduct = async (id) => {
    const result = await getResourse(`${_apiBase}/${id}`);
    return result;
  };

  const clearError = () => {
    setError(null);
  };
  return { getAllProducts, getOneProduct, error, clearError };
};

export default useProductService;
