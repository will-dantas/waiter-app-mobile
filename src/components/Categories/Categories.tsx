import { useState } from 'react';
import { FlatList } from 'react-native';
import { Text } from '../Text';
import { ICategoryProps } from './Categories.interface';
import { Category, Icon } from './Categories.styles';

export const Categories = ({ categories }: ICategoryProps) => {
  const [selectCategory, setSelectCategory] = useState('');

  const handleSelectCategory = (categoryId: string) => {
    const category = selectCategory === categoryId ? '' : categoryId;

    setSelectCategory(category);
  };

  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={(category) => category._id}
      renderItem={({ item: category }) => {
        const isSelected = selectCategory === category._id;
        return (
          <Category onPress={() => handleSelectCategory(category._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
            </Icon>
            <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>
              {category.name}
            </Text>
          </Category>
        );
      }}
    />
  );
};
