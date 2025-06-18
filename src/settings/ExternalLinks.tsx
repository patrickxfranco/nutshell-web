import type { ReactElement } from 'react';

import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { FaDiscord, FaSteam } from 'react-icons/fa';

export interface ExternalLinkProps {
  title: string;
  url: string;
  icon: ReactElement;
}

export const links: ExternalLinkProps[] = [
  { title: 'Email', url: 'mailto:patrickxfranco@gmail.com', icon: <Mail /> },
  { title: 'GitHub', url: 'https://github.com/patrickxfranco', icon: <Github /> },
  { title: 'LinkedIn', url: 'https://www.linkedin.com/in/patrickxfranco/', icon: <Linkedin /> },
  { title: 'Discord', url: 'https://discord.com/invite/GDEhCs2tv2', icon: <FaDiscord /> },
  { title: 'Instagram', url: 'https://www.instagram.com/patrickxfranco/', icon: <Instagram /> },
  { title: 'Steam', url: 'https://steamcommunity.com/id/patrickxfranco/', icon: <FaSteam /> },
];
