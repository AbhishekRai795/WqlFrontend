import React from 'react';
import { ChakraProvider, Container, VStack } from '@chakra-ui/react';
import WaterQualityForm from './components/WaterQualityForm';
import AnalysisResults from './components/AnalysisResults';
import WaterQualityGraph from './components/WaterQualityGraph';

function App() {
  const [analysisResults, setAnalysisResults] = React.useState(null);
  const [historicalData, setHistoricalData] = React.useState(null);

  return (
    <ChakraProvider>
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8}>
          <WaterQualityForm setAnalysisResults={setAnalysisResults} />
          {analysisResults && <AnalysisResults results={analysisResults} />}
          <WaterQualityGraph setHistoricalData={setHistoricalData} data={historicalData} />
        </VStack>
      </Container>
    </ChakraProvider>
  );
}

export default App;