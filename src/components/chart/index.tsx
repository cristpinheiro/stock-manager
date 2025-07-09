"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ShoppingBag } from "lucide-react";

export const description = "A stacked area chart with expand stacking";

const chartData = [
  { month: "January", pioXii: 186, santa: 80, sinodal: 45, total: 311 },
  { month: "February", pioXii: 305, santa: 200, sinodal: 100, total: 605 },
  { month: "March", pioXii: 237, santa: 120, sinodal: 150, total: 607 },
  { month: "April", pioXii: 73, santa: 190, sinodal: 50, total: 313 },
  { month: "May", pioXii: 209, santa: 130, sinodal: 100, total: 439 },
  { month: "June", pioXii: 214, santa: 140, sinodal: 160, total: 514 },
];

const chartConfig = {
  pioXii: {
    label: "Pio XII",
    color: "var(--chart-1)",
  },
  santa: {
    label: "Santa Catarina",
    color: "var(--chart-2)",
  },
  sinodal: {
    label: "Sinodal",
    color: "var(--chart-3)",
  },
  total: {
    label: "Total",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <Card className="w-full md:w-1/2 md:max-w-[600px]">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
            Sales Overview
          </CardTitle>
          <ShoppingBag className="ml-auto w-4 h-4" />
        </div>

        <CardDescription>
          Showing total sales for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="pioXii"
              type="natural"
              fill="var(--color-pioXii)"
              fillOpacity={0.4}
              stroke="var(--color-pioXii)"
              stackId="a"
            />
            <Area
              dataKey="santa"
              type="natural"
              fill="var(--color-santa)"
              fillOpacity={0.4}
              stroke="var(--color-santa)"
              stackId="a"
            />
            <Area
              dataKey="sinodal"
              type="natural"
              fill="var(--color-sinodal)"
              fillOpacity={0.4}
              stroke="var(--color-sinodal)"
              stackId="a"
            />
            <Area
              dataKey="total"
              type="natural"
              fill="var(--color-total)"
              fillOpacity={0.4}
              stroke="var(--color-total)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
