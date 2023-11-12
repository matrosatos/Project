import { HomePage } from './pages/HomePage/HomePage';
import { Layout } from './layouts/Layout';
import { Route, Routes } from 'react-router-dom';
import { ProductPage } from './pages/ProductPage/ProductPage';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				{/*<Route path="about" element={<About />} />*/}
				<Route path='shop/:id' element={<ProductPage />} />

				{/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
				{/*<Route path="*" element={<NoMatch />} />*/}
			</Route>
		</Routes>
	);
}

export default App;
