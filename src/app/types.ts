export interface User {
  email: string;
  role: string;
  errors?: string[];
}

export interface EmailSendingResult {
  sent: string;
  failed: string[];
}
