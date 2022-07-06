import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

const HeroPage = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const hero = getHeroById(id);

	if (!hero) {
		return <Navigate to="/marvel" />;
	}
	const heroImg = `../../../assets/heroes/${id}.jpg`;
	const handleReturn = () => {
		return navigate(-1);
	};

	return (
		<div className="row mt-5 animate__animated animate__fadeInLeft">
			<div className="col-4">
				<img src={heroImg} className="img-thumbnail " alt="Superhero" />
			</div>
			<div className="col-8">
				<h3>{hero.superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>Alter ego:</b>
						{hero.alter_ego}
					</li>
					<li className="list-group-item">
						<b>Publisher:</b>
						{hero.publisher}
					</li>
					<li className="list-group-item">
						<b>First appearance:</b>
						{hero.first_appearance}
					</li>
				</ul>
				<h5 className="mt-3">
					<b>Characters:</b>
				</h5>
				<p>{hero.characters}</p>
				<button className="btn btn-outline-dark" onClick={handleReturn}>
					Go back
				</button>
			</div>
		</div>
	);
};

export default HeroPage;
