import React, { useEffect } from 'react';
import {
  Box,
  Heading,
} from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WaterQualityGraph = ({ setHistoricalData, data }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/water-quality/toxic-components');
        setHistoricalData(response.data);
      } catch (error) {
        console.error('Error fetching historical data:', error);
      }
    };
    fetchData();
  }, [setHistoricalData]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Water Quality Parameters Over Time'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <Box w="100%" p={6} borderRadius="lg" boxShadow="lg" bg="white">
      <Heading size="md" mb={4}>Historical Water Quality Trends</Heading>
      {data && <Line options={options} data={data} />}
    </Box>
  );
};

export default WaterQualityGraph;