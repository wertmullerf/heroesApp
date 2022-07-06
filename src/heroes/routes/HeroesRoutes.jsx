import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/Navbar";
import { DcPage } from "../pages/DcPage";
import HeroPage from "../pages/HeroPage";
import { MarvelPage } from "../pages/MarvelPage";
import SearchPage from "../pages/SearchPage";
const HeroesRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<MarvelPage />} />
					<Route path="/marvel" element={<MarvelPage />} />
					<Route path="/dc" element={<DcPage />} />
					<Route path="/search" element={<SearchPage />}></Route>
					<Route path="/hero/:id" element={<HeroPage />} />
				</Routes>
			</div>
		</>
	);
};

export default HeroesRoutes;
