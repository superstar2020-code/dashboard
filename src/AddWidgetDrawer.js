import React, { useState } from 'react';
import { Drawer, Box, Typography, TextField, Checkbox, Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const availableWidgets = [
  {
    id: 1,
    name: 'Cloud Account',
    type: 'bar',
    category: 'CSPM Execution Dashboard',
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [10, 20, 30],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
      ]
    }
  },
  {
    id: 2,
    name: 'Cloud Account Risk Assessment',
    type: 'bar',
    category: 'CSPM Execution Dashboard',
    data: {
      labels: ['Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: 'Dataset 2',
          data: [15, 25, 35],
          backgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40']
        }
      ]
    }
  },
  {
    id: 3,
    name: 'Workload Alerts',
    type: 'line',
    category: 'CWPP DashBoard',
    data: {
      labels: ['January', 'February', 'March'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [30, 40, 50],
          borderColor: '#FF6384',
          fill: false
        }
      ]
    }
  },
  {
    id: 4,
    name: 'Specific Alerts',
    type: 'line',
    category: 'CWPP DashBoard',
    data: {
      labels: ['April', 'May', 'June'],
      datasets: [
        {
          label: 'Dataset 2',
          data: [25, 35, 45],
          borderColor: '#36A2EB',
          fill: false
        }
      ]
    }
  },
  {
    id: 5,
    name: 'Image Risk Assessment',
    type: 'doughnut',
    category: 'Registry Scan',
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
      ]
    }
  },
  {
    id: 6,
    name: 'Image Security Issues',
    type: 'doughnut',
    category: 'Registry Scan',
    data: {
      labels: ['Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: 'Dataset 2',
          data: [150, 200, 100],
          backgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40'],
          hoverBackgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40']
        }
      ]
    }
  }
];

const AddWidgetDrawer = ({ open, onClose, onAddWidgets, currentCategory }) => {
  const [selectedWidgets, setSelectedWidgets] = useState([]);
  const [search, setSearch] = useState('');

  const handleCheckboxChange = (widgetId) => {
    setSelectedWidgets((prev) =>
      prev.includes(widgetId) ? prev.filter((id) => id !== widgetId) : [...prev, widgetId]
    );
  };

  const handleAddWidgets = () => {
    const widgetsToAdd = availableWidgets.filter((widget) =>
      selectedWidgets.includes(widget.id)
    );
    onAddWidgets(widgetsToAdd);
    onClose();
    setSelectedWidgets([]); // Clear selection after adding widgets
  };

  const filteredWidgets = availableWidgets.filter((widget) =>
    widget.name.toLowerCase().includes(search.toLowerCase())
  );

  // Group widgets by category
  const widgetsByCategory = filteredWidgets.reduce((acc, widget) => {
    if (!acc[widget.category]) {
      acc[widget.category] = [];
    }
    acc[widget.category].push(widget);
    return acc;
  }, {});

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 600, padding: 2 }}>
        <Box
          sx={{ 
            backgroundColor: '#f5f5f5', 
            color: 'black',               
            padding: '16px',             
            borderRadius: '4px',         
            marginBottom: '16px' ,
                  
          }}
        >
          <Typography variant="h6" sx={{ fontWeight:"bold"}}>
            Add Widgets to {currentCategory}
          </Typography>
        </Box>
        <TextField
          label="Search Widgets"
          variant="outlined"
          fullWidth
          margin="normal"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ marginBottom: '16px' }} // Space below the search field
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ marginBottom: 2 }}>
          {Object.keys(widgetsByCategory).map((category) => (
            <Box key={category} sx={{ marginBottom: '16px' }}>
              <Typography variant="h6" sx={{ marginBottom: '8px',fontWeight:"bold" ,backgroundColor:"#f5f5f5"}}>
                {category} Widgets
              </Typography>
              {widgetsByCategory[category].map((widget) => (
                <Box key={widget.id} sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  <Checkbox
                    checked={selectedWidgets.includes(widget.id)}
                    onChange={() => handleCheckboxChange(widget.id)}
                  />
                  <Typography variant="body1" sx={{ marginLeft: '8px' }}>
                    {widget.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
        <Button variant="contained" color="primary" onClick={handleAddWidgets} fullWidth>
          Add Selected Widgets
        </Button>
      </Box>
    </Drawer>
  );
};

export default AddWidgetDrawer;
