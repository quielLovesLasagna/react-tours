import { useState, useEffect } from "react";
import Tours from "./Tours";

// ! -- TOURS API
const API = "https://course-api.com/react-tours-project";

export default function App() {
	const [tours, setTours] = useState([]);

	async function fetchTours() {
		try {
			// ! -- Fetch Tours Data from API
			const res = await fetch(API);

			// ! -- Convert response into usable data
			const data = await res.json();

			// ! -- set "tours" state to converted data
			setTours(data);
		} catch (e) {
			alert(e);
		}
	}

	function handleDelete(id) {
		setTours((tours) => tours.filter((tour) => tour.id !== id));
	}

	useEffect(() => {
		fetchTours();
	}, []);

	return (
		<main>
			<Tours tours={tours} onDelete={handleDelete} />
			{tours.length === 0 && (
				<button className="refresh-btn" onClick={fetchTours}>
					Refresh
				</button>
			)}
		</main>
	);
}
