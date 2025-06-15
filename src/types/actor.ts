export interface Actor {
  name: string;
  surname: string;
  artisticName: string;
  avatarUrl: string;
  posterUrl: string;
  gender: Gender;
}

type Gender = 'Male' | 'Female' | 'Another';
