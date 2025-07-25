import { NavigationProp, useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { useState } from 'react';
import { AuthStackNavigationType } from '../../../utils/types/NavigationTypes';

export const useSearchForm = () => {
  const [dogSize, setDogSize] = useState('');
  const [dogAge, setDogAge] = useState('');
  const [getAlongWithDogs, setGetAlongWithDogs] = useState('');
  const [getAlongWithCats, setGetAlongWithCats] = useState('');
  const navigation = useNavigation<NavigationProp<AuthStackNavigationType>>();
  const route = useRoute<RouteProp<AuthStackNavigationType, 'Searching'>>();
  const serviceTitle = route.params?.service || 'Boarding';

  const handleSearch = () => {
    // You can handle your form submit here
    console.log({ dogSize, dogAge, getAlongWithDogs, getAlongWithCats });
    navigation.navigate('BoardingSearch', { service: serviceTitle });
  };

  return {
    dogSize,
    setDogSize,
    dogAge,
    setDogAge,
    getAlongWithDogs,
    setGetAlongWithDogs,
    getAlongWithCats,
    setGetAlongWithCats,
    handleSearch,
  };
};
