import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <section className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-primary">Grow Smarter 🌱</h2>
        <p className="mt-4 text-lg text-gray-600">
          AI-powered crop recommendations tailored for Nigerian farmers, using
          soil & climate data without IoT sensors.
        </p>
        <Button
          size="lg"
          className="mt-6 bg-primary hover:bg-primary-dark text-white"
        >
          Get Started
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Accurate Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            Uses latest soil, rainfall, and temperature data to suggest the best
            crops for your location.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Nationwide Coverage</CardTitle>
          </CardHeader>
          <CardContent>
            Works across all Nigerian states and LGAs without the need for
            costly IoT devices.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Easy to Use</CardTitle>
          </CardHeader>
          <CardContent>
            Farmers can access via smartphone, web, or USSD — making it truly
            inclusive.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
