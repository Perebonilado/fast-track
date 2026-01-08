import InsightBlock, {
  shapes,
} from "@/@modules/deep-dive-insight/InsightBlock";
import InsightChart from "@/@modules/deep-dive-insight/InsightChart";
import GeometricPattern from "@/@shared/components/GeometricPattern";
import Button from "@/@shared/ui/Button";
import Container from "@/@shared/ui/Container";
import { useGetInsightsQuery } from "@/api-services/insight.service";
import { useLoadingSuccessAndError } from "@/hooks/useLoadingSuccessAndError";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function DeepDive() {
  const {
    data,
    isLoading,
    isError: error,
    isSuccess,
    refetch,
  } = useGetInsightsQuery("");

  useLoadingSuccessAndError({
    error: error,
    errorMessage: "Something went wrong while fetching insights",
    loading: isLoading,
    loadingMessage: "Fetching Insights",
    isSuccess,
  });

  return (
    <div className="min-h-screen bg-slate-50 p-8 relative overflow-hidden">
      <GeometricPattern />
      {!data && !isLoading && (
        <div className="flex items-center justify-center py-10">
          <Button title="Refetch" onClick={refetch} variant="outlined" />
        </div>
      )}
      <Container>
        {data && (
          <>
            <Link href={"/"}>
              <Button
                title="Return"
                size="medium"
                variant="outlined"
                startIcon={<ArrowLeft size={28} strokeWidth={4} />}
              />
            </Link>

            <div className="my-12">
              <div className="inline-block bg-indigo-600 text-slate-50 px-6 py-2 font-black tracking-widest text-xs mb-6 border-4 border-slate-900">
                DEEP ANALYSIS
              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8 max-w-4xl text-slate-900">
                EXECUTION GAPS CREATING STRATEGIC DRIFT
              </h1>
            </div>

            <div className="mb-24">
              {
                <InsightChart
                  data={data.chart}
                  title="TREND VISUALIZATION"
                  startLabel="WEEK 1"
                  endLabel="CURRENT"
                  accentColor="#4f46e5"
                  baseColor="#0f172a"
                  className="bg-amber-300"
                />
              }
            </div>

            <div className="space-y-8 mb-12 flex flex-col gap-10">
              {data.insightBlocks.map((block, idx) => {
                const ShapeIcon = shapes[idx % shapes.length];

                return (
                  <InsightBlock
                    key={idx}
                    title={block.title}
                    description={block.description}
                    value={block.value}
                    trend={block.trend}
                    bgColor={colors[idx % colors.length]}
                    Icon={ShapeIcon}
                    rotate={idx % 2 === 0 ? "right" : "left"}
                  />
                );
              })}
            </div>

            <div className="flex flex-col gap-6"></div>
          </>
        )}
      </Container>
    </div>
  );
}

const data = {
  insightBlocks: [
    {
      title: "Implementation Velocity",
      description: "Key initiatives are 4-6 weeks behind planned milestones",
      value: 42,
      trend: "down",
    },
    {
      title: "Resource Allocation",
      description: "70% of strategic budget deployed to tactical firefighting",
      value: 70,
      trend: "down",
    },
    {
      title: "Cross-functional Alignment",
      description: "Leadership consensus on priorities remains fragmented",
      value: 38,
      trend: "stable",
    },
  ],
  chart: [65, 62, 58, 54, 52, 54, 51, 48],
} as const;

const colors = ["bg-rose-400", "bg-amber-300", "bg-emerald-300"];
