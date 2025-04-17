/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Loader from "./Loader";

const Header = ({ menuopen, setMenuOpen }) => {
  const { cart, user } = useContext(CartContext);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState({});
  const [loading, setLoading] = useState(true);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${BASE_URL}/products/categories`);
        const result = await response.json();
        setCategories(result);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const fetchSubCategories = async (categoryName) => {
    if (subCategories[categoryName] !== undefined) return;
    try {
      const response = await fetch(`${BASE_URL}/sub-category/category/${categoryName}`);
      const result = await response.json();
      setSubCategories((prev) => ({ ...prev, [categoryName]: result }));
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  const handleCategoryHover = (categoryName) => {
    setHoveredCategory(categoryName);
    fetchSubCategories(categoryName);
  };

  return (
    <div className="fixed top-0 z-50 w-full" onClick={() => menuopen && setMenuOpen(false)}>
      {loading ? (
        <Loader />
      ) : (
        <header className="bg-gray-100 border-b border-gray-200">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between h-16 lg:h-20">
              <Link to="/" className="flex">
                <img className="w-auto h-8 lg:h-10" src="/gadgetextreme logo.png" alt="Logo" />
              </Link>

              <div className="hidden lg:flex lg:items-center lg:space-x-7">
                <Link to="/" className="text-base font-medium text-black capitalize">Home</Link>
                {categories[0].map((category) => (
                  <div
                    key={category.id}
                    className="relative group"
                    onMouseEnter={() => handleCategoryHover(category.name)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <Link
                      to={`/category/${category.name}`}
                      className="text-base font-medium text-black flex items-center capitalize"
                    >
                      {category.name}
                      {subCategories[category.name]?.length > 0 && (
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>
                    {hoveredCategory === category.name && subCategories[category.name]?.length > 0 && (
                      <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                        {subCategories[category.name].map((subCat, index) => (
                          <Link
                            key={index}
                            to={`/sub-category/${category.name}/${subCat}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 capitalize"
                          >
                            {subCat}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link to="/shop" className="text-base font-medium text-black capitalize">Shop</Link>
              </div>
            </nav>
          </div>
        </header>
      )}
    </div>
  );
};

export default Header;
