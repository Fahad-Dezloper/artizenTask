"use client"

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { x: "5k", value: 20 },
  { x: "10k", value: 45 },
  { x: "15k", value: 64.3664 },
  { x: "20k", value: 48 },
  { x: "25k", value: 52 },
  { x: "30k", value: 45 },
  { x: "35k", value: 55 },
]

export default function SalesChart() {
  return (
    <Card className="w-full font-primary">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 font-primary sm:flex-row">
        <div className="grid flex-1 gap-1 text-center text-[1.5rem] font-bold sm:text-left">
          <CardTitle>Revenue</CardTitle>
        </div>
        <Select>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="By weeks" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              By weeks
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              By months
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <hr />
      <CardContent>
        <div className="h-[300px] w-full mt-6">
          <ChartContainer
            config={{
              value: {
                label: "Value",
                color: "hsl(var(--primary))",
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-value)" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="var(--color-value)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="x"
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                  stroke="hsl(var(--muted-foreground))"
                />
                <YAxis
                  tickFormatter={(value) => `${value}%`}
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                  stroke="hsl(var(--muted-foreground))"
                />
                <ChartTooltip
                  content={<ChartTooltipContent formatter={(value: number) => [`${value.toFixed(4)}%`, "Value"]} />}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="var(--color-value)"
                  strokeWidth={2}
                  fill="url(#colorValue)"
                  dot={false}
                  activeDot={{
                    r: 4,
                    fill: "var(--color-value)",
                    stroke: "hsl(var(--background))",
                    strokeWidth: 2,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}

