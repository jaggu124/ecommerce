import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

import {
    Card,
    CardContent,
    Typography,
    Box,
    Select,
    MenuItem
} from "@mui/material";

const salesData = [
    { month: "Jan", sales: 42000 },
    { month: "Feb", sales: 52000 },
    { month: "Mar", sales: 48000 },
    { month: "Apr", sales: 68000 },
    { month: "May", sales: 62000 },
    { month: "Jun", sales: 74000 },
    { month: "Jul", sales: 85000 },
    { month: "Aug", sales: 92000 }
];

const SalesChart = () => {

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
                            Sales Analytics
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Revenue performance
                        </Typography>

                    </Box>

                    <Select
                        size="small"
                        defaultValue="2026"
                        sx={{
                            minWidth: 90
                        }}
                    >
                        <MenuItem value="2026">
                            2026
                        </MenuItem>

                        <MenuItem value="2025">
                            2025
                        </MenuItem>
                    </Select>

                </Box>

                <Box
                    sx={{
                        width: "100%",
                        height: 300
                    }}
                >

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <AreaChart data={salesData}>

                            <defs>

                                <linearGradient
                                    id="salesColor"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >

                                    <stop
                                        offset="0%"
                                        stopOpacity={0.35}
                                    />

                                    <stop
                                        offset="100%"
                                        stopOpacity={0}
                                    />

                                </linearGradient>

                            </defs>

                            <CartesianGrid
                                strokeDasharray="3 3"
                                vertical={false}
                            />

                            <XAxis
                                dataKey="month"
                                axisLine={false}
                                tickLine={false}
                            />

                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tickFormatter={(value) =>
                                    `₹${value / 1000}K`
                                }
                            />

                            <Tooltip
                                formatter={(value) =>
                                    `₹${Number(value).toLocaleString()}`
                                }
                            />

                            <Area
                                type="monotone"
                                dataKey="sales"
                                stroke="#1976d2"
                                strokeWidth={3}
                                fill="url(#salesColor)"
                            />

                        </AreaChart>

                    </ResponsiveContainer>

                </Box>

            </CardContent>

        </Card>
    );
};

export default SalesChart;