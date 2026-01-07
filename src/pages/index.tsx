import BenchmarkCard from "@/@modules/section-overview/BenchmarkCard";
import CurrentIndexCard from "@/@modules/section-overview/CurrentIndexCard";
import ScoreCard from "@/@modules/section-overview/ScoreCard";
import SectionTitle from "@/@modules/section-overview/SectionTitle";
import StatusBar from "@/@modules/section-overview/StatusBar";
import GeometricPattern from "@/@shared/components/GeometricPattern";
import Button from "@/@shared/ui/Button";
import Container from "@/@shared/ui/Container";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 relative overflow-hidden">
      <GeometricPattern />

      <Container>
        <div className="mb-16">
          <div className="inline-block bg-slate-900 text-slate-50 px-6 py-2 font-black tracking-widest text-xs mb-6 transform -skew-x-12">
            <span className="inline-block transform skew-x-12">
              EXECUTIVE REPORT
            </span>
          </div>

          <SectionTitle title="Strategy In Action" />

          <StatusBar status={"average"} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-24">
            <CurrentIndexCard value={54} />

            <BenchmarkCard diff={34} metric="Below Benchmark" />
          </div>

          <div className="flex items-center justify-center">
            <ScoreCard score={54} />
          </div>

          <div className="my-20">
            <Button
              title="Detailed Analysis"
              size="large"
              className="w-[100%]"
              endIcon={<ArrowRight size={40} strokeWidth={4} />}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
