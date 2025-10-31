import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (email && password) {
        // Mock JWT token
        const mockToken = "mock-jwt-token-" + Date.now();
        localStorage.setItem("token", mockToken);
        
        toast({
          title: "Đăng nhập thành công",
          description: "Chào mừng trở lại Parental Shield",
        });
        
        navigate("/dashboard");
      } else {
        toast({
          title: "Đăng nhập thất bại",
          description: "Vui lòng nhập thông tin đăng nhập hợp lệ",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-card p-10 shadow-elevated">
        <div className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow shadow-lg">
            <Shield className="h-9 w-9 text-primary-foreground" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-foreground">Chào mừng trở lại</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Đăng nhập vào tài khoản Parental Shield của bạn
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="parent@example.com"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="password">Mật khẩu</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-1"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            />
            <Label
              htmlFor="remember"
              className="text-sm font-normal text-muted-foreground"
            >
              Nhớ tôi
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-primary-glow"
            disabled={isLoading}
          >
            {isLoading ? "Đăng nhập..." : "Đăng nhập"}
          </Button>

          <div className="text-center text-sm text-muted-foreground">
            Xác thực phụ huynh an toàn • Trẻ em an toàn 2026
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
