const Membre = (props) => {
    //console.log(props)
    return ( 
        <>
            <h2>Combattant: {props.nom.toUpperCase()} age: {props.age}</h2>
        </>
     );
}
 
export default Membre;