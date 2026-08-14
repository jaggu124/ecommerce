import { StarIcon } from '@heroicons/react/20/solid'
import { Box, Grid, Rating,LinearProgress } from '@mui/material'
import { Button } from '@mui/material'
import ProductReviewCard from './ProductReviewCard'
import { mens_kurta } from '../../../Data/mens_kurta'
import HomeSectionCart from '../HomeSectionCart/HomeSectionCart'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findProductsById } from '../../../State/Product/Action'
import { addItemToCart } from '../../../State/Cart/Action'

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Women', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://fitkin.in/cdn/shop/products/1_f73f554d-5621-4a72-971a-c70d6eb4b844.jpg?v=1750418434',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://nautunkee.com/cdn/shop/products/main_b80cebf8-34db-46ff-9af3-a8601906c42e.jpg?v=1614930847',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://www.beyoung.in/api/cache/catalog/products/women_images_update_27_6_2022/white_womens_plain_t-shirt_base_700x933.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJph9qFotQm4tVGvHGl8kUnUQ6NEOhnu4VHM1Qas-5Hh4GuTZiqcGBgClH&s=10',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
    { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
    { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
  ],
  sizes: [
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector(store => store);

  console.log("params:", products);
  const handleAddToCart = async () => {
    const data = {
        productId: params.productId,
        size: selectedSize,
        quantity: 1
    };

    console.log("Add to cart data:", data);

    await dispatch(addItemToCart(data));
    navigate("/cart");
}

  useEffect(() => {
    const data = {productId:params.productId}
    dispatch(findProductsById(data));

  },[params.productId]);

  return (
    <div className="bg-white px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>
            <div className="flex flex-col items-center">
                <div className='overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]'>
                    <img
                        alt={product.images[0].alt}
                        src={products.product?.imageUrl}
                        className="h-full w-full object-center object-cover"
                    />
                </div>
                <div className='flex flex-wrap justify-center space-x-5'>
                {
                    product.images.map((image) => <div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem]'>
                    <img
                        alt={image.alt}
                        src={image.src}
                        className="h-full w-full object-center object-cover"
                    />
                </div>                    
                )}
                    
                </div>
            </div>
            {/* Product info */}
            <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
                <h1 className="text-lg lg:text-xl font-semibold text-gray-900">{" "} {products.product?.brand}</h1>
                <h1 className='text-lg lg:text-xl opacity-60 pt-1 text-gray-900'>{products.product?.title}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <div className='flex space-x-5 lg:text-xl items-center text-gray-900 mt-6'>
                    <p className='font-semibold'>
                        ₹ {products.product?.discountPrice}
                    </p>
                    <p className='opacity-50 line-through'> ₹ {products.product?.price} </p>
                    <p className='text-green-500 font-semibold'>{products.product?.discountPercent} % Off</p>

                </div>

                {/* Reviews */}
                <div className="mt-6">
                    <div className='flex items-center space-x-3'>
                        <Rating name="read-only" value={4.5} readOnly />
                        <p className='opacity-50 text-sm'>56540 ratings</p>
                        <p className='ml-3 font-medium text-sm text-indigo-600 hover:text-indigo-500'>36247 reviews</p>
                    </div>
                </div>

                <form className="mt-10">
                

                {/* Sizes */}
                <div className="mt-10">
                    <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    </div>

                    <fieldset aria-label="Choose a size" className="mt-4">
                    <div className="grid grid-cols-4 gap-3">
                        {product.sizes.map((size) => (
                        <label
                            key={size.id}
                            aria-label={size.name}
                            className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-[:checked]:border-indigo-600 has-[:disabled]:border-gray-400 has-[:checked]:bg-indigo-600 has-[:disabled]:bg-gray-200 has-[:disabled]:opacity-25 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-indigo-600"
                        >
                            <input
                                value={size.name}
                                checked={selectedSize === size.name}
                                onChange={(e) => setSelectedSize(e.target.value)}
                                name="size"
                                type="radio"
                                disabled={!size.inStock}
                                className="absolute inset-0 appearance-none focus:outline focus:outline-0 disabled:cursor-not-allowed"
                            />
                            <span className="text-sm font-medium uppercase text-gray-900 group-has-[:checked]:text-white">
                            {size.name}
                            </span>
                        </label>
                        ))}
                    </div>
                    </fieldset>
                </div>

                <Button onClick={handleAddToCart} variant='contained' sx = {{px:"2rem", py:"1rem", bgcolor:"#9155fd"}}>
                    Add To Cart
                </Button>
                </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Description and details */}
                <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                    <p className="text-base text-gray-900">{product.description}</p>
                </div>
                </div>

                <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                <div className="mt-4">
                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                        <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>

                <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">{product.details}</p>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Image gallery */}
       
        {/* ratings and Review */}
        <section>
            <h1 className='font-semibold text-lg pb-4'>Recent Review & Ratings</h1>
            <div className='border p-5'>
                <Grid container spacing={7}>
                    <Grid item xs={7}>
                        <div className='space-y-5'>
                            {[1,1,1].map((item)=> <ProductReviewCard/>)}
                        </div>
                    </Grid>
                    <Grid item xs={5} sx={{ pl: 70 }}>
                        <h1 className='text-xl font-semibold pb-1'>Product Ratings</h1>

                        <div className='flex items-center space-x-3'>
                            <Rating value={4.6} precision={.5} readOnly />
                            <p className='opacity-60'>58490 ratings</p>
                        </div>
                        <Box sx={{ mt: 3, width: "100%" }}>
                            <div className="space-y-3">
                                <div className="flex items-center gap-4">
                                <span className="w-24 text-sm">Excellent</span>

                                <LinearProgress
                                    variant="determinate"
                                    value={90}
                                    color="success"
                                    sx={{
                                    width: "220px",
                                    height: 8,
                                    borderRadius: 5,
                                    backgroundColor: "#e5e7eb",
                                    }}
                                />

                                <span className="text-sm text-gray-600">90%</span>
                                </div>

                                <div className="flex items-center gap-4">
                                <span className="w-24 text-sm">Very Good</span>

                                <LinearProgress
                                    variant="determinate"
                                    value={75}
                                    color="success"
                                    sx={{
                                    width: "220px",
                                    height: 8,
                                    borderRadius: 5,
                                    backgroundColor: "#e5e7eb",
                                    }}
                                />

                                <span className="text-sm text-gray-600">75%</span>
                                </div>

                                <div className="flex items-center gap-4">
                                <span className="w-24 text-sm">Good</span>

                                <LinearProgress
                                    variant="determinate"
                                    value={50}
                                    color="warning"
                                    sx={{
                                    width: "220px",
                                    height: 8,
                                    borderRadius: 5,
                                    backgroundColor: "#e5e7eb",
                                    }}
                                />

                                <span className="text-sm text-gray-600">50%</span>
                                </div>

                                <div className="flex items-center gap-4">
                                <span className="w-24 text-sm">Average</span>

                                <LinearProgress
                                    variant="determinate"
                                    value={30}
                                    color="warning"
                                    sx={{
                                    width: "220px",
                                    height: 8,
                                    borderRadius: 5,
                                    backgroundColor: "#e5e7eb",
                                    }}
                                />

                                <span className="text-sm text-gray-600">30%</span>
                                </div>

                                <div className="flex items-center gap-4">
                                <span className="w-24 text-sm">Poor</span>

                                <LinearProgress
                                    variant="determinate"
                                    value={10}
                                    color="error"
                                    sx={{
                                    width: "220px",
                                    height: 8,
                                    borderRadius: 5,
                                    backgroundColor: "#e5e7eb",
                                    }}
                                />

                                <span className="text-sm text-gray-600">10%</span>
                                </div>
                            </div>
                            </Box>
                    </Grid>
                </Grid>
            </div>
        </section>

        {/* similar products */}
        <section className='pt-10'>
            <h1 className='py-5 text-xl font-bold'>Similar Products</h1>
            <div className='flex flex-wrap space-y-5'>
                {products.products && products.products?.content?.map((item) => <HomeSectionCart product={item}/>)}
            </div>
        </section>
      </div>
    </div>
  )
}
