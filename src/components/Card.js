import React from "react";
import location from "../images/location.svg";

export default function Card(props) {
	return (
		<section className="card">
			<img src={props.imageUrl} className="card-picture" alt="card" />
			<div className="card-text">
				<div className="card-location">
					<img src={location} className="card-imglocation" />
					<p className="card-country">{props.location}</p>
					<p className="card-maps-link">
						<a href={props.googleMapsUrl}>View on Google Maps</a>
					</p>
				</div>
				<h1>{props.title}</h1>
				<h4 className="card-date">
					{props.startDate} - {props.endDate}
				</h4>
				<p className="card-description">{props.description}</p>
			</div>
		</section>
	);
}
