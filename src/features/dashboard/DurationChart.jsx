import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import Heading from "../../ui/Heading";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { useDarkMode } from "../../contexts/DarkModeContext";

const ChartBox = styled.div`
    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);
    padding: 24px 12px;

    @media ${device.md} {
        grid-column: 1 / span 2;
    };
    @media ${device.lg} {
        grid-column: 3 / span 2;
        padding: 24px 18px;
    };
`;

const ChartWrapper = styled.div`
    height: 280px;
    font-size: 16px;

    & .recharts-pie-label-text {
        font-weight: 600;
    };

    @media ${device.lg} {
        height: 320px;
        font-size: 20px;
    };
`;

const initialDataLight = [
    {
        duration: "1 night",
        value: 0,
        color: "#EF4444"
    },
    {
        duration: "2 nights",
        value: 0,
        color: "#F97316"
    },
    {
        duration: "3 nights",
        value: 0,
        color: "#EAB308"
    },
    {
        duration: "4-5 nights",
        value: 0,
        color: "#84CC16"
    },
    {
        duration: "6-7 nights",
        value: 0,
        color: "#22C55E"
    },
    {
        duration: "8-14 nights",
        value: 0,
        color: "#14B8A6"
    },
    {
        duration: "15-21 nights",
        value: 0,
        color: "#3B82F6"
    },
    {
        duration: "21+ nights",
        value: 0,
        color: "#A855F7"
    }
];

const initialDataDark = [
    {
        duration: "1 night",
        value: 0,
        color: "#B91C1C"
    },
    {
        duration: "2 nights",
        value: 0,
        color: "#C2410C"
    },
    {
        duration: "3 nights",
        value: 0,
        color: "#A16207"
    },
    {
        duration: "4-5 nights",
        value: 0,
        color: "#4D7C0F"
    },
    {
        duration: "6-7 nights",
        value: 0,
        color: "#15803D"
    },
    {
        duration: "8-14 nights",
        value: 0,
        color: "#0F766E"
    },
    {
        duration: "15-21 nights",
        value: 0,
        color: "#1D4ED8"
    },
    {
        duration: "21+ nights",
        value: 0,
        color: "#7E22CE"
    }
];

function prepareData(initialData, stays) {
    function increment(arr, field) {
        return arr.map((obj) =>
            obj.duration === field ? {...obj, value: obj.value + 1} : obj
        );
    }

    const data = stays.reduce((arr, curr) => {
        const numNights = curr.num_nights;
        if(numNights == 1) {
            return increment(arr, "1 night");
        }
        else if(numNights == 2) {
            return increment(arr, "2 nights");
        }
        else if(numNights == 3) {
            return increment(arr, "3 nights");
        }
        else if(numNights == 4 || numNights == 5) {
            return increment(arr, "4-5 nights");
        }
        else if(numNights == 6 || numNights == 7) {
            return increment(arr, "6-7 nights");
        }
        else if(numNights >= 8 && numNights <= 14) {
            return increment(arr, "8-14 nights");
        }
        else if(numNights >= 15 && numNights <= 21) {
            return increment(arr, "15-21 nights");
        }
        else if(numNights > 21) {
            return increment(arr, "21+ nights");
        }
        return arr;
    }, initialData).filter((obj) => obj.value > 0);

    return data;
}

const DurationChart = ({ confirmedStays }) => {
    const { isDarkMode } = useDarkMode();
    const initialData = !isDarkMode ? initialDataLight : initialDataDark;
    const data = prepareData(initialData, confirmedStays);

    return (
        <ChartBox>
            <Heading as="h2">Stay duration summary</Heading>
            <ChartWrapper>
                <ResponsiveContainer height="100%" width="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            nameKey="duration"
                            dataKey="value"
                            cx="45%"
                            cy="50%"
                            innerRadius={85}
                            outerRadius={110}
                            paddingAngle={3}
                        >
                            {data.map((entry) =>
                                <Cell
                                    key={entry.duration}
                                    stroke={entry.color}
                                    fill={entry.color}
                                />
                            )}
                        </Pie>
                        <Tooltip/>
                        <Legend
                            align="right"
                            verticalAlign="middle"
                            layout="vertical"
                            iconType="circle"
                            iconSize={15}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </ChartWrapper>
        </ChartBox>
    );
};

DurationChart.propTypes = {
    confirmedStays: PropTypes.array,
};

export default DurationChart;