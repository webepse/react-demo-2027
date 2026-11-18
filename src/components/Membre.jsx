const Membre = (props) => {
    //console.log(props)
    return ( 
        <>
            <h2 style={{backgroundColor: props.age < 46 ? 'dodgerblue':'crimson', color: 'white'}}>Combattant: {props.nom.toUpperCase()} age: {props.age}</h2>
            { props.children ? <p>{props.children}</p> : null} 
        </>
     );
}
 
export default Membre;