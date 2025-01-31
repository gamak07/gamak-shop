
const Button = ({children, className, onClick, disabled, type}) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled} type={type}> {children}</button>
  )
}

export default Button