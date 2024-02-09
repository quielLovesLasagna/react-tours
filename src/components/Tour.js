import { useState } from "react";

export default function Tour({ name, info, image, price, id, onDelete }) {
	const [show, setShow] = useState(false);

	function handleShow() {
		setShow(!show);
	}

	return (
		<article className="tour">
			<span className="tour-price">${price}</span>
			<img className="tour-image" src={image} alt={name} />
			<div className="tour-info">
				<h2 className="heading-secondary">{name}</h2>
				<p className="tour-description">
					{show ? info : `${info.substring(0, 200)}...`}
					<button className="show-toggle" onClick={handleShow}>
						{show ? "Show Less" : "Show More"}
					</button>
				</p>
				<button className="remove-btn" onClick={() => onDelete(id)}>
					Not Interested
				</button>
			</div>
		</article>
	);
}
