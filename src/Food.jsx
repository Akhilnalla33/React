function Food(){
    const food1 = "Apple";
    const food2 = "orange"

    return(
        <ul>
            <li>Mango</li>
            <li>Banana</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food;