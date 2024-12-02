export interface User {
  email: string;
  role: string;
  errors?: string[];
}

export interface EmailSendingResult {
  sent: string;
  failed: string[];
}

export interface RegistrationFormData {
  company: string;
  companyType: string;
  companyRole: string;
  contactPerson: string;
  contactPersonPosition: string;
  phone: string;
  email: string;
  password: string;
};
