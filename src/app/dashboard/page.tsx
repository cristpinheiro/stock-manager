import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, Users } from "lucide-react";

export default function Dashboard() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              Total sales
            </CardTitle>
            <DollarSign className="ml-auto w-4 h-4" />
          </div>

          <CardDescription>
            Total sales made in the current month.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base sm:text-lg font-bold">R$ 40.000</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              New customers
            </CardTitle>
            <Users className="ml-auto w-4 h-4" />
          </div>

          <CardDescription>
            New customers registered in the current month.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-base sm:text-lg font-bold">120</p>
        </CardContent>
      </Card>
    </section>
  );
}
