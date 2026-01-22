import { Colors } from '@/constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LeaderboardScreen() {
  const [activeTab, setActiveTab] = useState('Weekly');

  const topThree = [
    { rank: 2, name: 'Hilary K.', points: 1223, avatar: '👩' },
    { rank: 1, name: 'Mert Kahveci', points: 1452, avatar: '👨', isWinner: true },
    { rank: 3, name: 'Oliver D.', points: 996, avatar: '👨‍🦰' },
  ];

  const otherPlayers = [
    { rank: 4, name: 'Jennings Stalker', points: 873, avatar: '👨‍💼' },
    { rank: 5, name: 'Scotty Trevias', points: 846, avatar: '👨‍🎓' },
    { rank: 6, name: 'Amelina Aguila', points: 773, avatar: '👩‍🦱' },
    { rank: 7, name: 'Kelly Chriscione', points: 698, avatar: '👩‍💻' },
    { rank: 8, name: 'Layla Schupbach', points: 654, avatar: '👩‍🎨' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[Colors.primary, Colors.primaryLight]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.4 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity>
              <Text style={styles.backButton}>←</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Leaderboard</Text>
            <View style={{ width: 40 }} />
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

          {/* Top 3 Podium */}
          <View style={styles.podium}>
            {/* 2nd Place */}
            <View style={[styles.podiumItem, styles.secondPlace]}>
              <View style={styles.avatarContainer}>
                <View style={[styles.avatar, styles.avatarSecond]}>
                  <Text style={styles.avatarText}>{topThree[0].avatar}</Text>
                </View>
                <View style={[styles.rankBadge, styles.rankBadgeSecond]}>
                  <Text style={styles.rankText}>2nd</Text>
                </View>
              </View>
              <Text style={styles.playerName}>{topThree[0].name}</Text>
              <View style={styles.pointsBadge}>
                <Text style={styles.pointsText}>🌟 {topThree[0].points}</Text>
              </View>
            </View>

            {/* 1st Place */}
            <View style={[styles.podiumItem, styles.firstPlace]}>
              <Text style={styles.crown}>👑</Text>
              <View style={styles.avatarContainer}>
                <View style={[styles.avatar, styles.avatarFirst]}>
                  <Text style={styles.avatarText}>{topThree[1].avatar}</Text>
                </View>
                <View style={[styles.rankBadge, styles.rankBadgeFirst]}>
                  <Text style={styles.rankText}>1st</Text>
                </View>
              </View>
              <Text style={styles.playerName}>{topThree[1].name}</Text>
              <View style={[styles.pointsBadge, styles.pointsBadgeFirst]}>
                <Text style={styles.pointsText}>🌟 {topThree[1].points}</Text>
              </View>
            </View>

            {/* 3rd Place */}
            <View style={[styles.podiumItem, styles.thirdPlace]}>
              <View style={styles.avatarContainer}>
                <View style={[styles.avatar, styles.avatarThird]}>
                  <Text style={styles.avatarText}>{topThree[2].avatar}</Text>
                </View>
                <View style={[styles.rankBadge, styles.rankBadgeThird]}>
                  <Text style={styles.rankText}>3rd</Text>
                </View>
              </View>
              <Text style={styles.playerName}>{topThree[2].name}</Text>
              <View style={styles.pointsBadge}>
                <Text style={styles.pointsText}>🌟 {topThree[2].points}</Text>
              </View>
            </View>
          </View>

          {/* Other Players List */}
          <View style={styles.playersList}>
            {otherPlayers.map((player) => (
              <View key={player.rank} style={styles.playerCard}>
                <View style={styles.playerLeft}>
                  <Text style={styles.playerRank}>{player.rank}</Text>
                  <View style={styles.playerAvatar}>
                    <Text style={styles.playerAvatarText}>{player.avatar}</Text>
                  </View>
                  <View>
                    <Text style={styles.playerCardName}>{player.name}</Text>
                    <Text style={styles.playerPoints}>{player.points} points</Text>
                  </View>
                </View>
                <View style={styles.playerBadge}>
                  <Text style={styles.playerBadgeText}>🏆</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    fontSize: 28,
    color: Colors.white,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 6,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  tabActive: {
    backgroundColor: Colors.white,
  },
  tabText: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: '500',
  },
  tabTextActive: {
    color: Colors.primary,
  },
  podium: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  podiumItem: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  firstPlace: {
    marginBottom: 20,
  },
  secondPlace: {
    marginBottom: 10,
  },
  thirdPlace: {
    marginBottom: 0,
  },
  crown: {
    fontSize: 32,
    marginBottom: 8,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
  },
  avatarFirst: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: '#FFD700',
    backgroundColor: Colors.white,
  },
  avatarSecond: {
    borderColor: '#C0C0C0',
    backgroundColor: Colors.white,
  },
  avatarThird: {
    borderColor: '#CD7F32',
    backgroundColor: Colors.white,
  },
  avatarText: {
    fontSize: 36,
  },
  rankBadge: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  rankBadgeFirst: {
    backgroundColor: '#FFD700',
  },
  rankBadgeSecond: {
    backgroundColor: '#C0C0C0',
  },
  rankBadgeThird: {
    backgroundColor: '#CD7F32',
  },
  rankText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.white,
  },
  playerName: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.white,
    marginBottom: 6,
  },
  pointsBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  pointsBadgeFirst: {
    backgroundColor: Colors.white,
  },
  pointsText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textDark,
  },
  playersList: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    minHeight: 400,
  },
  playerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.backgroundLight,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  playerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  playerRank: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textDark,
    width: 30,
  },
  playerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  playerAvatarText: {
    fontSize: 20,
  },
  playerCardName: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 2,
  },
  playerPoints: {
    fontSize: 12,
    color: Colors.textGray,
  },
  playerBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerBadgeText: {
    fontSize: 16,
  },
});