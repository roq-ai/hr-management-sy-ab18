const mapping: Record<string, string> = {
  'employee-data': 'employee_data',
  'hr-managers': 'hr_manager',
  payrolls: 'payroll',
  'system-administrators': 'system_administrator',
  teams: 'team',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
