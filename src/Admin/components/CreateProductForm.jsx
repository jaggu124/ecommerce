import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProduct } from '../../State/Product/Action';

const initialSizes = [
  {name:"S", quantity: 0},
  {name:"M", quantity: 0},
  {name:"L", quantity: 0},
  {name:"XL", quantity: 0},
  {name:"XXL", quantity: 0},
]

const CreateProductForm = () => {

  const [productData, setProductData] = useState({
    imageUrl : "",
    brand : "",
    title : "",
    color : "",
    discountPrice : "",
    price : "",
    discountPercent : "",
    size : initialSizes,
    quantity : "",
    topLevelCategorie : "",
    secondLevelCategorie : "",
    thirdLevelCategorie : "",
    description : ""

  });
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState, [name]: value
    }));
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name === "size_quantity" ? name = "quantity":name=e.target.name;

    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState, size: sizes,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(productData))
  }
  return (
    <div className='p-10'>
      <Typography variant='h3' sx={{ textAlign : "center"}} className='py-10 text-center'>
        Add New Product
      </Typography>
      <form onSubmit={handleSubmit} className='min-h-screen'>
        <Grid container spacing={2}>
          <Grid item size={{xs:12}}>
            <TextField fullWidth label="Image Url" name='imageUrl' value={productData.imageUrl} onChange={handleChange}>
            </TextField>
          </Grid>

          <Grid item size={{xs:12, sm:6}}>
            <TextField fullWidth label="Brand" name='brand' value={productData.brand} onChange={handleChange}>
            </TextField>
          </Grid>

          <Grid item size={{xs:12, sm:6}}>
            <TextField fullWidth label="Title" name='title' value={productData.title} onChange={handleChange}>
            </TextField>
          </Grid>

          <Grid item size={{xs:12, sm:6}}>
            <TextField fullWidth label="Color" name='color' value={productData.color} onChange={handleChange}>
            </TextField>
          </Grid>

          <Grid item size={{xs:12, sm:6}}>
            <TextField fullWidth label="Quantity" name='quantity' value={productData.quantity} type='number' onChange={handleChange}>
            </TextField>
          </Grid>

          <Grid item size={{xs:12, sm:4}}>
            <TextField fullWidth label="Price" name='price' value={productData.price} type='number' onChange={handleChange}>
            </TextField>
          </Grid>

          <Grid item size={{xs:12, sm:4}}>
            <TextField fullWidth label="Discount Price" name='discountPrice' value={productData.discountPrice} type='number' onChange={handleChange}>
            </TextField>
          </Grid>

          <Grid item size={{xs:12, sm:4}}>
            <TextField fullWidth label="Discount Percent" name='discountPercent' value={productData.discountPercent} type='number' onChange={handleChange}>
            </TextField>
          </Grid>

          <Grid item size={{xs:12, sm:4}}>
            <FormControl fullWidth>

              <InputLabel> Top Level Categorie</InputLabel>

              <Select label="Top Level Category" name='topLevelCategorie' value={productData.topLevelCategorie} onChange={handleChange}>
                <MenuItem value = "men">Men</MenuItem>
                <MenuItem value = "women">Women</MenuItem>
                <MenuItem value = "kids">Kids</MenuItem>
              </Select>

            </FormControl>
            
          </Grid>

          <Grid item size={{xs:12, sm:4}}>
            <FormControl fullWidth>

              <InputLabel> Second Level Categorie</InputLabel>

              <Select label="Second Level Category" name='secondLevelCategorie' value={productData.secondLevelCategorie} onChange={handleChange}>
                <MenuItem value = "clothing">Clothing</MenuItem>
                <MenuItem value = "accessories">Accessories</MenuItem>
                <MenuItem value = "brands">Brands</MenuItem>
              </Select>

            </FormControl>
            
          </Grid>

          <Grid item size={{xs:12, sm:4}}>
            <FormControl fullWidth>

              <InputLabel> Third Level Categorie</InputLabel>

              <Select label="Third Level Category" name='thirdLevelCategorie' value={productData.thirdLevelCategorie} onChange={handleChange}>
                <MenuItem value = "top">Tops</MenuItem>
                <MenuItem value = "women_dress">Women Dress</MenuItem>
                <MenuItem value = "women_jeans">Women Jeans</MenuItem>
                <MenuItem value = "lengha_choli">Lengha Choli</MenuItem>
                <MenuItem value = "sweater">Sweaters</MenuItem>
                <MenuItem value = "t-shirt">T-Shirts</MenuItem>
                <MenuItem value = "jacket">Jackets</MenuItem>
                <MenuItem value = "gouns">Gouns</MenuItem>
                <MenuItem value = "saree">Sarees</MenuItem>
                <MenuItem value = "kurtas">Kurtas</MenuItem>
                <MenuItem value = "watch">Watches</MenuItem>
                <MenuItem value = "bag">Bags</MenuItem>
                <MenuItem value = "sunglasse">Sunglasses</MenuItem>
                <MenuItem value = "hat">Hats</MenuItem>
                <MenuItem value = "belt">Belts</MenuItem>
                <MenuItem value = "mens_kurta">Mens Kurta</MenuItem>
                <MenuItem value = "shirt">Shirt</MenuItem>
                <MenuItem value = "men_jeans">Men Jeans</MenuItem>
              </Select>

            </FormControl>
            
          </Grid>

          <Grid item size={{xs:12}}>
            <TextField fullWidth 
            id='outlined-multiline-static'
            label='Description'
            multiline
            name='description'
            rows={3}
            onChange={handleChange}
            value={productData.description}
            >
            </TextField>
          </Grid>
          {productData.size.map((size, index) => (
            <Grid container item spacing={3}>
              <Grid item size={{xs:12, sm:6}}>
                <TextField label="Size Name" name='name' value={size.name} onChange={(event) => handleSizeChange(event,index)}
                  required fullWidth
                >

                </TextField>
              </Grid>  
              <Grid item size={{xs:12, sm:6}}>
                <TextField label="Quantity" name='size_quantity' type='number' value={size.quantity} onChange={(event) => handleSizeChange(event,index)}
                  required fullWidth
                >

                </TextField>
              </Grid>  
            </Grid>

          ))}

          <Grid item size={{xs:12}}>

            <Button variant='contained' sx={{p: 1.8}} className='py-20' size='large' type='submit'>
                Add New Product
            </Button>

          </Grid>

        </Grid>
      </form>

    </div>
  );
};

export default CreateProductForm