const AlertButton = (props) => {
    return <button onClick={ () =>
        alert(`A label desse botão é ${props.label}`)
    }>{props.label}</button>
}

export default AlertButton