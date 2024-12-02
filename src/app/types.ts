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
  companyType: 'company' | 'soleProprietor' | null;
  companyRole: 'employer' | 'hrProvider' | 'administrator' | null;
  contactPerson: string;
  contactPersonPosition: string;
  phone: string;
  email: string;
  password: string;
};
