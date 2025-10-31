import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Clock, Shield, AlertTriangle, Smartphone } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const screenTimeData = [
  { day: "Thứ Hai", hours: 3.5 },
  { day: "Thứ Ba", hours: 4.2 },
  { day: "Thứ Tư", hours: 2.8 },
  { day: "Thứ Năm", hours: 5.1 },
  { day: "Thứ Sáu", hours: 4.5 },
  { day: "Thứ Bảy", hours: 6.2 },
  { day: "Chủ Nhật", hours: 5.8 },
];

const blockedCategories = [
  { category: "Mạng xã hội", count: 45 },
  { category: "Trò chơi", count: 32 },
  { category: "Người lớn", count: 12 },
  { category: "Bạo lực", count: 8 },
];

const recentAlerts = [
  { time: "2 phút trước", message: "Việc mở TikTok trên máy tính bảng Android bị chặn", severity: "warning" },
  { time: "15 phút trước", message: "Thời gian sử dụng màn hình đã đạt giới hạn trên iPhone", severity: "info" },
  { time: "1 giờ trước", message: "Nội dung không phù hợp đã bị chặn trên Chrome", severity: "error" },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Tổng quan</h1>
          <p className="mt-2 text-muted-foreground">Theo dõi hoạt động số và trạng thái bảo vệ của con</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6 transition-all hover:shadow-elevated">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Tổng thời gian sử dụng màn hình</p>
                <p className="mt-1 text-2xl font-bold text-foreground">32.1 tiếng</p>
                <p className="text-xs text-muted-foreground">Tuần này</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-all hover:shadow-elevated">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Trang web bị chặn</p>
                <p className="mt-1 text-2xl font-bold text-foreground">97</p>
                <p className="text-xs text-muted-foreground">Tuần này</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-all hover:shadow-elevated">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Cảnh báo hôm nay</p>
                <p className="mt-1 text-2xl font-bold text-foreground">3</p>
                <p className="text-xs text-muted-foreground">Cần quan tâm</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-all hover:shadow-elevated">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <Smartphone className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Thiết bị đã kết nối</p>
                <p className="mt-1 text-2xl font-bold text-foreground">2</p>
                <p className="text-xs text-muted-foreground">Tất cả đã được bảo vệ</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground">Thời gian sử dụng màn hình tuần này</h3>
            <div className="mt-6 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={screenTimeData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="day" className="text-xs text-muted-foreground" />
                  <YAxis
                    className="text-xs text-muted-foreground"
                    label={{
                      value: "Số giờ",
                      angle: -90,
                      position: "insideLeft",
                      fill: "hsl(var(--muted-foreground))",
                      fontSize: 12,
                    }}
                  />
                  <Tooltip
                    formatter={(value) => [`${value} tiếng`, "Số giờ"]}
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="hours"
                    name="Số giờ"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--primary))", r: 4 }}
                  />
                </LineChart>

              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground">Nội dung bị chặn theo danh mục</h3>
            <div className="mt-6 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={blockedCategories}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="category" className="text-xs text-muted-foreground" />
                  <YAxis className="text-xs text-muted-foreground" />
                  <Tooltip
                    formatter={(value) => [`${value} lần`, "Lượt chặn nội dung"]}
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
          <h3 className="text-lg font-semibold text-foreground">Cảnh báo hoạt động gần đây</h3>
          <div className="mt-6 space-y-4">
            {recentAlerts.map((alert, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-lg border border-border p-4 transition-all hover:shadow-card"
              >
                <AlertTriangle className={`h-5 w-5 ${alert.severity === 'error' ? 'text-destructive' :
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
