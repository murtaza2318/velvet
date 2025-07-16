import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ITEM_HEIGHT = 50;
const WINDOW_HEIGHT = Dimensions.get('window').height;

// Define interfaces for props
interface ServiceCardProps {
  title: string;
  price: string;
  rate: string;
  details: [string, string][];
}

const ProfileScreen = () => {
  const serviceOptions = ['Home Sitting', 'Drop-In Visits', 'Dog Walking'];
  const [selectedService, setSelectedService] = useState(serviceOptions[1]);
  const [selectedDate, setSelectedDate] = useState('');
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<ScrollView>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownSelect = (option: string, index: number) => {
    setSelectedService(option);
    setSelectedIndex(index);
    setDropdownVisible(false);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ y: index * ITEM_HEIGHT, animated: true });
    }
  };

  const onScrollEnd = (e: { nativeEvent: { contentOffset: { y: number } } }) => {
    const index = Math.round(e.nativeEvent.contentOffset.y / ITEM_HEIGHT);
    setSelectedIndex(index);
    setSelectedService(serviceOptions[index]);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ y: index * ITEM_HEIGHT, animated: true });
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Services */}
      <View style={styles.serviceSection}>
        <ServiceCard
          title="House Sitting"
          price="$40"
          rate="per night"
          details={[
            ['Holiday Rate', '$78'],
            ['Additional Dog Rate', '+ $10'],
            ['Puppy Rate', '$65'],
            ['Cat Care', '$50'],
            ['Additional Cat', '+ $10'],
            ['Extended Care', '50-100%'],
          ]}
        />
        <PetIcons />
        <ServiceCard
          title="Drop-In Visits"
          price="$20"
          rate="per visit"
          details={[
            ['60 min rate', '+ $30'],
            ['Holiday Rate', '$30'],
            ['Additional Dog Rate', '+ $5'],
            ['Puppy Rate', '$20'],
            ['Cat Care', '$20'],
            ['Additional Cat', '+ $5'],
            ['Booking of 5+ days', '+ $20'],
            ['Bathing / Grooming', '+ $20'],
          ]}
        />
        <PetIcons />
        <ServiceCard
          title="Dog Walking"
          price="$15"
          rate="per walk"
          details={[
            ['60 min walk', '+ $20'],
            ['Holiday Rate', '$19'],
            ['Additional Dog Rate', '+ $5'],
            ['Puppy Rate', '$10'],
          ]}
        />
        <PetIcons />
      </View>

      {/* Calendar */}
      <View style={styles.calendarSection}>
        <Text style={styles.calendarTitle}>Calendar</Text>
        <TouchableOpacity style={styles.dropdown} onPress={() => setDropdownVisible(!dropdownVisible)}>
          <Text style={styles.dropdownText}>{selectedService}</Text>
          <Icon name={dropdownVisible ? 'chevron-up' : 'chevron-down'} size={20} />
        </TouchableOpacity>
        {dropdownVisible && (
          <View style={styles.dropdownOptions}>
            {serviceOptions.map((option, index) => (
              <TouchableOpacity
                key={option}
                onPress={() => handleDropdownSelect(option, index)}
                style={styles.dropdownOptionItem}
              >
                <Text style={styles.dropdownOptionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#7a8659' },
          }}
          theme={{ todayTextColor: '#7a8659' }}
        />
        <Text style={styles.doneText}>Done</Text>
      </View>

      {/* Vertical Picker */}
      <View style={styles.bottomNavVertical}>
        <Animated.ScrollView
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          onMomentumScrollEnd={onScrollEnd}
          contentContainerStyle={{
            paddingTop: ITEM_HEIGHT,
            paddingBottom: ITEM_HEIGHT,
          }}
        >
          {serviceOptions.map((option, index) => (
            <View key={option} style={styles.navItemWrapper}>
              <Text
                style={[
                  styles.navItemVertical,
                  index === selectedIndex && styles.selectedNavItem,
                ]}
              >
                {option}
              </Text>
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    </ScrollView>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, price, rate, details }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={styles.cardTitleContainer}>
        <Icon name="paw" size={18} color="#7a8659" style={styles.cardIcon} />
        <Text style={styles.cardTitle}>{title.trim()}</Text>
      </View>
      <Text style={styles.cardPrice}>
        {price} <Text style={styles.rate}>{rate}</Text>
      </Text>
    </View>
    {details.map(([label, value], idx) => (
      <View style={styles.detailRow} key={idx}>
        <Text style={styles.detailLabel}>{label}</Text>
        <Text style={styles.detailValue}>{value}</Text>
      </View>
    ))}
  </View>
);

const PetIcons: React.FC = () => (
  <View style={styles.petIconsContainer}>
    <View style={styles.petRow}>
      <View style={styles.petIcon}>
        <Icon name="cat" size={24} color="#000" />
        <Text style={styles.petLabel}>Cats</Text>
      </View>
      <View style={styles.petIcon}>
        <Icon name="dog" size={24} color="#000" />
        <Text style={styles.petLabel}>0-15 lbs</Text>
      </View>
    </View>
    <View style={styles.petRow}>
      <View style={styles.petIcon}>
        <Icon name="dog" size={24} color="#000" />
        <Text style={styles.petLabel}>16-40 lbs</Text>
      </View>
      <View style={styles.petIcon}>
        <Icon name="dog" size={24} color="#000" />
        <Text style={styles.petLabel}>41-100 lbs</Text>
      </View>
    </View>
    <View style={[styles.petRow, { justifyContent: 'center' }]}>
      <View style={styles.petIcon}>
        <Icon name="dog" size={24} color="#000" />
        <Text style={styles.petLabel}>101+ lbs</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  serviceSection: { padding: 16 },
  card: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: { fontSize: 16, fontWeight: '600', marginLeft: 8 },
  cardIcon: { position: 'absolute', left: -20 },
  cardPrice: { color: '#7a8659', fontWeight: 'bold' },
  rate: { fontSize: 12, color: '#555' },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  detailLabel: { color: '#555', marginTop: 25 },
  detailValue: { color: '#7a8659', fontWeight: 'bold' },
  petIconsContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  petRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  petIcon: {
    alignItems: 'center',
    width: '45%',
  },
  petLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  calendarSection: { padding: 16 },
  calendarTitle: { fontSize: 16, fontWeight: '600', marginBottom: 8 },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#ccc',
    marginBottom: 12,
  },
  dropdownText: { fontSize: 14 },
  dropdownOptions: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    backgroundColor: '#fff',
    marginBottom: 12,
    marginTop: -10,
  },
  dropdownOptionItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  dropdownOptionText: {
    fontSize: 14,
    color: '#333',
  },
  doneText: { textAlign: 'center', color: '#7a8659', marginTop: 12 },
  bottomNavVertical: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
    overflow: 'hidden',
  },
  navItemWrapper: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navItemVertical: {
    fontSize: 16,
    color: '#999',
  },
  selectedNavItem: {
    color: '#7a8659',
    fontWeight: 'bold',
    fontSize: 18,
  },
  cta: {
    backgroundColor: '#7a8659',
    margin: 16,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  ctaText: { color: '#fff', fontWeight: '600' },
});

export default ProfileScreen;