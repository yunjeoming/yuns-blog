export type Navbar = 'blog' | 'archive' | 'resume';

export interface NavbarProps {
  closeMenu?: () => void;
}