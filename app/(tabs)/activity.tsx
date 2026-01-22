import { Colors } from '@/constants/colors';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ActivityScreen() {
  const [activeTab, setActiveTab] = useState('Weekly');
  const [selectedHabit, setSelectedHabit] = useState('All Habits');

  // Simple chart data
  const chartData = [
    { day: 'Mon', value: 20, height: 40 },
    { day: 'Tue', value: 45, height: 90 },
    { day: 'Wed', value: 28, height: 56 },
    { day: 'Thu', value: 80, height: 160 },
    { day: 'Fri', value: 99, height: 198 },
    { day: 'Sat', value: 43, height: 86 },
    { day: 'Sun', value: 50, height: 100 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Activity</Text>
          <TouchableOpacity>
            <Text style={styles.filterIcon}>⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Time Period Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'Daily' && styles.tabActive]}
            onPress={() => setActiveTab('Daily')}
          >
            <Text style={[styles.tabText, activeTab === 'Daily' && styles.tabTextActive]}>
              Daily
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'Weekly' && styles.tabActive]}
            onPress={() => setActiveTab('Weekly')}
          >
            <Text style={[styles.tabText, activeTab === 'Weekly' && styles.tabTextActive]}>
              Weekly
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'Monthly' && styles.tabActive]}
            onPress={() => setActiveTab('Monthly')}
          >
            <Text style={[styles.tabText, activeTab === 'Monthly' && styles.tabTextActive]}>
              Monthly
            </Text>
          </TouchableOpacity>
        </View>

        {/* Date Range */}
        <View style={styles.dateRange}>
          <TouchableOpacity>
            <Text style={styles.arrow}>‹</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.dateTitle}>This week</Text>
            <Text style={styles.dateSubtitle}>May 28 - Jun 3</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Card */}
        <View style={styles.statsCard}>
          <View style={styles.habitSelector}>
            <Text style={styles.habitIcon}>📊</Text>
            <Text style={styles.habitName}>{selectedHabit}</Text>
            <Text style={styles.dropdownIcon}>▼</Text>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>SUCCESS RATE</Text>
              <Text style={styles.statValue}>%98</Text>
              <Text style={styles.statSubtext}>POINTS EARNED</Text>
              <Text style={styles.statPoints}>🌟 244</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>COMPLETED</Text>
              <Text style={styles.statValue}>244</Text>
              <Text style={styles.statSubtext}>LONGEST STREAK DAY</Text>
              <Text style={styles.statStreak}>🔥 22</Text>
            </View>
          </View>

          <View style={styles.streakInfo}>
            <View style={styles.streakItem}>
              <Text style={styles.streakLabel}>CURRENT STREAK</Text>
              <Text style={styles.streakValue}>4</Text>
            </View>
            <View style={styles.streakItem}>
              <Text style={styles.streakLabel}>BEST STREAK</Text>
              <Text style={styles.streakValue}>2</Text>
            </View>
          </View>
        </View>

        {/* Chart Card */}
        <View style={styles.chartCard}>
          <View style={styles.chartHeader}>
            <View>
              <Text style={styles.chartTitle}>Habits</Text>
              <Text style={styles.chartSubtitle}>Completed this week</Text>
            </View>
            <View style={styles.chartBadge}>
              <Text style={styles.chartBadgeText}>🔥 Burn!</Text>
              <Text style={styles.chartBadgeSubtext}>22 habits</Text>
            </View>
          </View>

          {/* Simple Bar Chart */}
          <View style={styles.chart}>
            <View style={styles.chartBars}>
              {chartData.map((item, index) => (
                <View key={index} style={styles.barContainer}>
                  <View style={styles.barWrapper}>
                    <View style={[styles.bar, { height: item.height }]} />
                  </View>
                  <Text style={styles.barLabel}>{item.day}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Mood Tracker */}
        <View style={styles.moodCard}>
          <View style={styles.moodHeader}>
            <Text style={styles.moodEmoji}>😊</Text>
            <View>
              <Text style={styles.moodTitle}>Happy</Text>
              <Text style={styles.moodSubtitle}>Avg. Mood</Text>
            </View>
          </View>

          <View style={styles.moodDays}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <View key={day} style={styles.moodDay}>
                <Text style={styles.moodDayEmoji}>
                  {index === 2 || index === 5 ? '😊' : index === 4 ? '😍' : '😐'}
                </Text>
                <Text style={styles.moodDayText}>{day}</Text>
              </View>
            ))}
          </View>
        </View>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.textDark,
  },
  filterIcon: {
    fontSize: 24,
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: Colors.white,
  },
  tabActive: {
    backgroundColor: Colors.primary,
  },
  tabText: {
    fontSize: 14,
    color: Colors.textGray,
    fontWeight: '500',
  },
  tabTextActive: {
    color: Colors.white,
  },
  dateRange: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  arrow: {
    fontSize: 24,
    color: Colors.textDark,
  },
  dateTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
    textAlign: 'center',
  },
  dateSubtitle: {
    fontSize: 12,
    color: Colors.textGray,
    textAlign: 'center',
  },
  statsCard: {
    backgroundColor: Colors.white,
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  habitSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  habitIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  habitName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
    flex: 1,
  },
  dropdownIcon: {
    fontSize: 12,
    color: Colors.textGray,
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  statItem: {
    flex: 1,
  },
  statDivider: {
    width: 1,
    backgroundColor: Colors.border,
    marginHorizontal: 16,
  },
  statLabel: {
    fontSize: 10,
    color: Colors.textGray,
    marginBottom: 4,
    letterSpacing: 1,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.success,
    marginBottom: 12,
  },
  statSubtext: {
    fontSize: 10,
    color: Colors.textGray,
    marginBottom: 4,
    letterSpacing: 1,
  },
  statPoints: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
  },
  statStreak: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
  },
  streakInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  streakItem: {
    alignItems: 'center',
  },
  streakLabel: {
    fontSize: 10,
    color: Colors.textGray,
    letterSpacing: 1,
    marginBottom: 4,
  },
  streakValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textDark,
  },
  chartCard: {
    backgroundColor: Colors.white,
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
  },
  chartSubtitle: {
    fontSize: 12,
    color: Colors.textGray,
  },
  chartBadge: {
    backgroundColor: Colors.backgroundLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  chartBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textDark,
  },
  chartBadgeSubtext: {
    fontSize: 10,
    color: Colors.textGray,
  },
  chart: {
    marginVertical: 16,
  },
  chartBars: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 200,
  },
  barContainer: {
    flex: 1,
    alignItems: 'center',
  },
  barWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    paddingHorizontal: 4,
  },
  bar: {
    backgroundColor: Colors.primary,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    minHeight: 20,
  },
  barLabel: {
    fontSize: 10,
    color: Colors.textGray,
    marginTop: 8,
  },
  moodCard: {
    backgroundColor: Colors.white,
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  moodHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  moodEmoji: {
    fontSize: 32,
    marginRight: 12,
  },
  moodTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
  },
  moodSubtitle: {
    fontSize: 12,
    color: Colors.textGray,
  },
  moodDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moodDay: {
    alignItems: 'center',
  },
  moodDayEmoji: {
    fontSize: 24,
    marginBottom: 4,
  },
  moodDayText: {
    fontSize: 10,
    color: Colors.textGray,
  },
});