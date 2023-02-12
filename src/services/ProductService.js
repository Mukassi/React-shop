const useProductService = () => {
  const _apiBase = "https://api.escuelajs.co/api/v1/products";
  const _baseOffset = 50;
  const getResourse = async (url) => {
    let result = await fetch(url);
    if (!result.ok) {
      throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }
    return await result.json();
  };

  const getAllProducts = async (offset = _baseOffset) => {
    const result = await getResourse(`${_apiBase}?offset=${offset}&limit=15`);
    return result;
  };
  const getOneProduct = async (id) => {
    const result = await getResourse(`${_apiBase}/${id}`);
    return result;
  };
  return { getAllProducts, getOneProduct };
};

export default useProductService;
