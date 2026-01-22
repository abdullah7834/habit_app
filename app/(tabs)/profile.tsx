import { Colors } from '@/constants/colors';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState('Activity');
  const router = useRouter();

  const activities = [
    { id: '1', title: 'Showing last month activity', points: 0, icon: '📊', color: '#E8F5E9' },
    { id: '2', title: '112 points earned!', points: 112, icon: '⭐', color: '#FFF3E0', trend: 'up' },
    { id: '3', title: '62 points earned!', points: 62, icon: '⭐', color: '#FFF3E0', trend: 'up' },
    { id: '4', title: 'Challenge completed!', subtitle: 'Running, 12 km', points: 0, icon: '🏆', color: '#FFF9C4' },
    { id: '5', title: 'Weekly working streak 4 broken!', points: 0, icon: '💔', color: '#FFEBEE', trend: 'down' },
    { id: '6', title: '36 points earned!', points: 36, icon: '⭐', color: '#FFF3E0', trend: 'up' },
    { id: '7', title: '110 points earned!', points: 110, icon: '⭐', color: '#FFF3E0', trend: 'up' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Your Profile</Text>
          <TouchableOpacity onPress={() => router.push('/settings')}>
            <Text style={styles.settingsIcon}>⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>MK</Text>
              </View>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>🔥 STREAK</Text>
              </View>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Mert Kahveci</Text>
              <Text style={styles.profileHandle}>@mertkahv</Text>
            </View>
          </View>

          {/* Tabs */}
          <View style={styles.tabs}>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'Activity' && styles.tabActive]}
              onPress={() => setActiveTab('Activity')}
            >
              <Text style={[styles.tabText, activeTab === 'Activity' && styles.tabTextActive]}>
                Activity
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'Friends' && styles.tabActive]}
              onPress={() => setActiveTab('Friends')}
            >
              <Text style={[styles.tabText, activeTab === 'Friends' && styles.tabTextActive]}>
                Friends
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'Achievements' && styles.tabActive]}
              onPress={() => setActiveTab('Achievements')}
            >
              <Text style={[styles.tabText, activeTab === 'Achievements' && styles.tabTextActive]}>
                Achievements
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Activity List */}
        {activeTab === 'Activity' && (
          <View style={styles.activityList}>
            {activities.map((activity) => (
              <View key={activity.id} style={[styles.activityCard, { backgroundColor: activity.color }]}>
                <View style={styles.activityLeft}>
                  <Text style={styles.activityIcon}>{activity.icon}</Text>
                  <View style={styles.activityInfo}>
                    <Text style={styles.activityTitle}>{activity.title}</Text>
                    {activity.subtitle && (
                      <Text style={styles.activitySubtitle}>{activity.subtitle}</Text>
                    )}
                  </View>
                </View>
                {activity.trend && (
                  <Text style={styles.trendIcon}>
                    {activity.trend === 'up' ? '↑' : '↓'}
                  </Text>
                )}
              </View>
            ))}
          </View>
        )}
      </ScrollView>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.textDark,
  },
  settingsIcon: {
    fontSize: 24,
  },
  profileCard: {
    backgroundColor: Colors.white,
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
  },
  statusBadge: {
    position: 'absolute',
    bottom: -5,
    right: -10,
    backgroundColor: Colors.warning,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.white,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textDark,
    marginBottom: 4,
  },
  profileHandle: {
    fontSize: 14,
    color: Colors.textGray,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
  },
  tabText: {
    fontSize: 14,
    color: Colors.textGray,
  },
  tabTextActive: {
    color: Colors.primary,
    fontWeight: '600',
  },
  activityList: {
    paddingHorizontal: 20,
  },
  activityCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  activityLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  activityIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  activityInfo: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 2,
  },
  activitySubtitle: {
    fontSize: 12,
    color: Colors.textGray,
  },
  trendIcon: {
    fontSize: 20,
    marginLeft: 8,
  },
});