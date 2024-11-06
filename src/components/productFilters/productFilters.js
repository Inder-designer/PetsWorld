export const filterProducts = ({ productList, price, ratings }) => {
    return productList.filter(product => {
        const withinPriceRange = product.price >= price[0] && product.price <= price[1];
        const meetsRatingRequirement = product.ratings >= ratings; // Assuming ratings is a numeric threshold
        return withinPriceRange && meetsRatingRequirement;
    });
};