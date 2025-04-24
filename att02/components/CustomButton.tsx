import * as React from 'react';
import { Button as MuiButton, Stack } from '@mui/material';
import { View } from 'react-native';
import { Link } from 'expo-router';  // Importe o Link do expo-router

export default function CustomButton() {
    return (
        
        <View>
            <Stack direction="row" spacing={2}>
                <Link href={'/secondePage'}>
                    <MuiButton variant="contained" href="#contained-buttons">
                        Next Page
                    </MuiButton>
                </Link>
            </Stack>
        </View>
    );
}