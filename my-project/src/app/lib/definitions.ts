export type Course = {
    id: string;
    title: string;
    duration: number;
    format: string;
    status: 'pending' | 'progress' | 'finished';
  };
