function Product({ data }) {
    
    let productTitle = data[0];
    let productDescription = data[1];
    let productPrice = data[2];

    // how can we improve this ?

    return (
        <>
            <div>
                <h1>{productTitle}</h1>
                <p>{productDescription}</p>
                <p>{productPrice}</p>
            </div>
        </>
    )
}

export default Product
