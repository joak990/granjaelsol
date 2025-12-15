import { useState } from 'react';

export const useProductCard = () => {
    const [favorites, setFavorites] = useState(new Set());
    const [expandedProduct, setExpandedProduct] = useState(null);

    const toggleFavorite = (productId) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(productId)) {
                newFavorites.delete(productId);
            } else {
                newFavorites.add(productId);
            }
            return newFavorites;
        });
    };

    const toggleExpanded = (productId) => {
        setExpandedProduct(prev => prev === productId ? null : productId);
    };

    return {
        favorites,
        expandedProduct,
        toggleFavorite,
        toggleExpanded
    };
};
