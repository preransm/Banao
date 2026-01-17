import { Users, Building2, Globe, Mail, Loader2, AlertCircle } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import { useUsers } from "@/hooks/useUsers";

const Dashboard = () => {
  const { data: users, isLoading, error } = useUsers();

  // Derive stats from users data
  const totalUsers = users?.length || 0;
  const companies = new Set(users?.map((u) => u.company.name)).size;
  const cities = new Set(users?.map((u) => u.address.city)).size;
  const domains = new Set(users?.map((u) => u.email.split("@")[1])).size;

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex h-[60vh] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout>
        <div className="flex h-[60vh] flex-col items-center justify-center gap-4">
          <AlertCircle className="h-12 w-12 text-destructive" />
          <p className="text-lg text-muted-foreground">Failed to load dashboard data</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold sm:text-3xl">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your users.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value={totalUsers}
          change="+12%"
          changeType="positive"
          icon={<Users className="h-5 w-5 text-primary" />}
        />
        <StatCard
          title="Companies"
          value={companies}
          change="+3"
          changeType="positive"
          icon={<Building2 className="h-5 w-5 text-primary" />}
        />
        <StatCard
          title="Cities"
          value={cities}
          change="+2"
          changeType="positive"
          icon={<Globe className="h-5 w-5 text-primary" />}
        />
        <StatCard
          title="Email Domains"
          value={domains}
          changeType="neutral"
          icon={<Mail className="h-5 w-5 text-primary" />}
        />
      </div>

      {/* Recent Users */}
      <div className="glass-card rounded-xl p-6">
        <h2 className="mb-4 text-lg font-semibold">Recent Users</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border text-left text-sm text-muted-foreground">
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Email</th>
                <th className="hidden pb-3 font-medium sm:table-cell">Company</th>
                <th className="hidden pb-3 font-medium md:table-cell">City</th>
              </tr>
            </thead>
            <tbody>
              {users?.slice(0, 5).map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-border/50 last:border-0"
                >
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-semibold text-primary-foreground">
                        {user.name.charAt(0)}
                      </div>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-muted-foreground">
                    {user.email}
                  </td>
                  <td className="hidden py-4 text-sm text-muted-foreground sm:table-cell">
                    {user.company.name}
                  </td>
                  <td className="hidden py-4 text-sm text-muted-foreground md:table-cell">
                    {user.address.city}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
