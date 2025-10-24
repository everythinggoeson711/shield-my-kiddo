import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Clock, Shield, AlertTriangle, Smartphone } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const screenTimeData = [
  { day: "Mon", hours: 3.5 },
  { day: "Tue", hours: 4.2 },
  { day: "Wed", hours: 2.8 },
  { day: "Thu", hours: 5.1 },
  { day: "Fri", hours: 4.5 },
  { day: "Sat", hours: 6.2 },
  { day: "Sun", hours: 5.8 },
];

const blockedCategories = [
  { category: "Social", count: 45 },
  { category: "Gaming", count: 32 },
  { category: "Adult", count: 12 },
  { category: "Violence", count: 8 },
];

const recentAlerts = [
  { time: "2 mins ago", message: "Attempt to open TikTok blocked on Android Tablet", severity: "warning" },
  { time: "15 mins ago", message: "Screen time limit reached on iPhone", severity: "info" },
  { time: "1 hour ago", message: "Inappropriate content blocked on Chrome", severity: "error" },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="mt-2 text-muted-foreground">Monitor your child's digital activity and protection status</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6 transition-all hover:shadow-elevated">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Screen Time</p>
                <p className="mt-1 text-2xl font-bold text-foreground">32.1h</p>
                <p className="text-xs text-muted-foreground">This week</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-all hover:shadow-elevated">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Blocked Websites</p>
                <p className="mt-1 text-2xl font-bold text-foreground">97</p>
                <p className="text-xs text-muted-foreground">This week</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-all hover:shadow-elevated">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Alerts Today</p>
                <p className="mt-1 text-2xl font-bold text-foreground">3</p>
                <p className="text-xs text-muted-foreground">Requires attention</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-all hover:shadow-elevated">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <Smartphone className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Connected Devices</p>
                <p className="mt-1 text-2xl font-bold text-foreground">2</p>
                <p className="text-xs text-muted-foreground">All protected</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground">Screen Time This Week</h3>
            <div className="mt-6 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={screenTimeData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="day" className="text-xs text-muted-foreground" />
                  <YAxis className="text-xs text-muted-foreground" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="hours" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--primary))", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground">Blocked Content by Category</h3>
            <div className="mt-6 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={blockedCategories}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="category" className="text-xs text-muted-foreground" />
                  <YAxis className="text-xs text-muted-foreground" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Bar dataKey="count" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Recent Alerts */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground">Recent Activity Alerts</h3>
          <div className="mt-6 space-y-4">
            {recentAlerts.map((alert, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 rounded-lg border border-border p-4 transition-all hover:shadow-card"
              >
                <AlertTriangle className={`h-5 w-5 ${
                  alert.severity === 'error' ? 'text-destructive' :
                  alert.severity === 'warning' ? 'text-orange-500' :
                  'text-primary'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{alert.message}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
