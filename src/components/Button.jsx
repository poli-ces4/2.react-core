const Button = ({ amount, setAmount }) => (
	<button
		onClick={() => {
			setAmount(amount + 1);
		}}
	>
		Views:{amount}
	</button>
);

export default Button;
