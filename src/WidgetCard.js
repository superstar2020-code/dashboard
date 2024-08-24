import React from 'react';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import DeleteIcon from '@mui/icons-material/Delete';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';

// Register necessary components
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);
const doughnutOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right', // Set legend position to the right for Doughnut chart
      labels: {
        boxWidth: 12, // Adjust box width for legend items
        padding: 10,  // Adjust padding between legend items
      },
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `Value: ${tooltipItem.raw}`,
      },
    },
  },
};

const exampleOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `Value: ${tooltipItem.raw}`,
      },
    },
  },
};

const WidgetCard = ({ name, type, data, onRemove }) => {
  if (!data || !data.labels) {
    return <Typography>Error: Data is not properly defined.</Typography>;
  }

  const renderChart = () => {
    switch (type) {
      case 'bar':
        return <Bar data={data} options={exampleOptions} />;
      case 'line':
        return <Line data={data} options={exampleOptions} />;
      case 'doughnut':
        return (
          <Box sx={{ width: '100%', height: '200px' }}>
            <Doughnut data={data} options={doughnutOptions} />
          </Box>
        );
      default:
        return <Typography>Unknown chart type</Typography>;
    }
  };

  return (
    <Card sx={{ position: 'relative', height: '100%' }}>
      <CardContent sx={{ height: '100%' }}>
        <Typography variant="h6">
          {name}
        </Typography>
        {renderChart()}
        <IconButton 
          onClick={onRemove} 
          sx={{ 
            position: 'absolute', 
            top: 8, 
            right: 8 
          }}
        >
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default WidgetCard;
