import SentimentDonut from "./SentimentDonut.tsx";
import TimelineChart from "./TimelineChart.tsx";
import PerceptionGauge from "./PerceptionGauge.tsx";

interface Filters {
  fechaInicio: string;
  fechaFin: string;
  prioridad: string;
}

interface DashboardChartsProps {
  filters: Filters;
}

const DashboardCharts = ({ filters }: DashboardChartsProps) => {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        <div className="xl:col-span-3">
          <SentimentDonut filters={filters} />
        </div>

        <div className="xl:col-span-5">
          <TimelineChart filters={filters} />
        </div>

        <div className="xl:col-span-4">
          <PerceptionGauge filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
