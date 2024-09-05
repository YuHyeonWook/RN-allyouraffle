import { getPopularRaffleItems } from '@/api/raffleApi';
import RaffleItem from '@/components/RaffleItem';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

type RaffleItem = {
  id: number;
  item: {
    imageUrl: string;
    name: string;
    description: string;
  };
  currentCount: number;
  totalCount: number;
};

const HomeScreen = () => {
  const [raffleItems, setRaffleItems] = useState<RaffleItem[]>([]);

  useEffect(() => {
    getPopularRaffleItems().then((response) => {
      setRaffleItems(response?.data);
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {raffleItems.map((raffleItem) => (
            <RaffleItem key={raffleItem.id} raffleItem={raffleItem} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    padding: 40,
  },
});
