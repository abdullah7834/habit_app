import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CreateHabitScreen() {
  const [habitName, setHabitName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('🚶');
  const [selectedColor, setSelectedColor] = useState('#FF6B35');
  const [goal, setGoal] = useState('1');
  const [frequency, setFrequency] = useState('Daily');
  const [reminderEnabled, setReminderEnabled] = useState(false);
  const [habitType, setHabitType] = useState('Build');
  const router = useRouter();

  const icons = ['🚶', '💧', '📚', '🏃', '🧘', '🎯', '💪', '🌱'];
  const colors = [
    { name: 'Orange', value: '#FF6B35' },
    { name: 'Blue', value: '#4F46E5' },
    { name: 'Green', value: '#10B981' },
    { name: 'Purple', value: '#8B5CF6' },
    { name: 'Pink', value: '#EC4899' },
    { name: 'Yellow', value: '#F59E0B' },
  ];

  const handleAddHabit = () => {
    // Add habit logic here
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create Custom Habit</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Name Input */}
        <View style={styles.section}>
          <Text style={styles.label}>NAME</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter habit name"
            value={habitName}
            onChangeText={setHabitName}
          />
        </View>

        {/* Icon and Color */}
        <View style={styles.section}>
          <Text style={styles.label}>ICON AND COLOR</Text>
          
          <View style={styles.iconColorRow}>
            <View style={styles.iconSelector}>
              <View style={styles.iconPreview}>
                <Text style={styles.iconPreviewText}>{selectedIcon}</Text>
              </View>
              <Text style={styles.iconLabel}>Walking</Text>
            </View>

            <View style={styles.colorSelector}>
              <View style={[styles.colorPreview, { backgroundColor: selectedColor }]} />
              <Text style={styles.colorLabel}>Orange</Text>
            </View>
          </View>

          {/* Icon Grid */}
          <View style={styles.iconGrid}>
            {icons.map((icon, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.iconOption,
                  selectedIcon === icon && styles.iconOptionSelected
                ]}
                onPress={() => setSelectedIcon(icon)}
              >
                <Text style={styles.iconOptionText}>{icon}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Color Grid */}
          <View style={styles.colorGrid}>
            {colors.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.colorOption,
                  { backgroundColor: color.value },
                  selectedColor === color.value && styles.colorOptionSelected
                ]}
                onPress={() => setSelectedColor(color.value)}
              />
            ))}
          </View>
        </View>

        {/* Goal */}
        <View style={styles.section}>
          <Text style={styles.label}>GOAL</Text>
          <View style={styles.goalRow}>
            <TextInput
              style={styles.goalInput}
              value={goal}
              onChangeText={setGoal}
              keyboardType="numeric"
            />
            <Text style={styles.goalUnit}>times</Text>
            <TouchableOpacity>
              <Text style={styles.editIcon}>✏️</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.goalSubtext}>or times per day</Text>
          
          <View style={styles.frequencyButtons}>
            <TouchableOpacity 
              style={[styles.frequencyButton, frequency === 'Daily' && styles.frequencyButtonActive]}
              onPress={() => setFrequency('Daily')}
            >
              <Text style={[styles.frequencyText, frequency === 'Daily' && styles.frequencyTextActive]}>
                Daily
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.frequencyButton, frequency === 'Every day' && styles.frequencyButtonActive]}
              onPress={() => setFrequency('Every day')}
            >
              <Text style={[styles.frequencyText, frequency === 'Every day' && styles.frequencyTextActive]}>
                Every day
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Reminder */}
        <View style={styles.section}>
          <Text style={styles.label}>REMINDER</Text>
          <View style={styles.reminderRow}>
            <Text style={styles.reminderText}>Remember to set off time for a workout session</Text>
            <Switch
              value={reminderEnabled}
              onValueChange={setReminderEnabled}
              trackColor={{ false: '#D1D5DB', true: '#10B981' }}
              thumbColor="#fff"
            />
          </View>
          {reminderEnabled && (
            <View style={styles.timeRow}>
              <Text style={styles.timeText}>⏰ 09:30</Text>
              <Text style={styles.timeFrequency}>Every day</Text>
            </View>
          )}
          <TouchableOpacity style={styles.addReminderButton}>
            <Text style={styles.addReminderText}>Add Reminder</Text>
          </TouchableOpacity>
        </View>

        {/* Habit Type */}
        <View style={styles.section}>
          <Text style={styles.label}>HABIT TYPE</Text>
          <View style={styles.habitTypeButtons}>
            <TouchableOpacity 
              style={[styles.habitTypeButton, habitType === 'Build' && styles.habitTypeButtonActive]}
              onPress={() => setHabitType('Build')}
            >
              <Text style={[styles.habitTypeText, habitType === 'Build' && styles.habitTypeTextActive]}>
                Build
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.habitTypeButton, habitType === 'Quit' && styles.habitTypeButtonActive]}
              onPress={() => setHabitType('Quit')}
            >
              <Text style={[styles.habitTypeText, habitType === 'Quit' && styles.habitTypeTextActive]}>
                Quit
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Add Habit Button */}
        <TouchableOpacity style={styles.addButton} onPress={handleAddHabit}>
          <Text style={styles.addButtonText}>Add Habit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  backButton: {
    fontSize: 24,
    color: '#1F2937',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9CA3AF',
    marginBottom: 12,
  },
  input: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    padding: 12,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
  },
  iconColorRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  iconSelector: {
    flex: 1,
    marginRight: 12,
  },
  iconPreview: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  iconPreviewText: {
    fontSize: 32,
  },
  iconLabel: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  colorSelector: {
    flex: 1,
  },
  colorPreview: {
    height: 64,
    borderRadius: 12,
    marginBottom: 8,
  },
  colorLabel: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  iconOption: {
    width: '12.5%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 8,
  },
  iconOptionSelected: {
    backgroundColor: '#EEF2FF',
  },
  iconOptionText: {
    fontSize: 24,
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    marginBottom: 12,
  },
  colorOptionSelected: {
    borderWidth: 3,
    borderColor: '#1F2937',
  },
  goalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  goalInput: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1F2937',
    marginRight: 8,
  },
  goalUnit: {
    fontSize: 16,
    color: '#6B7280',
    flex: 1,
  },
  editIcon: {
    fontSize: 20,
  },
  goalSubtext: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 16,
  },
  frequencyButtons: {
    flexDirection: 'row',
  },
  frequencyButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    marginRight: 12,
  },
  frequencyButtonActive: {
    backgroundColor: '#4F46E5',
  },
  frequencyText: {
    fontSize: 14,
    color: '#6B7280',
  },
  frequencyTextActive: {
    color: '#fff',
  },
  reminderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  reminderText: {
    fontSize: 14,
    color: '#6B7280',
    flex: 1,
    marginRight: 12,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  timeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginRight: 12,
  },
  timeFrequency: {
    fontSize: 14,
    color: '#6B7280',
  },
  addReminderButton: {
    padding: 12,
    alignItems: 'center',
  },
  addReminderText: {
    fontSize: 14,
    color: '#4F46E5',
    fontWeight: '600',
  },
  habitTypeButtons: {
    flexDirection: 'row',
  },
  habitTypeButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    marginRight: 12,
  },
  habitTypeButtonActive: {
    backgroundColor: '#4F46E5',
  },
  habitTypeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6B7280',
  },
  habitTypeTextActive: {
    color: '#fff',
  },
  addButton: {
    backgroundColor: '#4F46E5',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});