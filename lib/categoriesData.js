// Hardcoded categories data
export const categoriesData = {
  success: true,
  data: [
    {
      id: 5,
      name: "Automotive",
      display_image: "automotive.jpg",
      description: "Vehicle parts and accessories",
      total_products: 0,
      is_active: 1,
      created_at: "2025-07-17T10:00:52.000Z",
      updated_at: "2025-08-12T14:19:58.000Z",
      parent_category_id: null,
      level: 1,
      path: "/Automotive",
      total_subcategories: 1,
      sort_order: 0
    },
    {
      id: 4,
      name: "Construction",
      display_image: "construction.jpg",
      description: "Building materials and tools",
      total_products: 0,
      is_active: 1,
      created_at: "2025-07-17T10:00:52.000Z",
      updated_at: "2025-08-12T13:42:37.000Z",
      parent_category_id: null,
      level: 1,
      path: "/Construction",
      total_subcategories: 0,
      sort_order: 0
    },
    {
      id: 1,
      name: "Electronics",
      display_image: "electronics.jpg",
      description: "Electronic devices and components",
      total_products: 13,
      is_active: 1,
      created_at: "2025-07-17T10:00:52.000Z",
      updated_at: "2025-10-09T05:47:04.000Z",
      parent_category_id: null,
      level: 1,
      path: "/Electronics",
      total_subcategories: 0,
      sort_order: 0
    },
    {
      id: 3,
      name: "Food & Beverage",
      display_image: "food.jpg",
      description: "Food products and beverages",
      total_products: 0,
      is_active: 1,
      created_at: "2025-07-17T10:00:52.000Z",
      updated_at: "2025-08-12T13:42:37.000Z",
      parent_category_id: null,
      level: 1,
      path: "/Food & Beverage",
      total_subcategories: 0,
      sort_order: 0
    },
    {
      id: 2,
      name: "Textiles",
      display_image: "textiles.jpg",
      description: "Clothing and fabric materials",
      total_products: 0,
      is_active: 1,
      created_at: "2025-07-17T10:00:52.000Z",
      updated_at: "2025-08-12T13:42:37.000Z",
      parent_category_id: null,
      level: 1,
      path: "/Textiles",
      total_subcategories: 0,
      sort_order: 0
    },
    {
      id: 8,
      name: "car horn",
      display_image: "https://res.cloudinary.com/dmhwqfotb/image/upload/v1755007464/shilpomarket/categories/category_car_horn_1755007460093.png",
      description: "Electronic devices and gadgets",
      total_products: 0,
      is_active: 1,
      created_at: "2025-08-12T14:04:26.000Z",
      updated_at: "2025-08-12T14:04:26.000Z",
      parent_category_id: 5,
      level: 2,
      path: "/Automotive/car horn",
      total_subcategories: 0,
      sort_order: 2
    }
  ],
  count: 6
};

// Helper function to get active categories
export const getCategories = () => {
  return categoriesData.data.filter(cat => cat.is_active === 1);
};

// Helper function to get root categories only
export const getRootCategories = () => {
  return categoriesData.data.filter(cat => cat.is_active === 1 && cat.parent_category_id === null);
};
