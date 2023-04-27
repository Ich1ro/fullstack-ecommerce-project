import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsFillBagDashFill } from 'react-icons/bs';

import { useStateContext } from '../../context/StateContext';

const Canceled = () => {
	const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

	useEffect(() => {
		localStorage.clear();
		setCartItems([]);
		setTotalPrice(0);
		setTotalQuantities(0);
	}, []);

	return (
		<div className='cancel-wrapper'>
			<div className='cancel'>
				<p className='icon'>
					<BsFillBagDashFill />
				</p>
				<h2>Your order is canceled.</h2>
				<Link href='/'>
					<button type='button' width='300px' className='btn'>
						Continue Shopping
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Canceled;
