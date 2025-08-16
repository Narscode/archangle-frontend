import { CustomizableLineChart } from "../customizeable-chart";

export function Hydra() {
    const data2 = [
        { date: 'date-1', amount: 2400 },
        { date: 'date-2', amount: 4200 },
        { date: 'date-3', amount: 2012 },
        { date: 'date-4', amount: 1023 },
        { date: 'date-5', amount: 2012 },
        { date: 'date-6', amount: 1023 },
    ];
    return (
        <div>
            <div>Hallo Hydra</div>
            <div className="p-10">
                <CustomizableLineChart
                    data={data2}
                    showLegend={false}
                />
            </div>
        </div>
    );
}