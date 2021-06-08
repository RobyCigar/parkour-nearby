interface IProps {
	text: string;
	className: any;
}

const Button = ({text, className}: IProps) => {
	
	return (
		<button className={className}>{text}</button>
	)
}

export default Button;