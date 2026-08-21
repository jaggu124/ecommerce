import React from "react";

import {
    Card,
    CardContent,
    Typography,
    Box,
    Avatar,
    LinearProgress
} from "@mui/material";

const products = [
    {
        name: "Casual Puff Sleeves White Top",
        sold: 245,
        revenue: "₹2,45,000"
    },
    {
        name: "Women's Slim Fit Jeans",
        sold: 198,
        revenue: "₹1,98,000"
    },
    {
        name: "Sports Running Shoes",
        sold: 176,
        revenue: "₹3,52,000"
    },
    {
        name: "Summer Cotton Dress",
        sold: 152,
        revenue: "₹1,52,000"
    }
];

const TopProducts = () => {

    return (
        <Card
            sx={{
                borderRadius: 2,
                boxShadow: "0 3px 12px rgba(0,0,0,0.08)"
            }}
        >

            <CardContent>

                <Typography
                    variant="h6"
                    fontWeight={600}
                >
                    Top Selling Products
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                >
                    Best performing products
                </Typography>


                {products.map((product, index) => (

                    <Box
                        key={product.name}
                        sx={{
                            display: "flex",
                            gap: 2,
                            alignItems: "center",
                            mb: 2
                        }}
                    >

                        <Avatar>
                            {index + 1}
                        </Avatar>

                        <Box sx={{ flexGrow: 1 }}>

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between"
                                }}
                            >

                                <Typography
                                    variant="body2"
                                    fontWeight={600}
                                >
                                    {product.name}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    fontWeight={600}
                                >
                                    {product.sold}
                                </Typography>

                            </Box>

                            <LinearProgress
                                variant="determinate"
                                value={(product.sold / 250) * 100}
                                sx={{ mt: 1 }}
                            />

                            <Typography
                                variant="caption"
                                color="text.secondary"
                            >
                                Revenue: {product.revenue}
                            </Typography>

                        </Box>

                    </Box>

                ))}

            </CardContent>

        </Card>
    );
};

export default TopProducts;