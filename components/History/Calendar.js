import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const months = ['January', 'February', 'March', 'April', 
'May', 'June', 'July', 'August', 'September', 'October', 
'November', 'December'];
const numberMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

export default function Calendar() {
    const [activeDate, setActiveDate] = useState(new Date());

    const generateCalendar = () => {
        const year = activeDate.getFullYear();
        const month = activeDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();

        var maxDays = numberMonthDays[month];
        if (month === 1) {
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                maxDays += 1;
            }
        }

        let matrix = [];
        matrix[0] = weekDays;
 
        let counter = 1;
        for (let row = 1; row < 7; row++) {
            matrix[row] = [];
            for (let col = 0; col < 7; col++) {
                matrix[row][col] = -1;
                if (row === 1 && col >= firstDay) {
                // Fill in rows only after the first day of the month
                matrix[row][col] = counter++;
                } else if (row > 1 && counter <= maxDays) {
                // Fill in rows only if the counter's not greater than
                // the number of days in the month
                matrix[row][col] = counter++;
                }
            }
        }
 
        return matrix;
    }

    const matrix = generateCalendar();

    const onPress = (item) => {
        if (!item.match && item != -1) {
            const newActiveDate = new Date (activeDate.setDate(item));
            setActiveDate(newActiveDate);
        }
    };
    
    let rows = [];
    rows = matrix.map((row, rowIndex) => {
    let rowItems = row.map((item, colIndex) => {
        return (
            <Text
                key={item + colIndex}
                style={{
                flex: 1,
                height: 18,
                textAlign: 'center',
                backgroundColor: rowIndex === 0 ? '#ddd' : '#fff',
                color: colIndex === 0 ? '#a00' : '#000',
                fontWeight: item === activeDate.getDate() ? 'bold': 'normal'
                }}
                onPress={() => onPress(item)}
                >
                {item != -1 ? item : ''}
            </Text>
            );
        });
        return (
            <View
            key={row + rowIndex}
            style={{
                flex: 1,
                flexDirection: 'row',
                padding: 15,
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
            {rowItems}
            </View>
        );
    });


    return (
        <View>
            <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>
                {months[activeDate.getMonth()]} &nbsp;
                {activeDate.getFullYear()}
            </Text>
            {rows}
        </View>
    )
}