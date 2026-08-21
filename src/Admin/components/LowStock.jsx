import React from "react";

import {
    Card,
    CardContent,
    Typography,
    Box,
    Chip,
    Button
} from "@mui/material";

import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const products = [
    {
        name: "Casual White T-Shirt",
        stock: 3
    },
    {
        name: "Men's Slim Jeans",
        stock: 2
    },
    {
        name: "Sports Running Shoes",
        stock: 5
    },
    {
        name: "Women's Summer Top",
        stock: 4
    }
];

const LowStock = () => {

    return (
        <Card
            sx={{
                borderRadius: 2,
                boxShadow: "0 3px 12px rgba(0,0,0,0.08)"
            }}
        >

            <CardContent>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2
                    }}
                >

                    <Box>

                        <Typography
                            variant="h6"
                            fontWeight={600}
                        >
                            Low Stock Alerts
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Products that need attention
                        </Typography>

                    </Box>

                    <WarningAmberIcon color="warning" />

                </Box>


                {products.map((product) => (

                    <Box
                        key={product.name}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            py: 1.5,
                            borderBottom: "1px solid #eee"
                        }}
                    >

                        <Box>

                            <Typography
                                variant="body2"
                                fontWeight={600}
                            >
                                {product.name}
                            </Typography>

                            <Typography
                                variant="caption"
                                color="text.secondary"
                            >
                                Only {product.stock} items remaining
                            </Typography>

                        </Box>

                        <Chip
                            label={`${product.stock} left`}
                            size="small"
                            color="warning"
                        />

                    </Box>

                ))}


                <Button
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                        mt: 2,
                        textTransform: "none"
                    }}
                >
                    View Inventory
                </Button>

            </CardContent>

        </Card>
    );
};

export default LowStock;