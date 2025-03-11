export interface Service {
  id: string;
  title: string;
  titleAr: string;
  price: number;
  description: string;
  descriptionAr: string;
  icon?: string;
}

export interface Language {
  code: string;
  name: string;
  direction: 'ltr' | 'rtl';
}

export interface BookingFormData {
  fullName: string;
  jobTitle: string;
  jobDescription: string;
  passportNumber: string;
  destination: string;
  stayLength: {
    startDate: string;
    endDate: string;
  };
  selectedServices: string[];
  comments?: string;
  passportFiles: FileList | null;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  attachments: FileList | null;
}

export interface SocialLink {
  name: string;
  nameAr: string;
  url: string;
  icon: React.FC<{ className?: string }>;
}