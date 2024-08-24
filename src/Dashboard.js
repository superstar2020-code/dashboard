// Dashboard.js
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import DashboardHeader from './DashboardHeader';
import Category from './Category';
import AddWidgetDrawer from './AddWidgetDrawer';

const Dashboard = () => {
  const [categories, setCategories] = useState([
    {
      "name": "CSPM Execution Dashboard",
      "widgets": [
        {
          "type": "bar",
          "name": "Cloud Account",
          "data": {
            "labels": ["Red", "Blue", "Yellow"],
            "datasets": [{
              "label": "Dataset 1",
              "data": [10, 20, 30],
              "backgroundColor": ["#FF6384", "#36A2EB", "#FFCE56"]
            }]
          }
        },
        {
          "type": "bar",
          "name": "Cloud Account Risk Assessment",
          "data": {
            "labels": ["Green", "Purple", "Orange"],
            "datasets": [{
              "label": "Dataset 2",
              "data": [15, 25, 35],
              "backgroundColor": ["#4BC0C0", "#9966FF", "#FF9F40"]
            }]
          }
        }
      ]
    },
    {
      "name": "CWPP DashBoard",
      "widgets": [
        {
          "type": "line",
          "name": "Workload Alerts",
          "data": {
            "labels": ["January", "February", "March"],
            "datasets": [{
              "label": "Dataset 1",
              "data": [30, 40, 50],
              "borderColor": "#FF6384",
              "fill": false
            }]
          }
        },
        {
          "type": "line",
          "name": "Specific Alerts",
          "data": {
            "labels": ["April", "May", "June"],
            "datasets": [{
              "label": "Dataset 2",
              "data": [25, 35, 45],
              "borderColor": "#36A2EB",
              "fill": false
            }]
          }
        }
      ]
    },
    {
      "name": "Registry Scan",
      "widgets": [
        {
          "type": "doughnut",
          "name": "Image Risk Assessment",
          "data": {
            "labels": ["Red", "Blue", "Yellow"],
            "datasets": [{
              "label": "Dataset 1",
              "data": [300, 50, 100],
              "backgroundColor": ["#FF6384", "#36A2EB", "#FFCE56"],
              "hoverBackgroundColor": ["#FF6384", "#36A2EB", "#FFCE56"]
            }]
          }
        },
        {
          "type": "doughnut",
          "name": "Image Security Issues",
          "data": {
            "labels": ["Green", "Purple", "Orange"],
            "datasets": [{
              "label": "Dataset 2",
              "data": [150, 200, 100],
              "backgroundColor": ["#4BC0C0", "#9966FF", "#FF9F40"],
              "hoverBackgroundColor": ["#4BC0C0", "#9966FF", "#FF9F40"]
            }]
          }
        }
      ]
    }
  ]);
  
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');

  const handleAddWidget = (categoryIndex, newWidgets) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].widgets.push(...newWidgets);
    setCategories(updatedCategories);
  };

  const handleOpenDrawer = (categoryName) => {
    setCurrentCategory(categoryName);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setCurrentCategory('');
  };

  return (
    <>
      <Navbar />
      <Box sx={{ m: 4 }}>
        <DashboardHeader />
        {categories.map((category, index) => (
          <Category 
            key={index}
            name={category.name}
            widgets={category.widgets}
            onAddWidget={() => handleOpenDrawer(category.name)}
            onRemoveWidget={(widgetIndex) => {
              const updatedCategories = [...categories];
              updatedCategories[index].widgets.splice(widgetIndex, 1);
              setCategories(updatedCategories);
            }}
          />
        ))}
      </Box>
      <AddWidgetDrawer
        open={drawerOpen}
        onClose={handleCloseDrawer}
        onAddWidgets={(newWidgets) => {
          const categoryIndex = categories.findIndex(
            (cat) => cat.name === currentCategory
          );
          handleAddWidget(categoryIndex, newWidgets);
        }}
        currentCategory={currentCategory}
      />
    </>
  );
};

export default Dashboard;
