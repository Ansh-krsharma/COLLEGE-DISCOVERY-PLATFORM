export interface College {
  id: string;
  name: string;
  location?: string;
  type?: string;
  imageUrl?: string;
  fees: number;
  rating: number;

  overview?: string;
  established?: number;

  averagePackage: number;
  highestPackage: number;
  courses?: Course[];
  reviews?: Review[];
  students?: Student[];
}

export interface Course {
  id?: string;
  name: string;
  duration: string;
}

export interface Review {
  id?: string;
  title: string;
  comment: string;
  rating: number;
}

export interface Student {
  id?: string;
  name: string;
}
