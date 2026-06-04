# 🛍️ ShoppyGlobe E-Commerce App

<div align="center">

![ShoppyGlobe Banner](https://img.shields.io/badge/ShoppyGlobe-E--Commerce%20App-e94560?style=for-the-badge&logo=react&logoColor=white)

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-shoppyglobe.vercel.app-06b6d4?style=for-the-badge)](https://react-shoppy-globe-e-commerce-app.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Avisek14-a855f7?style=for-the-badge&logo=github)](https://github.com/Avisek14/React_ShoppyGlobe_E-Commerce_APP/tree/main)
[![Portfolio](https://img.shields.io/badge/Portfolio-Avisek%20Sahoo-3b82f6?style=for-the-badge)](https://avisek14.github.io/Avisek-portfolio/)

**A fully functional E-Commerce application built with React + Vite — featuring product listing, cart management, checkout, Redux state management, and a beautiful responsive UI.**

</div>

---

## 🎯 What is ShoppyGlobe?

ShoppyGlobe is a modern e-commerce web application where users can browse 194+ real products fetched from a live API, filter by category, sort by price or rating, add items to cart, adjust quantities, and place orders — all with a smooth, responsive interface built using React, Redux Toolkit, and React Router v6.

---

## ✨ Features

- 🛒 **Add to Cart** — Add any product to cart with one click
- 🔍 **Search Products** — Real-time search using Redux state
- 📦 **Category Filter** — Filter by smartphones, beauty, furniture & more
- 🔀 **Sort Products** — Sort by price (low/high), rating, or name A-Z
- 📄 **Product Detail Page** — Full product info with images
- ➕➖ **Quantity Controls** — Increase/decrease qty (min 1)
- 🗑️ **Remove from Cart** — Remove individual items
- 🧾 **Checkout Page** — Delivery form + order summary
- ✅ **Place Order** — Clears cart and redirects to Home
- 404 **Not Found Page** — Custom error page for unknown routes
- ⚡ **Lazy Loading** — React.lazy + Suspense for all components
- 📱 **Fully Responsive** — Mobile, tablet, and desktop ready

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React 18 + Vite | Frontend framework & build tool |
| Redux Toolkit | Global state management |
| React Router v6 | Client-side routing (createBrowserRouter) |
| PropTypes | Component prop validation |
| CSS3 | Styling & responsive design |
| DummyJSON API | Live product data (194+ products) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- Git

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/Avisek14/React_ShoppyGlobe_E-Commerce_APP.git
cd React_ShoppyGlobe_E-Commerce_APP
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm run dev
```

**4. Open in Browser**
```
http://localhost:5173
```

---

## 📁 Project Structure

```
ShoppyGlobe/
├── public/
│   └── favicon.svg                  # Custom ShoppyGlobe favicon
├── src/
│   ├── components/
│   │   ├── Header.jsx               # Navbar with cart badge
│   │   ├── ProductList.jsx          # Product grid with search/filter/sort
│   │   ├── ProductItem.jsx          # Single product card
│   │   ├── ProductDetail.jsx        # Full product detail page
│   │   ├── Cart.jsx                 # Cart page with all items
│   │   ├── CartItem.jsx             # Single cart item with controls
│   │   ├── Checkout.jsx             # Order form + summary + place order
│   │   └── NotFound.jsx             # 404 error page
│   ├── hooks/
│   │   └── useFetchProducts.js      # Custom hook for API fetch
│   ├── redux/
│   │   ├── store.js                 # Redux store configuration
│   │   ├── cartSlice.js             # Cart actions & reducers
│   │   └── searchSlice.js           # Search, filter & sort state
│   ├── App.jsx                      # Main layout with Header + Outlet
│   ├── main.jsx                     # Entry point with Router + Provider
│   └── index.css                    # Global styles & responsive CSS
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧩 Components Overview

| Component | Description |
|---|---|
| `App` | Root layout — renders Header and child routes via Outlet |
| `Header` | Navigation with Home, Cart link and live cart item badge |
| `ProductList` | Fetches 194 products, search + category filter + sort |
| `ProductItem` | Product card with image, price, rating, View Details & Add to Cart |
| `ProductDetail` | Fetches single product by route param id, shows full info |
| `Cart` | Lists all cart items with total price and checkout button |
| `CartItem` | Individual cart item — qty controls (min 1) and remove button |
| `Checkout` | Delivery form, order summary, Place Order → clears cart → redirect |
| `NotFound` | 404 page with route path display and Go Home button |

---

## 🗂️ Redux State Structure

```javascript
{
  cart: [
    { id, title, price, thumbnail, quantity, ...productFields }
  ],
  search: {
    query: '',        // search text
    category: 'all', // selected category
    sortBy: 'default' // price-low | price-high | rating | name
  }
}
```

---

## 🎯 How to Use

1. **Browse Products** — Visit Home to see all 194+ products
2. **Search** — Type in the search bar to filter by name
3. **Filter** — Select a category from the dropdown
4. **Sort** — Sort by price, rating, or name
5. **View Details** — Click "View Details" to see full product info
6. **Add to Cart** — Click "Add to Cart" on any product
7. **Manage Cart** — Go to Cart, adjust quantities or remove items
8. **Checkout** — Fill delivery form and click "Place Order"
9. **Order Placed** — Cart clears and you're redirected to Home ✅

---

## 🌐 Links

| Service | URL |
|---|---|
| 🌐 Live App | [react-shoppy-globe-e-commerce-app.vercel.app](https://react-shoppy-globe-e-commerce-app.vercel.app/) |
| 💻 GitHub Repo | [github.com/Avisek14/React_ShoppyGlobe_E-Commerce_APP](https://github.com/Avisek14/React_ShoppyGlobe_E-Commerce_APP/tree/main) |
| 📦 API Used | [dummyjson.com/products](https://dummyjson.com/products?limit=194) |

---

## 👨‍💻 Developer

<div align="center">

**Avisek Sahoo**
Full Stack Developer

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-06b6d4?style=flat-square)](https://avisek14.github.io/Avisek-portfolio/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-3b82f6?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/avisek-sahoo-907186341/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-a855f7?style=flat-square&logo=github)](https://github.com/Avisek14)
[![Email](https://img.shields.io/badge/Email-Contact-22c55e?style=flat-square&logo=gmail)](mailto:sahoo143avisek@gmail.com)

</div>

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ by **Avisek Sahoo** © 2026

⭐ **Star this repo if you liked it!** ⭐

</div>