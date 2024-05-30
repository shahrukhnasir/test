import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MealMenu from "../pages/MealMenu/MealMenu"
import ProductList from "../pages/ProductList/ProductList";
import ProductDetail from "../pages/ProductDetails/ProductDetails";
import MyFavoritesList from "../pages/MyFavList/MyFavoritesList";
import RandomList from "../pages/RandomList/RandomList";

const PublicRoutes = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/menu" element={<MealMenu />} />
					<Route path="/menu/:slug" element={<ProductList />} />
					<Route path="/menu-details/:id" element={<ProductDetail />} />
					<Route path="/my-favorites" element={<MyFavoritesList />} />
					<Route path="/random-list" element={<RandomList />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default PublicRoutes;
