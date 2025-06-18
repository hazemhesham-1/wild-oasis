import PropTypes from "prop-types";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import {
    AreaChart,
    Area,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import DashboardBox from "./DashboardBox";

const StyledSalesChart = styled(DashboardBox)`
    grid-column: 1 / -1;
    & .recharts-cartesian-grid-horizontal line,
    & .recharts-cartesian-grid-vertical line {
        stroke: var(--color-grey-300);
    }
`;

const SalesChart = ({ bookings, numDays }) => {
    const { isDarkMode } = useDarkMode();

    const allDates = eachDayOfInterval({
        start: subDays(new Date(), numDays - 1),
        end: new Date()
    });

    const data = allDates.map((date) => {
        return {
            label: format(date, "MMM dd"),
            totalSales: bookings.filter((booking) => isSameDay(date, new Date(booking.created_at))).reduce((acc, curr) => acc + curr.total_price, 0),
            extraSales: bookings.filter((booking) => isSameDay(date, new Date(booking.created_at))).reduce((acc, curr) => acc + curr.extra_price, 0),
        };
    });

    const colors = isDarkMode ? {
        totalSales: { stroke: "#4F46E5", fill: "#4F46E5" },
        extraSales: { stroke: "#22C55E", fill: "#22C55E" },
        background: "#18212F",
        text: "#E5E7EB",
    } : {
        totalSales: { stroke: "#4F46E5", fill: "#C7D2FE" },
        extraSales: { stroke: "#16A34A", fill: "#DCFCE7" },
        background: "#FFF",
        text: "#374151",
    };

    return (
        <StyledSalesChart>
            <Heading as="h2">
                Sales from {format(allDates.at(0), "MMM dd yyyy")} &mdash; {format(allDates.at(-1), "MMM dd yyyy")}
            </Heading>
            <ResponsiveContainer height={300} width="100%">
                <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="5"/>
                    <Tooltip
                        contentStyle={{ backgroundColor: colors.background }}
                    />
                    <XAxis
                        dataKey="label"
                        tick={{ fill: colors.text }}
                        tickLine={{ stroke: colors.text }}
                    />
                    <YAxis
                        unit="$"
                        tick={{ fill: colors.text }}
                        tickLine={{ stroke: colors.text }}
                    />
                    <Area
                        dataKey="totalSales"
                        type="monotone"
                        stroke={colors.totalSales.stroke}
                        fill={colors.totalSales.fill}
                        strokeWidth={2}
                        name="Total sales"
                        unit="$"
                    />
                    <Area
                        dataKey="extraSales"
                        type="monotone"
                        stroke={colors.extraSales.stroke}
                        fill={colors.extraSales.fill}
                        strokeWidth={2}
                        name="Extras sales"
                        unit="$"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </StyledSalesChart>
    );
};

SalesChart.propTypes = {
    bookings: PropTypes.array,
    numDays: PropTypes.any,
};

export default SalesChart;