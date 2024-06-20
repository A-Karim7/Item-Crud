import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { useGetItemsQuery, useAddItemMutation, useUpdateItemMutation, useDeleteItemMutation } from '../services/apiSlice';

const ItemList = () => {
    const { data: items, error, isLoading } = useGetItemsQuery();
    const [addItem] = useAddItemMutation();
    const [updateItem] = useUpdateItemMutation();
    const [deleteItem] = useDeleteItemMutation();
    const [newItem, setNewItem] = useState('');

    const handleAddItem = () => {
        addItem({ name: newItem });
        setNewItem('');
    };

    if (isLoading) return <Text>Loading...</Text>;
    if (error) return <Text>Error loading items</Text>;

    return (
        <View>
            <TextInput
                placeholder="New Item"
                value={newItem}
                onChangeText={setNewItem}
            />
            <Button title="Add Item" onPress={handleAddItem} />
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
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
