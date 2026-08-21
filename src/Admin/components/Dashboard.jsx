import React from "react";

import Achievement from "./Achievement";
import MonthlyOverview from "./MonthlyOverview";
import OrderTableView from "../view/OrderTableView";
import ProductTableView from "../view/ProductTableView";

import SalesCharts from "./SalesCharts";
import OrderStatus from "./OrderStatus";
import LowStock from "./LowStock";
import TopProducts from "./TopProducts";

import {
    Grid,
    Box,
    Typography
} from "@mui/material";


const Dashboard = () => {

    return (

        <Box
            sx={{
                width: "100%",
                maxWidth: "100%",
                p: {
                    xs: 2,
                    sm: 2.5,
                    md: 3
                },
                boxSizing: "border-box"
            }}
        >
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "minmax(280px, 1fr) minmax(450px, 2fr)"
                    },
                    gap: 3,
                    width: "100%"
                }}
            >

                <Achievement />

                <MonthlyOverview />

            </Box>

            <Typography
                variant="h5"
                sx={{
                    mt: 4,
                    mb: 2,
                    fontWeight: 600
                }}
            >
                Analytics
            </Typography>


            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        lg: "2fr 1fr"
                    },
                    gap: 3,
                    width: "100%"
                }}
            >

                <SalesCharts />

                <OrderStatus />

            </Box>

            <Typography
                variant="h5"
                sx={{
                    mt: 4,
                    mb: 2,
                    fontWeight: 600
                }}
            >
                Store Management
            </Typography>


            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "1fr 1fr"
                    },
                    gap: 3,
                    width: "100%"
                }}
            >

                <LowStock />

                <TopProducts />

            </Box>


            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        xl: "1fr 1fr"
                    },
                    gap: 3,
                    width: "100%",
                    mt: 3
                }}
            >

                <OrderTableView />

                <ProductTableView />

            </Box>

        </Box>
    );
};

export default Dashboard

