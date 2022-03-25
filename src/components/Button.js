import '../Style/Button.css'

const Button = ({greet})=>{
    return(
        <button onClick={greet}>Greet</button>
    )
};

export default Button;