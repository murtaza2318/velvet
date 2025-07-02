// src/screens/ProfileScreen/hooks/useProfileData.ts

import { useState, useEffect } from 'react';

interface ProfileData {
  name: string;
  price: string;
  location: string;
  rating: string;
  skills: string[];
  homeDetails: string[];
  about: string;
}

const useProfileData = () => {
  const [data, setData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching profile data
    const fetchData = async () => {
      setLoading(true);
      setTimeout(() => {
        setData({
          name: 'America C.',
          price: 'from $40 per night',
          location: 'Katy, TX',
          rating: '★ 5.0 · 109 reviews',
          skills: [
            'Oral medication administration',
            'Injected medication administration',
            'Senior dog experience',
            'Special needs dog experience',
          ],
          homeDetails: [
            'Lives in a house',
            'Has a fenced yard',
            'Non-smoking household',
            'Has no pets',
            'Children 0–5 years old',
            'Dogs over 1 year old',
          ],
          about: `With all of Velvet’s new changes and updates in mind, they have informed all sitters that they will be raising the service fee...`,
        });
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  return { data, loading };
};

export default useProfileData;
