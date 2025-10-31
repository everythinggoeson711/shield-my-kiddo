import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const activityData = [
  { id: 1, name: "YouTube", category: "Video", timeSpent: "2h 15m", status: "Cho phép" },
  { id: 2, name: "TikTok", category: "Mạng xã hội", timeSpent: "0m", status: "Chặn" },
  { id: 3, name: "Minecraft", category: "Trò chơi", timeSpent: "1h 45m", status: "Cho phép" },
  { id: 4, name: "Instagram", category: "Mạng xã hội", timeSpent: "0m", status: "Chặn" },
  { id: 5, name: "Khan Academy", category: "Giáo dục", timeSpent: "3h 30m", status: "Cho phép" },
  { id: 6, name: "Fortnite", category: "Trò chơi", timeSpent: "0m", status: "Chặn" },
  { id: 7, name: "Google Classroom", category: "Giáo dục", timeSpent: "2h 00m", status: "Cho phép" },
  { id: 8, name: "Snapchat", category: "Mạng xã hội", timeSpent: "0m", status: "Chặn" },
];

const Activity = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredData = activityData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
            <h1 className="text-3xl font-bold text-foreground">Giám sát hoạt động</h1>
            <p className="mt-2 text-muted-foreground">Theo dõi và quản lý việc sử dụng ứng dụng và trang web của con</p>
        </div>

        {/* Filters */}
        <Card className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm ứng dụng hoặc trang web..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            
            <div className="flex gap-3">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-40">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Danh mục" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả danh mục</SelectItem>
                  <SelectItem value="Mạng xã hội">Mạng xã hội</SelectItem>
                  <SelectItem value="Trò chơi">Trò chơi</SelectItem>
                  <SelectItem value="Giáo dục">Giáo dục</SelectItem>
                  <SelectItem value="Video">Video</SelectItem>
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả trạng thái</SelectItem>
                  <SelectItem value="Cho phép">Cho phép</SelectItem>
                  <SelectItem value="Chặn">Chặn</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Activity Table */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border bg-muted/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Tên</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Danh mục</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Thời gian sử dụng</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredData.map((item) => (
                  <tr key={item.id} className="transition-colors hover:bg-muted/50">
                    <td className="px-6 py-4">
                      <span className="font-medium text-foreground">{item.name}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-muted-foreground">{item.category}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-foreground">{item.timeSpent}</span>
                    </td>
                    <td className="px-6 py-4">
                      <Badge
                        variant={item.status === "Cho phép" ? "default" : "destructive"}
                        className={item.status === "Cho phép" ? "bg-secondary" : ""}
                      >
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredData.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">Không tìm thấy hoạt động phù hợp với các bộ lọc</p>
            </div>
          )}
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Activity;
