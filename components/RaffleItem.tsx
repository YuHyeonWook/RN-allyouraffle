import { styles } from '@/styles/RaffleItem.styles';
import React from 'react';
import { View, Text, Image } from 'react-native';

type RaffleItemProps = {
  raffleItem: {
    id: number;
    item: {
      imageUrl: string;
      name: string;
      description: string;
    };
    currentCount: number;
    totalCount: number;
  };
};

const RaffleItem = ({ raffleItem }: RaffleItemProps) => {
  const percentage = (raffleItem.currentCount / raffleItem.totalCount) * 100;

  return (
    <View key={raffleItem.id} style={styles.itemContainer}>
      <Image source={{ uri: raffleItem.item.imageUrl }} style={styles.image} resizeMode="contain" />
      <Text style={styles.name}>{raffleItem.item.name}</Text>
      <Text style={styles.description}>{raffleItem.item.description}</Text>
      <View style={styles.gaugeContainer}>
        <View style={[styles.gauge, { width: `${percentage}%` }]} />
      </View>
      <Text style={styles.count}>
        {raffleItem.currentCount} / {raffleItem.totalCount} ({percentage.toFixed(2)}%)
      </Text>
    </View>
  );
};

export default RaffleItem;
