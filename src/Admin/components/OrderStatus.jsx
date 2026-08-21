import React from "react";

import {
    Card,
    CardContent,
    Typography,
    Box
} from "@mui/material";

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip
} from "recharts";

const data = [
    {
        name: "Delivered",
        value: 684
    },
    {
        name: "Shipped",
        value: 214
    },
    {
        name: "Processing",
        value: 126
    },
    {
        name: "Cancelled",
        value: 31
    }
];

const COLORS = [
    "#2e7d32",
    "#1976d2",
    "#ed6c02",
    "#d32f2f"
];

const OrderStatus = () => {

    return (
        <Card
            sx={{
                height: "100%",
                borderRadius: 2,
                boxShadow: "0 3px 12px rgba(0,0,0,0.08)"
            }}
        >

            <CardContent>

                <Typography
                    variant="h6"
                    fontWeight={600}
                >
                    Order Status
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    Current order distribution
                </Typography>

                <Box
                    sx={{
                        width: "100%",
                        height: 230
                    }}
                >

                    <ResponsiveContainer>

                        <PieChart>

                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                innerRadius={55}
                                outerRadius={85}
                                paddingAngle={3}
                            >

                                {data.map((entry, index) => (
                                    <Cell
                                        key={entry.name}
                                        fill={COLORS[index]}
                                    />
                                ))}

                            </Pie>

                            <Tooltip />

                        </PieChart>

                    </ResponsiveContainer>

                </Box>

                {data.map((item, index) => (

                    <Box
                        key={item.name}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 1
                        }}
                    >

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1
                            }}
                        >

                            <Box
                                sx={{
                                    width: 9,
                                    height: 9,
                                    borderRadius: "50%",
                                    backgroundColor: COLORS[index]
                                }}
                            />

                            <Typography variant="body2">
                                {item.name}
                            </Typography>

                        </Box>

                        <Typography
                            variant="body2"
                            fontWeight={600}
                        >
                            {item.value}
                        </Typography>

                    </Box>

                ))}

            </CardContent>

        </Card>
    );
};

export default OrderStatus;