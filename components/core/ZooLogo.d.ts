/** The Zoo mark from the press kit.
export interface ZooLogoProps {
  /** Rendered square size in px. Nav/footer use 22; hero lockups 80. */
  size?: number;
  /** white on dark surfaces (default), black on light, inherit to take currentColor. */
  variant?: 'white' | 'black' | 'inherit';
  title?: string;
}
export function ZooLogo(props: ZooLogoProps): JSX.Element;
export interface ZooWordmarkProps extends ZooLogoProps { label?: string }
export function ZooWordmark(props: ZooWordmarkProps): JSX.Element;
