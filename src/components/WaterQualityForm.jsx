import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import axios from 'axios';

const WaterQualityForm = ({ setAnalysisResults }) => {
  const [formData, setFormData] = React.useState({
    ph: '',
    chloramine: '',
    hardness: '',
    solids: '',
    chlorides: '',
    conductivity: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/water-quality/analyze', formData);
      setAnalysisResults(response.data);
    } catch (error) {
      console.error('Error analyzing water quality:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: parseFloat(e.target.value)
    });
  };

  return (
    <Box w="100%" p={6} borderRadius="lg" boxShadow="lg" bg="white">
      <Heading size="lg" mb={6}>Water Quality Analysis</Heading>
      <form onSubmit={handleSubmit}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <FormControl>
            <FormLabel>pH Level</FormLabel>
            <Input
              name="ph"
              type="number"
              step="0.1"
              value={formData.ph}
              onChange={handleChange}
              placeholder="Enter pH level"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Chloramine (mg/L)</FormLabel>
            <Input
              name="chloramine"
              type="number"
              step="0.1"
              value={formData.chloramine}
              onChange={handleChange}
              placeholder="Enter chloramine level"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Hardness (mg/L)</FormLabel>
            <Input
              name="hardness"
              type="number"
              value={formData.hardness}
              onChange={handleChange}
              placeholder="Enter water hardness"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Total Dissolved Solids (mg/L)</FormLabel>
            <Input
              name="solids"
              type="number"
              value={formData.solids}
              onChange={handleChange}
              placeholder="Enter TDS"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Chlorides (mg/L)</FormLabel>
            <Input
              name="chlorides"
              type="number"
              value={formData.chlorides}
              onChange={handleChange}
              placeholder="Enter chlorides level"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Conductivity (µS/cm)</FormLabel>
            <Input
              name="conductivity"
              type="number"
              value={formData.conductivity}
              onChange={handleChange}
              placeholder="Enter conductivity"
            />
          </FormControl>
        </SimpleGrid>
        <Button
          mt={6}
          colorScheme="blue"
          type="submit"
          w="100%"
        >
          Analyze Water Quality
        </Button>
      </form>
    </Box>
  );
};

export default WaterQualityForm;