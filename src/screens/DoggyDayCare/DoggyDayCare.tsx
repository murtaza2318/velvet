import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AuthStackNavigationType } from '../../utils/types/NavigationTypes';
import DateTimePicker from '@react-native-community/datetimepicker';

const { width } = Dimensions.get('window');

const DropInVisitsScreen = () => {
  const [schedule, setSchedule] = useState<'one-time' | 'repeat'>('one-time');
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const navigation = useNavigation<NavigationProp<AuthStackNavigationType>>();

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
    navigation.navigate('Searching', { service: 'Doggy Day Care' });
  };

  const onDateChange = (event: any, date?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (date) setSelectedDate(date);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>
        <Text style={styles.skipText}>Skip</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Title */}
        <Text style={styles.title}>Doggy Day Care</Text>
        <Text style={styles.subtitle}>When do you need a sitter?</Text>

        {/* Card */}
        <View style={styles.card}>
          {/* Schedule */}
          <Text style={styles.sectionTitle}>Schedule</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.squareButton, schedule === 'one-time' && styles.selected]}
              onPress={() => setSchedule('one-time')}
            >
              <Ionicons name="calendar-outline" size={24} color="#111" />
              <Text style={styles.buttonText}>One Time</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.squareButton, schedule === 'repeat' && styles.selected]}
              onPress={() => setSchedule('repeat')}
            >
              <Ionicons name="repeat-outline" size={24} color="#111" />
              <Text style={styles.buttonText}>Repeat Weekly</Text>
            </TouchableOpacity>
          </View>

          {/* Pet type(s) */}
          <Text style={styles.sectionTitle}>Pet type(s)</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.pillButton, petType === 'dog' && styles.pillSelected]}
              onPress={() => setPetType('dog')}
            >
              <Text style={styles.pillText}>Dog</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.pillButton, petType === 'cat' && styles.pillSelected]}
              onPress={() => setPetType('cat')}
            >
              <Text style={styles.pillText}>Cat</Text>
            </TouchableOpacity>
          </View>

          {/* Dates */}
          <TouchableOpacity style={styles.rowButton} onPress={() => setShowDatePicker(true)}>
            <Text style={styles.rowTitle}>Dates</Text>
            <View style={styles.rowRight}>
              <Text style={styles.rowSubtitle}>
                {selectedDate ? selectedDate.toDateString() : 'Select your dates'}
              </Text>
              <Ionicons name="chevron-forward" size={20} color="#111" />
            </View>
          </TouchableOpacity>

          {/* Location */}
          <TouchableOpacity style={styles.rowButton}>
            <Text style={styles.rowTitle}>Your location</Text>
            <View style={styles.rowRight}>
              <Text style={styles.rowSubtitle}>United States</Text>
              <Ionicons name="chevron-forward" size={20} color="#111" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Bottom note */}
        <Text style={styles.footerNote}>
          Add dates and location to see sitters who’ll be available for your need.
        </Text>
      </ScrollView>

      {/* Date Picker */}
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}

      {/* Bottom button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.nextButton} onPress={onSubmit}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DropInVisitsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 25,
  },
  scroll: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  skipText: {
    fontSize: 16,
    color: '#333',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: '#444',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  squareButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#FFF',
  },
  selected: {
    borderColor: '#333',
  },
  buttonText: {
    marginTop: 6,
    fontSize: 14,
    color: '#111',
  },
  pillButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 10,
    backgroundColor: '#F5F5F5',
  },
  pillSelected: {
    borderColor: '#111',
    backgroundColor: '#FFF',
  },
  pillText: {
    fontSize: 14,
    color: '#111',
  },
  rowButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderTopWidth: 1,
    borderColor: '#EEE',
  },
  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rowTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
  },
  rowSubtitle: {
    fontSize: 14,
    color: '#666',
    marginRight: 8,
  },
  footerNote: {
    fontSize: 13,
    color: '#666',
    marginTop: 16,
    paddingHorizontal: 4,
  },
  bottomBar: {
    padding: 16,
    backgroundColor: '#F7F7F7',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  nextButton: {
    backgroundColor: '#8F9E73',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
  },
  nextText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
