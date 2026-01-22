import { Colors } from '@/constants/colors';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ExploreScreen() {
  const router = useRouter();

  const suggestedHabits = [
    { id: '1', name: 'Walk', duration: '10 km', icon: '🚶', color: '#FFE4E1' },
    { id: '2', name: 'Swim', duration: '30 min', icon: '🏊', color: '#E6E6FA' },
    { id: '3', name: 'Read', duration: '20 min', icon: '📚', color: '#E0F2F1' },
  ];

  const habitClubs = [
    { id: '1', name: 'Cat Lovers', members: '450 members', icon: '🐱', color: '#FFF3E0' },
    { id: '2', name: 'Mindful', members: '+500 members', icon: '🧘', color: '#E3F2FD' },
    { id: '3', name: 'Runners', members: '336 members', icon: '🏃', color: '#F3E5F5' },
  ];

  const challenges = [
    {
      id: '1',
      title: 'Best Runners! 🏃',
      subtitle: 'Running 10 km/week',
      participants: ['👨', '👩'],
      color: Colors.primary,
    },
    {
      id: '2',
      title: 'Best Bikers! 🚴',
      subtitle: 'Biking 50 km/week',
      participants: ['👨‍🦰', '👩‍🦱'],
      color: Colors.primary,
    },
  ];

  const learningContent = [
    {
      id: '1',
      title: 'Why should we drink water often?',
      image: '💧',
      color: '#E3F2FD',
    },
    {
      id: '2',
      title: 'Benefits of regular walking',
      image: '🚶',
      color: '#F3E5F5',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Explore</Text>
          <TouchableOpacity>
            <Text style={styles.searchIcon}>🔍</Text>
          </TouchableOpacity>
        </View>

        {/* Suggested for You */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Suggested for You</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>VIEW ALL</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {suggestedHabits.map((habit) => (
              <TouchableOpacity 
                key={habit.id} 
                style={[styles.habitCard, { backgroundColor: habit.color }]}
              >
                <Text style={styles.habitIcon}>{habit.icon}</Text>
                <Text style={styles.habitName}>{habit.name}</Text>
                <Text style={styles.habitDuration}>{habit.duration}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Habit Clubs */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Habit Clubs</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>VIEW ALL</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {habitClubs.map((club) => (
              <TouchableOpacity 
                key={club.id} 
                style={[styles.clubCard, { backgroundColor: club.color }]}
              >
                <Text style={styles.clubIcon}>{club.icon}</Text>
                <Text style={styles.clubName}>{club.name}</Text>
                <Text style={styles.clubMembers}>{club.members}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Challenges */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Challenges</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>VIEW ALL</Text>
            </TouchableOpacity>
          </View>
          {challenges.map((challenge) => (
            <TouchableOpacity 
              key={challenge.id} 
              style={[styles.challengeCard, { backgroundColor: challenge.color }]}
            >
              <View style={styles.challengeLeft}>
                <Text style={styles.challengeIcon}>🎯</Text>
                <View>
                  <Text style={styles.challengeTitle}>{challenge.title}</Text>
                  <Text style={styles.challengeSubtitle}>{challenge.subtitle}</Text>
                </View>
              </View>
              <View style={styles.participantAvatars}>
                {challenge.participants.map((avatar, index) => (
                  <View key={index} style={[styles.participantAvatar, index > 0 && { marginLeft: -8 }]}>
                    <Text style={styles.participantText}>{avatar}</Text>
                  </View>
                ))}
                <Text style={styles.participantCount}>+3 friends joined</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Learning */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Learning</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>VIEW ALL</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {learningContent.map((content) => (
              <TouchableOpacity 
                key={content.id} 
                style={[styles.learningCard, { backgroundColor: content.color }]}
              >
                <View style={styles.learningImageContainer}>
                  <Text style={styles.learningImage}>{content.image}</Text>
                </View>
                <View style={styles.learningInfo}>
                  <Text style={styles.learningIcon}>📖</Text>
                  <Text style={styles.learningTitle}>{content.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity 
        style={styles.fab}
        onPress={() => router.push('/create-habit')}
      >
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundLight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.textDark,
  },
  searchIcon: {
    fontSize: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textDark,
  },
  viewAll: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: '600',
  },
  habitCard: {
    width: 120,
    padding: 16,
    borderRadius: 16,
    marginLeft: 20,
  },
  habitIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  habitName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 4,
  },
  habitDuration: {
    fontSize: 12,
    color: Colors.textGray,
  },
  clubCard: {
    width: 140,
    padding: 16,
    borderRadius: 16,
    marginLeft: 20,
  },
  clubIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  clubName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 4,
  },
  clubMembers: {
    fontSize: 12,
    color: Colors.textGray,
  },
  challengeCard: {
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
  },
  challengeLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  challengeIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  challengeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white,
    marginBottom: 4,
  },
  challengeSubtitle: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  participantAvatars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  participantAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  participantText: {
    fontSize: 16,
  },
  participantCount: {
    fontSize: 12,
    color: Colors.white,
    marginLeft: 12,
  },
  learningCard: {
    width: 200,
    borderRadius: 16,
    marginLeft: 20,
    overflow: 'hidden',
  },
  learningImageContainer: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  learningImage: {
    fontSize: 48,
  },
  learningInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: Colors.white,
  },
  learningIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  learningTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textDark,
    flex: 1,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fabIcon: {
    fontSize: 32,
    color: Colors.white,
    fontWeight: '300',
  },
});