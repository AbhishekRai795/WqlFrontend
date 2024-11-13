import React from 'react';
import {
  Box,
  Text,
  VStack,
  Heading,
  List,
  ListItem,
  ListIcon,
  Badge,
} from '@chakra-ui/react';
import { MdWarning, MdInfo } from 'react-icons/md';

const AnalysisResults = ({ results }) => {
  const getScoreColor = (score) => {
    if (score >= 90) return 'green';
    if (score >= 70) return 'blue';
    if (score >= 50) return 'yellow';
    return 'red';
  };

  return (
    <Box w="100%" p={6} borderRadius="lg" boxShadow="lg" bg="white">
      <VStack align="stretch" spacing={4}>
        <Heading size="md">Analysis Results</Heading>
        
        <Box>
          <Text fontSize="lg">
            Quality Score:{' '}
            <Badge
              colorScheme={getScoreColor(results.qualityScore)}
              fontSize="lg"
              p={2}
              borderRadius="md"
            >
              {results.qualityScore}/100 ({results.qualityClass})
            </Badge>
          </Text>
        </Box>

        {results.issues.length > 0 && (
          <Box>
            <Heading size="sm" mb={2}>Issues Detected:</Heading>
            <List spacing={2}>
              {results.issues.map((issue, index) => (
                <ListItem key={index} display="flex" alignItems="center">
                  <ListIcon as={MdWarning} color="red.500" />
                  {issue}
                </ListItem>
              ))}
            </List>
          </Box>
        )}

        {results.recommendations.length > 0 && (
          <Box>
            <Heading size="sm" mb={2}>Recommendations:</Heading>
            <List spacing={2}>
              {results.recommendations.map((rec, index) => (
                <ListItem key={index} display="flex" alignItems="center">
                  <ListIcon as={MdInfo} color="blue.500" />
                  {rec}
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default AnalysisResults;