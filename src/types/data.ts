export interface SpecialtyGroup {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  items: string[];
}

export interface AvantApresItem {
  id: string;
  title: string;
  category: 'visage' | 'silhouette' | 'poitrine';
  beforeUrl: string;
  afterUrl: string;
  timing?: string;
  description?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  imageUrl: string;
  youtubeUrl: string;
  tag?: string;
}

export interface ActualiteItem {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  articleUrl: string;
  excerpt: string;
  isArabic?: boolean;
}

export interface QRItem {
  id: string;
  question: string;
  answer: string;
}

export type PageRoute = '/' | '/specialites' | '/avant-apres' | '/questions-reponses' | '/videotheque' | '/actualites' | '/contact';
