import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

const pdata = [
    {
        name: 'MongoDb',
        student: 11,
        fees: 120
    },
    {
        name: 'Javascript',
        student: 15,
        fees: 12
    },
    {
        name: 'PHP',
        student: 5,
        fees: 10
    },
    {
        name: 'Java',
        student: 10,
        fees: 5
    },
    {
        name: 'C#',
        student: 9,
        fees: 4
    },
    {
        name: 'C++',
        student: 10,
        fees: 8
    },
];

function ChartLine({ aspect, legend, xAxis, yAxis }:any) {
    return (
        <ResponsiveContainer aspect={aspect}>
            <LineChart data={pdata}>
                <CartesianGrid />

                {xAxis && <XAxis dataKey="name" interval={'preserveStartEnd'} />}
                {yAxis && <YAxis />}

                {legend &&
                    <Legend />
                }
                <Tooltip />

                <Line dataKey="student"
                    stroke="black" activeDot={{ r: 8 }} />
                <Line dataKey="fees"
                    stroke="red" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default ChartLine;
