import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Habit {
  id: string;
  name: string;
  icon: string;
  color: string;
  goal: number;
  completed: number;
}

export default function HomeScreen() {
  const [userName, setUserName] = useState('Mert');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showNewHabitModal, setShowNewHabitModal] = useState(false);
  const [habits, setHabits] = useState<Habit[]>([
    { id: '1', name: 'Drink the water', icon: '💧', color: '#E3F2FD', goal: 8, completed: 6 },
    { id: '2', name: 'Walk', icon: '🚶', color: '#FFF3E0', goal: 10000, completed: 7500 },
    { id: '3', name: 'Water Plants', icon: '🌱', color: '#F1F8E9', goal: 1, completed: 0 },
    { id: '4', name: 'Meditate', icon: '🧘', color: '#FCE4EC', goal: 1, completed: 0 },
  ]);
  const router = useRouter();

  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const today = currentDate.getDay();

  const getWeekDates = () => {
    const dates = [];
    const curr = new Date();
    const first = curr.getDate() - curr.getDay();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(curr.setDate(first + i));
      dates.push(date.getDate());
    }
    return dates;
  };

  const weekDates = getWeekDates();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi, {userName} 👋</Text>
            <Text style={styles.subGreeting}>Let's make habits together</Text>
          </View>
          <TouchableOpacity style={styles.notificationIcon}>
            <Text style={styles.notificationDot}>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* Week Calendar */}
        <View style={styles.calendarContainer}>
          <View style={styles.calendarHeader}>
            <Text style={styles.calendarTab}>Today</Text>
            <Text style={styles.calendarTabInactive}>Clubs</Text>
          </View>
          
          <View style={styles.weekDays}>
            {weekDays.map((day, index) => (
              <View 
                key={index} 
                style={[
                  styles.dayContainer,
                  index === today && styles.dayContainerActive
                ]}
              >
                <Text style={[
                  styles.dayNumber,
                  index === today && styles.dayNumberActive
                ]}>
                  {weekDates[index]}
                </Text>
                <Text style={[
                  styles.dayName,
                  index === today && styles.dayNameActive
                ]}>
                  {day}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Goals Card */}
        <View style={styles.goalsCard}>
          <Text style={styles.goalsEmoji}>😊</Text>
          <Text style={styles.goalsText}>Your daily goals almost done! 🔥</Text>
        </View>

        {/* Habits Section */}
        <View style={styles.habitsHeader}>
          <View style={styles.habitsTitle}>
            <Text style={styles.habitsTitleText}>Habits</Text>
            <Text style={styles.habitsTitleIcon}>💎</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>VIEW ALL</Text>
          </TouchableOpacity>
        </View>

        {/* Habits List */}
        {habits.map((habit) => (
          <View key={habit.id} style={styles.habitCard}>
            <View style={styles.habitLeft}>
              <View style={[styles.habitIcon, { backgroundColor: habit.color }]}>
                <Text style={styles.habitEmoji}>{habit.icon}</Text>
              </View>
              <View>
                <Text style={styles.habitName}>{habit.name}</Text>
                <Text style={styles.habitProgress}>
                  {habit.completed}/{habit.goal} {habit.name === 'Walk' ? 'steps' : 'times'}
                </Text>
              </View>
            </View>
            <View style={styles.habitRight}>
              <View style={styles.avatarGroup}>
                <View style={[styles.avatar, { backgroundColor: '#FFB6C1' }]} />
                <View style={[styles.avatar, { backgroundColor: '#B0E0E6', marginLeft: -8 }]} />
                <View style={[styles.avatar, { backgroundColor: '#DDA0DD', marginLeft: -8 }]} />
              </View>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* Add New Habit Button */}
        <TouchableOpacity 
          style={styles.newHabitButton}
          onPress={() => setShowNewHabitModal(true)}
        >
          <Text style={styles.newHabitText}>+ New Good Habit</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* New Habit Modal */}
      <Modal
        visible={showNewHabitModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowNewHabitModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>NEW GOOD HABIT</Text>
            
            <TouchableOpacity 
              style={styles.createCustomButton}
              onPress={() => {
                setShowNewHabitModal(false);
                router.push('/create-habit');
              }}
            >
              <Text style={styles.createCustomText}>Create Custom Habit</Text>
              <Text style={styles.createCustomIcon}>+</Text>
            </TouchableOpacity>

            <Text style={styles.popularTitle}>POPULAR HABITS</Text>
            
            <View style={styles.popularGrid}>
              <View style={[styles.popularCard, { backgroundColor: '#FFE4E1' }]}>
                <Text style={styles.popularEmoji}>🚶</Text>
                <Text style={styles.popularName}>Walk</Text>
                <Text style={styles.popularGoal}>10 km</Text>
              </View>
              
              <View style={[styles.popularCard, { backgroundColor: '#E6E6FA' }]}>
                <Text style={styles.popularEmoji}>🏊</Text>
                <Text style={styles.popularName}>Swim</Text>
                <Text style={styles.popularGoal}>30 min</Text>
              </View>
              
              <View style={[styles.popularCard, { backgroundColor: '#E0F2F1' }]}>
                <Text style={styles.popularEmoji}>📚</Text>
                <Text style={styles.popularName}>Read</Text>
                <Text style={styles.popularGoal}>20 min</Text>
              </View>
            </View>

            <TouchableOpacity 
              style={styles.closeModalButton}
              onPress={() => setShowNewHabitModal(false)}
            >
              <Text style={styles.closeModalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  subGreeting: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationDot: {
    fontSize: 20,
  },
  calendarContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  calendarHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  calendarTab: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4F46E5',
    marginRight: 24,
  },
  calendarTabInactive: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayContainer: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 12,
    minWidth: 40,
  },
  dayContainerActive: {
    backgroundColor: '#4F46E5',
  },
  dayNumber: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  dayNumberActive: {
    color: '#fff',
  },
  dayName: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  dayNameActive: {
    color: '#fff',
  },
  goalsCard: {
    backgroundColor: '#4F46E5',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  goalsEmoji: {
    fontSize: 32,
    marginRight: 12,
  },
  goalsText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    flex: 1,
  },
  habitsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  habitsTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  habitsTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginRight: 8,
  },
  habitsTitleIcon: {
    fontSize: 20,
  },
  viewAllText: {
    fontSize: 12,
    color: '#4F46E5',
    fontWeight: '600',
  },
  habitCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  habitLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  habitIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  habitEmoji: {
    fontSize: 24,
  },
  habitName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  habitProgress: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  habitRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarGroup: {
    flexDirection: 'row',
    marginRight: 12,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#fff',
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 20,
    color: '#6B7280',
  },
  newHabitButton: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderStyle: 'dashed',
  },
  newHabitText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4F46E5',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    minHeight: 400,
  },
  modalTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9CA3AF',
    marginBottom: 16,
  },
  createCustomButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  createCustomText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  createCustomIcon: {
    fontSize: 24,
    color: '#1F2937',
  },
  popularTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9CA3AF',
    marginBottom: 16,
  },
  popularGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  popularCard: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  popularEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  popularName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  popularGoal: {
    fontSize: 12,
    color: '#6B7280',
  },
  closeModalButton: {
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  closeModalText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6B7280',
  },
});
