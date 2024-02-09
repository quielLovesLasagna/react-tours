import Tour from "./Tour";

export default function Tours({ tours, onDelete }) {
	return (
		<>
			<h1 className="heading-primary">Our Tours</h1>
			{tours.length > 0 && (
				<div className="tours-grid">
					{tours.map((tour) => (
						<Tour {...tour} key={tour.id} onDelete={onDelete} />
					))}
				</div>
			)}
		</>
	);
}
