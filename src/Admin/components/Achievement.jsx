import { Button, Card, CardContent, styled, Typography } from '@mui/material';
import React from 'react';

const TriangleImg = styled("div")({
    right: 0,
    bottom: 0,
    width: 190,
    height: 170,
    position: "absolute",
    background: "linear-gradient(135deg, transparent 50%, #e8eaf6 50%)",
});

const TrophyImg = styled("img")({
    right: 36,
    bottom: 20,
    height: 98,
    position: "absolute",
    objectFit: "contain",
});

const Achievement = () => {
    return (
        <Card
            sx={{
                position: "relative",
                height: "100%",
                overflow: "hidden",
                borderRadius: 2,
                boxShadow: "0 3px 12px rgba(0,0,0,0.08)"
            }}
        >

            <CardContent sx={{ position: "relative", zIndex: 2 }}>

                <Typography
                    variant="h6"
                    sx={{
                        letterSpacing: ".25px",
                        fontWeight: 600
                    }}
                >
                    ShopKaroo
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    Congratulations 🥳
                </Typography>

                <Typography
                    variant="h4"
                    sx={{
                        my: 3.1,
                        fontWeight: 600
                    }}
                >
                    ₹420.8K
                </Typography>

                <Button
                    size="small"
                    variant="contained"
                    sx={{
                        textTransform: "none",
                        borderRadius: 1.5
                    }}
                >
                    View Sales
                </Button>

            </CardContent>

            <TriangleImg />

            <TrophyImg
                src="https://www.shutterstock.com/image-vector/gold-trophy-cup-confetti-flat-260nw-2488854233.jpg"
                alt="Achievement"
            />

        </Card>
    );
};

export default Achievement;