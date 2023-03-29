import { useState } from 'react';
import Button from './Button';

const Views = () => {
	const [amount, setAmount] = useState(0);
	return <Button amount={amount} setAmount={setAmount} />;
};

export default Views;
