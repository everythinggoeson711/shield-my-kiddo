import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Tablet, Plus, Trash2, QrCode } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const mockDevices = [
  { id: 1, child: "Emma", device: "iPhone 13", type: "phone", status: "active", lastSync: "2 mins ago" },
  { id: 2, child: "Emma", device: "iPad Air", type: "tablet", status: "active", lastSync: "15 mins ago" },
];

const Devices = () => {
  const [devices, setDevices] = useState(mockDevices);
  const [showPairDialog, setShowPairDialog] = useState(false);
  const [pairingCode] = useState("PS-9F3A2B");
  const { toast } = useToast();

  const handleUnlink = (id: number) => {
    setDevices(devices.filter(d => d.id !== id));
    toast({
      title: "Device unlinked",
      description: "The device has been successfully removed",
    });
  };

  const handleGeneratePairing = () => {
    setShowPairDialog(true);
    toast({
      title: "Pairing code generated",
      description: "Share this code with your child's device",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Device Management</h1>
            <p className="mt-2 text-muted-foreground">Connect and manage your child's devices</p>
          </div>
          
          <Dialog open={showPairDialog} onOpenChange={setShowPairDialog}>
            <DialogTrigger asChild>
              <Button onClick={handleGeneratePairing} className="gap-2">
                <Plus className="h-4 w-4" />
                Add New Device
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Pair New Device</DialogTitle>
                <DialogDescription>
                  Scan this QR code or enter the pairing code in your child's Parental Shield app
                </DialogDescription>
              </DialogHeader>
              
              <div className="flex flex-col items-center gap-6 py-6">
                <div className="flex h-48 w-48 items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted">
                  <QrCode className="h-32 w-32 text-muted-foreground" />
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Or enter this code manually:</p>
                  <div className="mt-2 rounded-lg bg-accent px-6 py-3">
                    <p className="text-2xl font-bold tracking-wider text-accent-foreground">{pairingCode}</p>
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">Code expires in 10 minutes</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Devices List */}
        <div className="grid gap-6">
          {devices.map((device) => (
            <Card key={device.id} className="p-6 transition-all hover:shadow-elevated">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    {device.type === "phone" ? (
                      <Smartphone className="h-6 w-6 text-primary" />
                    ) : (
                      <Tablet className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground">{device.device}</h3>
                    <p className="text-sm text-muted-foreground">Owner: {device.child}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <Badge variant="default" className="bg-secondary">
                      {device.status}
                    </Badge>
                    <p className="mt-1 text-xs text-muted-foreground">Last sync: {device.lastSync}</p>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleUnlink(device.id)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}

          {devices.length === 0 && (
            <Card className="p-12 text-center">
              <Smartphone className="mx-auto h-16 w-16 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">No devices connected</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Click "Add New Device" to pair your child's device
              </p>
            </Card>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Devices;
