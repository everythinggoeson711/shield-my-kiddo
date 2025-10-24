import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const [parentName, setParentName] = useState("John Smith");
  const [parentEmail, setParentEmail] = useState("john.smith@example.com");
  const [childName, setChildName] = useState("Emma");
  const [safeMode, setSafeMode] = useState(true);
  const [screenTimeLimit, setScreenTimeLimit] = useState([4]);
  const [contentFilterLevel, setContentFilterLevel] = useState([2]);
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings saved successfully!",
      description: "Your preferences have been updated",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="mt-2 text-muted-foreground">Manage your account and protection preferences</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Account Information */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground">Account Information</h2>
            <div className="mt-6 space-y-4">
              <div>
                <Label htmlFor="parentName">Parent Name</Label>
                <Input
                  id="parentName"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="parentEmail">Email Address</Label>
                <Input
                  id="parentEmail"
                  type="email"
                  value={parentEmail}
                  onChange={(e) => setParentEmail(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="childName">Child Name</Label>
                <Input
                  id="childName"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          </Card>

          {/* Protection Settings */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-foreground">Protection Settings</h2>
            <div className="mt-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="safeMode">Safe Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Enhanced protection with stricter filtering
                  </p>
                </div>
                <Switch
                  id="safeMode"
                  checked={safeMode}
                  onCheckedChange={setSafeMode}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Daily Screen Time Limit</Label>
                  <span className="text-sm font-medium text-foreground">{screenTimeLimit[0]} hours</span>
                </div>
                <Slider
                  value={screenTimeLimit}
                  onValueChange={setScreenTimeLimit}
                  max={12}
                  min={1}
                  step={1}
                  className="mt-2"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Content Filter Level</Label>
                  <span className="text-sm font-medium text-foreground">
                    {contentFilterLevel[0] === 1 ? "Low" : contentFilterLevel[0] === 2 ? "Medium" : "High"}
                  </span>
                </div>
                <Slider
                  value={contentFilterLevel}
                  onValueChange={setContentFilterLevel}
                  max={3}
                  min={1}
                  step={1}
                  className="mt-2"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button onClick={handleSave} size="lg" className="gap-2">
            Save Settings
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
