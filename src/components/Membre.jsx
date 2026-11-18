import Button from "./Button";

const Membre = ({nom, children, age, handleChange, hideName, plus, handleClick}) => {
    //console.log(props)
    return ( 
        <>
            <h2 style={{backgroundColor: age < 46 ? 'dodgerblue':'crimson', color: 'white'}}>Combattant: {nom.toUpperCase()} age: {age}</h2>
            <input type="text" value={nom} onChange={handleChange}/>
            <button onClick={hideName}>X</button>
            { children ? <p>{children}</p> : null} 
            <Button 
                plus={plus}
                vieillir={handleClick}
            />
        </>
     );
}
 
export default Membre;