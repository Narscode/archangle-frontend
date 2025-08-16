import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line
} from 'recharts';


interface BarConfig {
    key: string;
    color: string;
    name?: string;
}

interface CustomizableBarChartProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any[];
    xAxisKey?: string | null;
    bars?: BarConfig[];
    width?: string | number;
    height?: number;
    margin?: { top: number; right: number; left: number; bottom: number };
    barSize?: number;
    showGrid?: boolean;
    showTooltip?: boolean;
    showLegend?: boolean;
    gridStroke?: string;
    padding?: { left: number; right: number };
}

export function CustomizableBarChart({
    data = [],
    xAxisKey = null,
    bars = [],
    width = "100%",
    height = 300,
    margin = { top: 5, right: 30, left: 20, bottom: 5 },
    barSize = 20,
    showGrid = true,
    showTooltip = true,
    showLegend = true,
    gridStroke = "3 3",
    padding = { left: 30, right: 30 },
}: CustomizableBarChartProps) {
    const getXAxisKey = () => {
        if (xAxisKey) return xAxisKey;
        if (!data || data.length === 0) return 'name';

        const firstItem = data[0];
        const stringKeys = Object.keys(firstItem).filter(key =>
            typeof firstItem[key] === 'string'
        );

        const priorityKeys = ['name', 'date', 'category', 'label', 'id'];
        for (const key of priorityKeys) {
            if (stringKeys.includes(key)) return key;
        }

        return stringKeys[0] || 'name';
    };

    const getBars = () => {
        if (bars && bars.length > 0) return bars;
        if (!data || data.length === 0) return [];

        const firstItem = data[0];
        const numericKeys = Object.keys(firstItem).filter(key =>
            typeof firstItem[key] === 'number'
        );

        const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7c7c', '#8dd1e1'];

        return numericKeys.map((key, index) => ({
            key,
            color: colors[index % colors.length],
            name: key.charAt(0).toUpperCase() + key.slice(1)
        }));
    };

    const xKey = getXAxisKey();
    const barConfigs = getBars();

    if (!data || data.length === 0) {
        return (
            <div className="flex items-center justify-center h-64 text-gray-500">
                No data available
            </div>
        );
    }

    return (
        <ResponsiveContainer width={width} height={height}>
            <BarChart
                data={data}
                margin={margin}
                barSize={barSize}
            >
                <XAxis
                    dataKey={xKey}
                    scale="point"
                    padding={padding}
                />
                <YAxis />
                {showTooltip && <Tooltip />}
                {showLegend && barConfigs.length > 1 && <Legend />}
                {showGrid && <CartesianGrid strokeDasharray={gridStroke} />}

                {barConfigs.map((barConfig, index) => (
                    <Bar
                        key={index}
                        dataKey={barConfig.key}
                        fill={barConfig.color}
                        name={barConfig.name}
                    />
                ))}
            </BarChart>
        </ResponsiveContainer>
    );
}

interface LineConfig {
    key: string;
    color: string;
    name?: string;
}

interface CustomizableLineChartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any[];
  xAxisKey?: string | null;
  lines?: LineConfig[];
  width?: string | number;
  height?: number;
  margin?: { top: number; right: number; left: number; bottom: number };
  lineSize?: number;
  showGrid?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  gridStroke?: string;
  padding?: { left: number; right: number };
}

export function CustomizableLineChart({
  data = [],
  xAxisKey = null,
  lines = [],
  width = "100%",
  height = 300,
  margin = { top: 5, right: 30, left: 20, bottom: 5 },
  lineSize = 2,
  showGrid = true,
  showTooltip = true,
  showLegend = true,
  gridStroke = "3 3",
  padding = { left: 30, right: 30 },
}: CustomizableLineChartProps) {
  const getXAxisKey = () => {
    if (xAxisKey) return xAxisKey;
    if (!data || data.length === 0) return "name";

    const firstItem = data[0];
    const stringKeys = Object.keys(firstItem).filter(
      (key) => typeof firstItem[key] === "string"
    );

    const priorityKeys = ["name", "date", "category", "label", "id"];
    for (const key of priorityKeys) {
      if (stringKeys.includes(key)) return key;
    }

    return stringKeys[0] || "name";
  };

  const getLines = () => {
    if (lines && lines.length > 0) return lines;
    if (!data || data.length === 0) return [];

    const firstItem = data[0];
    const numericKeys = Object.keys(firstItem).filter(
      (key) => typeof firstItem[key] === "number"
    );

    const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7c7c", "#8dd1e1"];

    return numericKeys.map((key, index) => ({
      key,
      color: colors[index % colors.length],
      name: key.charAt(0).toUpperCase() + key.slice(1),
    }));
  };

  const xKey = getXAxisKey();
  const lineConfigs = getLines();

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        No data available
      </div>
    );
  }

  // Custom Legend
  const renderCustomLegend = () => {
    return (
      <div className="flex flex-wrap gap-4 p-2">
        {/* Legend untuk X axis */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gray-400" />
          <span className="text-sm text-gray-700">X: {xKey}</span>
        </div>
        {/* Legend untuk setiap line (Y axis) */}
        {lineConfigs.map((line) => (
          <div key={line.key} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: line.color }}
            />
            <span className="text-sm text-gray-700">{line.name}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <ResponsiveContainer width={width} height={height}>
      <LineChart data={data} margin={margin}>
        <XAxis dataKey={xKey} scale="point" padding={padding} />
        <YAxis />
        {showTooltip && <Tooltip />}
        {showGrid && <CartesianGrid strokeDasharray={gridStroke} />}
        {showLegend && (
          <Legend
            verticalAlign="top"
            align="center"
            content={renderCustomLegend}
          />
        )}

        {lineConfigs.map((lineConfig, index) => (
          <Line
            type="monotone"
            key={index}
            dataKey={lineConfig.key}
            stroke={lineConfig.color}
            name={lineConfig.name}
            strokeWidth={lineSize}
            dot={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}