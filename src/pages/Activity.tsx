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
  { id: 1, name: "YouTube", category: "Video", timeSpent: "2h 15m", status: "allowed" },
  { id: 2, name: "TikTok", category: "Social", timeSpent: "0m", status: "blocked" },
  { id: 3, name: "Minecraft", category: "Gaming", timeSpent: "1h 45m", status: "allowed" },
  { id: 4, name: "Instagram", category: "Social", timeSpent: "0m", status: "blocked" },
  { id: 5, name: "Khan Academy", category: "Education", timeSpent: "3h 30m", status: "allowed" },
  { id: 6, name: "Fortnite", category: "Gaming", timeSpent: "0m", status: "blocked" },
  { id: 7, name: "Google Classroom", category: "Education", timeSpent: "2h 00m", status: "allowed" },
  { id: 8, name: "Snapchat", category: "Social", timeSpent: "0m", status: "blocked" },
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
          <h1 className="text-3xl font-bold text-foreground">Activity Monitor</h1>
          <p className="mt-2 text-muted-foreground">Track and manage your child's app and website usage</p>
        </div>

        {/* Filters */}
        <Card className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search apps or websites..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            
            <div className="flex gap-3">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-40">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Social">Social</SelectItem>
                  <SelectItem value="Gaming">Gaming</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Video">Video</SelectItem>
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="allowed">Allowed</SelectItem>
                  <SelectItem value="blocked">Blocked</SelectItem>
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
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Time Spent</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
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
                        variant={item.status === "allowed" ? "default" : "destructive"}
                        className={item.status === "allowed" ? "bg-secondary" : ""}
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
              <p className="text-muted-foreground">No activity found matching your filters</p>
            </div>
          )}
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Activity;
