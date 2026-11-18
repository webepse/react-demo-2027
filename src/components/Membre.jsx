const Membre = ({nom, children, age, handleChange, hideName}) => {
    //console.log(props)
    return ( 
        <>
            <h2 style={{backgroundColor: age < 46 ? 'dodgerblue':'crimson', color: 'white'}}>Combattant: {nom.toUpperCase()} age: {age}</h2>
            <input type="text" value={nom} onChange={handleChange}/>
            <button onClick={hideName}>X</button>
            { children ? <p>{children}</p> : null} 
        </>
     );
}
 
export default Membre;