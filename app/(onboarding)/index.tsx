import { Colors } from '@/constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const onboardingData = [
  {
    id: '1',
    title: 'Create\nGood Habits',
    description: 'Change your life by slowly adding new healthy habits and sticking to them.',
  },
  {
    id: '2',
    title: 'Track\nYour Progress',
    description: 'Everyday you become one step closer to your goal. Don\'t give up!',
  },
  {
    id: '3',
    title: 'Stay Together\nand Strong',
    description: 'Find friends to discuss common topics. Complete challenges together.',
  },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const router = useRouter();

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    } else {
      router.replace('/(auth)/login');
    }
  };

  const handleSkip = () => {
    router.replace('/(auth)/login');
  };

  const renderItem = ({ item }: { item: typeof onboardingData[0] }) => (
    <View style={styles.slide}>
      <View style={styles.imageContainer}>
        {/* Placeholder for habit cards illustration */}
        <View style={styles.illustrationArea}>
          <View style={styles.habitCard1}>
            <View style={styles.avatar} />
            <View style={styles.cardContent} />
          </View>
          <View style={styles.habitCard2}>
            <View style={styles.avatar} />
            <View style={styles.cardContent} />
          </View>
          <View style={styles.habitCard3}>
            <View style={styles.avatar} />
            <View style={styles.cardContent} />
          </View>
        </View>
      </View>
      
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <LinearGradient
      colors={[Colors.primaryDark, Colors.primary, Colors.primaryLight]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <SafeAreaView style={styles.safeArea}>
        {/* Decorative circles */}
        <View style={[styles.decorCircle, styles.decorCircle1]} />
        <View style={[styles.decorCircle, styles.decorCircle2]} />
        <View style={[styles.decorCircle, styles.decorCircle3]} />

        <FlatList
          ref={flatListRef}
          data={onboardingData}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(event) => {
            const index = Math.round(event.nativeEvent.contentOffset.x / width);
            setCurrentIndex(index);
          }}
          keyExtractor={(item) => item.id}
        />

        {/* Pagination Dots */}
        <View style={styles.pagination}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex && styles.dotActive,
              ]}
            />
          ))}
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton} onPress={handleNext}>
          <Text style={styles.continueButtonText}>
            {currentIndex === onboardingData.length - 1 ? 'Get Started' : 'Continue with E-mail'}
          </Text>
        </TouchableOpacity>

        {/* Social Login Buttons */}
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialIcon}>🍎</Text>
            <Text style={styles.socialText}>Apple</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialIcon}>G</Text>
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialIcon}>f</Text>
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  slide: {
    width,
    flex: 1,
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  illustrationArea: {
    width: '100%',
    height: 300,
    position: 'relative',
  },
  habitCard1: {
    position: 'absolute',
    top: 20,
    right: 40,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    width: 180,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  habitCard2: {
    position: 'absolute',
    top: 100,
    left: 20,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    width: 180,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  habitCard3: {
    position: 'absolute',
    top: 180,
    right: 30,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    width: 180,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.secondary,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
    height: 30,
    backgroundColor: Colors.backgroundLight,
    borderRadius: 8,
  },
  textContainer: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 16,
    lineHeight: 44,
  },
  description: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 24,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: 4,
  },
  dotActive: {
    width: 24,
    backgroundColor: Colors.white,
  },
  continueButton: {
    backgroundColor: Colors.white,
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primary,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginHorizontal: 6,
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 100,
    justifyContent: 'center',
  },
  socialIcon: {
    fontSize: 18,
    marginRight: 6,
  },
  socialText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textDark,
  },
  decorCircle: {
    position: 'absolute',
    borderRadius: 1000,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  decorCircle1: {
    width: 200,
    height: 200,
    top: -50,
    right: -50,
  },
  decorCircle2: {
    width: 150,
    height: 150,
    bottom: 200,
    left: -30,
  },
  decorCircle3: {
    width: 100,
    height: 100,
    top: 200,
    left: 30,
  },
});