import BenchmarkCard from "@/@modules/section-overview/BenchmarkCard";
import CurrentIndexCard from "@/@modules/section-overview/CurrentIndexCard";
import ScoreCard from "@/@modules/section-overview/ScoreCard";
import SectionTitle from "@/@modules/section-overview/SectionTitle";
import StatusBar from "@/@modules/section-overview/StatusBar";
import GeometricPattern from "@/@shared/components/GeometricPattern";
import Button from "@/@shared/ui/Button";
import Container from "@/@shared/ui/Container";
import { useGetOverviewQuery } from "@/api-services/overview.service";
import { useLoadingSuccessAndError } from "@/hooks/useLoadingSuccessAndError";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const {
    data,
    isLoading,
    isError: error,
    isSuccess,
    refetch
  } = useGetOverviewQuery("");

  useLoadingSuccessAndError({
    error: error,
    errorMessage: "Something went wrong while fetching overview",
    loading: isLoading,
    loadingMessage: "Fetching Overview",
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
            <div className="mb-16">
              <div className="inline-block bg-slate-900 text-slate-50 px-6 py-2 font-black tracking-widest text-xs mb-6 transform -skew-x-12">
                <span className="inline-block transform skew-x-12">
                  EXECUTIVE REPORT
                </span>
              </div>

              <SectionTitle title="Strategy In Action" />

              <StatusBar status={data.status} />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-24">
                <CurrentIndexCard value={data.currentIndex} />

                <BenchmarkCard
                  diff={data.benchmark.diff}
                  metric={data.benchmark.metric}
                />
              </div>

              <div className="flex items-center justify-center">
                <ScoreCard score={data.score} />
              </div>

              <div className="my-20">
                <Link href={"/deep-dive"}>
                  <Button
                    title="Detailed Analysis"
                    size="large"
                    className="w-[100%]"
                    endIcon={<ArrowRight size={40} strokeWidth={4} />}
                  />
                </Link>
              </div>
            </div>
          </>
        )}
      </Container>
    </div>
  );
}

const overview = {
  status: "average",
  currentIndex: 40,
  benchmark: {
    diff: 34,
    metric: "Below Benchmark",
  },
  score: 50,
};
