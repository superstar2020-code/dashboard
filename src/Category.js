import React from 'react';
import { Grid, Box,Card, CardContent, Typography, Button } from '@mui/material';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
import WidgetCard from './WidgetCard';

const exampleData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };
  
  const exampleOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Value: ${tooltipItem.raw}`,
        },
      },
    },
  };
  

  const Category = ({ name, widgets, onAddWidget, onRemoveWidget }) => (
    <Box
    sx={{
      backgroundColor: '#f5f5f5',  // Light grey background
      borderRadius: '8px',         // Border radius for rounded corners
      padding: '1rem',             // Padding inside the box
      margin: '2rem',        // Space between categories
      boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)', // Optional: slight shadow for depth
    }}
  >
    <div style={{ marginBottom: '2rem' }}>
      <Typography variant="h6" sx={{fontWeight:"600",justifyContent:"center",marginBottom:"10px"}}>
        {name}
      </Typography>
      <Grid container spacing={2}>
        {widgets.map((widget, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <WidgetCard
              name={widget.name}
              type={widget.type}
              data={widget.data}
              onRemove={() => onRemoveWidget(index)}
            />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4}>
          
          <Button
            variant="outlined"
            fullWidth
            sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={onAddWidget}
          >
            + Add Widget
          </Button>
        </Grid>
      </Grid>
    </div>
    </Box>
  );
  
  export default Category;