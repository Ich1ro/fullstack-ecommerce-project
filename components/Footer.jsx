import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='footer-container'>
			<p>2023 Headphones Store All rights reserved</p>
			<p className='icons'>
				<AiFillLinkedin />
				<FaTelegramPlane />
			</p>
		</div>
	);
};

export default Footer;
