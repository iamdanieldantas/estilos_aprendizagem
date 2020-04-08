import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = () => (
	// eslint-disable-next-line react/jsx-no-undef
	<header className="header">
		<div className="text-box">
			<h1 className="heading-primary">
				<span className="heading-primary-main">Evoluindo o seu aprendizado</span>
				<span className="heading-primary-sub">Faça o teste para começar</span>
			</h1>
			<Link to="/home" className="btn btn-white btn-animated">COMEÇAR AGORA</Link>
		</div>
	</header>
);

export default Header;