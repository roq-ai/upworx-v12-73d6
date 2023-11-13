interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner'],
  tenantName: 'Company',
  applicationName: 'Upworx V12',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage jobs', 'Manage users', 'Manage company'],
  getQuoteUrl: 'https://app.roq.ai/proposal/4fdba41d-8cf8-439b-b79a-691c8d1d30b1',
};
