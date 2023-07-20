import React from 'react'

const clothingItems = ['swimsuit or trunks', 'Jacket, top & jeans', 'Snowboots, coat & pants', 'Cotton or linen clothing', 'Don\t leave the house' ];


const temp = () => {
    if (currentTemp >= 75 && currentTemp <= 100) {
        return clothingItems[0];
    } else if (currentTemp >= 60 && currentTemp <= 74) {
        return clothingItems[3];
    } else if (currentTemp >= 33 && currentTemp <= 59) {
        return clothingItems[1];
    } else if (currentTemp >= 18 && currentTemp <= 32) {
        return clothingItems[2];
    } else {
        return clothingItems[4];
    }
}