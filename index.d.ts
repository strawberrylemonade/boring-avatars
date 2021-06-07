declare module "@strawberrylemonade/boring-avatars" {
  export interface AvatarProps {
    size?: number | string;
    name?: string;
    variant?: "marble" | "beam" | "pixel" | "sunset" | "ring" | "bauhaus";
    colors?: string[];
  }

  interface AvatarComponent {
    (props: AvatarProps, context?: any): React.ReactElement | null;
  }

  const Avatar: AvatarComponent

  export default Avatar;
}
