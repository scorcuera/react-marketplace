import "./Product.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

function Product({ product, deleteProduct, addToCart }) {

    const { id, title, price, image } = product;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title} - price: {price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => deleteProduct(id)}><DeleteIcon fontSize="large" />Delete</Button>
                <Link className="edit--link" to={`/editProduct/${product.id}`}>
                    <Button size="small"><EditIcon fontSize="large" color="inherit" />Edit</Button>
                </Link>
            </CardActions>
            <CardActions>
                <Link className="edit--link" to={`/products/${product.id}`}>
                    <Button size="small">More info</Button>
                </Link>
                <Button size="small" onClick={() => addToCart(product)}><ShoppingCartIcon fontSize="large" color="inherit" />Add to Cart</Button>
            </CardActions>
        </Card>
    )
}

export default Product
