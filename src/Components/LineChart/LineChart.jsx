import React from 'react';
import { LineChart as LChart, Line , XAxis, YAxis} from 'recharts';
const LineChart = () => {
    const studentsData = [
        { id: 1, name: "Alice Johnson", mathMarks: 78, physicsMarks: 85, chemistryMarks: 90 },
        { id: 2, name: "Bob Smith", mathMarks: 85, physicsMarks: 82, chemistryMarks: 88 },
        { id: 3, name: "Charlie Brown", mathMarks: 92, physicsMarks: 88, chemistryMarks: 94 },
        { id: 4, name: "David Williams", mathMarks: 56, physicsMarks: 60, chemistryMarks: 55 },
        { id: 5, name: "Emma Davis", mathMarks: 88, physicsMarks: 91, chemistryMarks: 85 },
        { id: 6, name: "Frank Miller", mathMarks: 74, physicsMarks: 70, chemistryMarks: 72 },
        { id: 7, name: "Grace Taylor", mathMarks: 95, physicsMarks: 90, chemistryMarks: 97 },
        { id: 8, name: "Henry Wilson", mathMarks: 64, physicsMarks: 70, chemistryMarks: 68 },
        { id: 9, name: "Ivy Moore", mathMarks: 81, physicsMarks: 79, chemistryMarks: 82 },
        { id: 10, name: "Jack Anderson", mathMarks: 77, physicsMarks: 80, chemistryMarks: 78 }
      ];
      
      
    return (
        <div>
            <LChart width={800} height={400} data={studentsData}>
            <XAxis dataKey="name" />
            <YAxis></YAxis>
                <Line dataKey="mathMarks" stroke='red'></Line>
                <Line dataKey="physicsMarks" stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;