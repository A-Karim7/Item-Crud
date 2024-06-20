// src/components/ItemList.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { useGetItemsQuery, useAddItemMutation, useUpdateItemMutation, useDeleteItemMutation } from '../services/apiSlice';

const ItemList = () => {
    const { data: items, error, isLoading } = useGetItemsQuery();
    const [addItem] = useAddItemMutation();
    const [updateItem] = useUpdateItemMutation();
    const [deleteItem] = useDeleteItemMutation();

    const getNextItemName = () => {
        if (!items || items.length === 0) {
            return 'Item 1';
        }
        const itemNumbers = items.map(item => {
            const match = item.name.match(/Item (\d+)/);
            return match ? parseInt(match[1], 10) : 0;
        });
        const maxNumber = Math.max(...itemNumbers);
        return `Item ${maxNumber + 1}`;
    };

    const handleAddItem = () => {
        const newItemName = getNextItemName();
        addItem({ name: newItemName });
    };

    if (isLoading) return <Text>Loading...</Text>;
    if (error) return <Text>Error loading items</Text>;

    return (
        <View>
            <Button title="Add Item" onPress={handleAddItem} />
            <FlatList
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Button title="Update" onPress={() => updateItem({ id: item.id, name: 'Updated Item' })} />
                        <Button title="Delete" onPress={() => deleteItem(item.id)} />
                    </View>
                )}
            />
        </View>
    );
};

export default ItemList;
