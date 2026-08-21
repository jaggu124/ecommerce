import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';

const salesData = [
    {
        stats: '245k',
        title: 'Sales',
        color: "primary",
        icon: <TrendingUpIcon sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats: '12.5k',
        title: 'Customers',
        color: "success",
        icon: <AccountBoxIcon sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats: '1.54k',
        title: 'Products',
        color: "warning",
        icon: <SettingsCellIcon sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats: '88k',
        title: 'Revenue',
        color: "info",
        icon: <AttachMoneyIcon sx={{fontSize:"1.75rem"}}/>
    }
]

const renderStats = () => {
    return salesData.map((item,index) => (
        <Grid item size={{xs:12, sm:3}} key={index}>

            <Box sx={{display:"flex", alignItems:"center"}}>

                <Avatar variant='rounded' sx={{mr:3, width:44, height:44, boxShadow:3, color:"white", bgcolor:`${item.color}.main`}}>
                    {item.icon}
                </Avatar>

                <Box sx={{display:'flex', flexDirection:'column'}}>

                    <Typography variant='caption'>
                        {item.title}
                    </Typography>
                    <Typography variant='h6'>
                        {item.stats}
                    </Typography>

                </Box>

            </Box>

        </Grid>
    ))
}

const MonthlyOverview = () => {
  return (
    <Card sx={{height:"100%"}}>
        <CardHeader title="Monthly Overview"
        action={
            <IconButton size='small'>
                <MoreVertIcon/>
            </IconButton>
        }
        subheader={
            <Typography variant='body2'>
                <Box component="span" sx={{fontWeight:600}}>
                    Total 48.5% growth  
                </Box>
                 😎 this Month
            </Typography>
        }
        titleTypographyProps={{
            sx:{
                mb:2.5,
                lineHeight: '2rem !important',
                letterSpacing: '0.50px !important'
            }
        }}
        />

        <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
            <Grid container spacing={[5,0]}>
                {renderStats()}

            </Grid>

        </CardContent>

    </Card>
  )
}

export default MonthlyOverview