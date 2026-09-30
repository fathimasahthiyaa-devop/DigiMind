import React from "react";

export function LinkedInLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#0A66C2" />
      <path
        d="M6.5 9.5H9.5V17.5H6.5V9.5ZM8 8.2C7.06 8.2 6.3 7.44 6.3 6.5C6.3 5.56 7.06 4.8 8 4.8C8.94 4.8 9.7 5.56 9.7 6.5C9.7 7.44 8.94 8.2 8 8.2Z"
        fill="white"
      />
      <path
        d="M11 9.5H13.8V10.6C14.2 9.9 15.1 9.3 16.3 9.3C18.6 9.3 19.5 10.8 19.5 13V17.5H16.5V13.5C16.5 12.3 16.2 11.5 15 11.5C13.8 11.5 13.5 12.4 13.5 13.5V17.5H10.5V9.5H11Z"
        fill="white"
      />
    </svg>
  );
}

export function CourseraLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#0056D2" />
      <path
        d="M12 5.5C8.41 5.5 5.5 8.41 5.5 12C5.5 15.59 8.41 18.5 12 18.5C14.88 18.5 17.3 16.63 18.15 14H15.82C15.15 15.35 13.69 16.3 12 16.3C9.62 16.3 7.7 14.38 7.7 12C7.7 9.62 9.62 7.7 12 7.7C13.69 7.7 15.15 8.65 15.82 10H18.15C17.3 7.37 14.88 5.5 12 5.5Z"
        fill="white"
      />
      <circle cx="16" cy="12" r="1.5" fill="#2A73E8" />
    </svg>
  );
}

export function CanvaLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="canvaGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C4CC" />
          <stop offset="100%" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#canvaGrad)" />
      <path
        d="M14.5 7.5C13.1 7.5 12.1 8.3 11.6 9.4C10.7 8.3 9.4 7.6 7.9 7.6C5.5 7.6 3.8 9.6 3.8 12.2C3.8 15.4 6.2 17.5 9.3 17.5C11.5 17.5 13.1 16.4 13.8 15.1C14.4 16.5 15.8 17.4 17.5 17.4C19.7 17.4 21.2 15.8 21.2 13.6C21.2 10.2 18.2 7.5 14.5 7.5ZM8.8 15.5C7.2 15.5 5.8 14.2 5.8 12.2C5.8 10.6 6.8 9.4 8.2 9.4C9.7 9.4 10.9 10.6 11.2 12.6C10.8 14.3 9.9 15.5 8.8 15.5ZM16.8 15.5C15.8 15.5 14.9 14.7 14.6 13.4C15.1 11.8 16.1 9.5 17.5 9.5C18.6 9.5 19.3 10.4 19.3 11.8C19.3 14 18.2 15.5 16.8 15.5Z"
        fill="white"
      />
    </svg>
  );
}

export function GitHubLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#181717" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4C7.58 4 4 7.58 4 12C4 15.54 6.29 18.53 9.47 19.59C9.87 19.66 10.02 19.42 10.02 19.21C10.02 19.02 10.01 18.39 10.01 17.72C8 18.09 7.46 17.27 7.3 16.82C7.21 16.59 6.82 15.88 6.48 15.69C6.2 15.54 5.8 15.17 6.47 15.16C7.1 15.15 7.55 15.74 7.7 15.98C8.42 17.2 9.58 16.86 10.04 16.65C10.11 16.13 10.32 15.78 10.55 15.58C8.75 15.38 6.86 14.68 6.86 11.58C6.86 10.7 7.18 9.97 7.7 9.4C7.62 9.2 7.34 8.37 7.78 7.26C7.78 7.26 8.46 7.05 10.01 8.1C10.66 7.92 11.34 7.83 12.02 7.83C12.7 7.83 13.38 7.92 14.03 8.1C15.58 7.04 16.26 7.26 16.26 7.26C16.7 8.37 16.42 9.2 16.34 9.4C16.86 9.97 17.18 10.69 17.18 11.58C17.18 14.7 15.28 15.38 13.48 15.58C13.78 15.84 14.04 16.35 14.04 17.14C14.04 18.27 14.03 19.18 14.03 19.21C14.03 19.42 14.18 19.67 14.58 19.59C17.71 18.53 20 15.53 20 12C20 7.58 16.42 4 12 4Z"
        fill="white"
      />
    </svg>
  );
}

export function AutoDeskLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#0696D7" />
      <path
        d="M17.8 17.5L14.2 6.5H9.8L6.2 17.5H8.7L9.6 14.6H14.4L15.3 17.5H17.8ZM10.3 12.4L12 7.3L13.7 12.4H10.3Z"
        fill="white"
      />
    </svg>
  );
}

export function AzureLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#0078D4" />
      <path
        d="M13.2 5.5L7.5 13.5L11.5 15.5L6.5 18.5H17.5L13.2 5.5Z"
        fill="white"
        opacity="0.9"
      />
      <path d="M12.5 13L15.5 18.5H7.5L12.5 13Z" fill="#50E6FF" opacity="0.8" />
    </svg>
  );
}

export function ChatGPTLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#10A37F" />
      <path
        d="M18.2 10.3C18 9.5 17.4 8.8 16.6 8.5C16.8 7.3 16.2 6.1 15.1 5.5C14 4.9 12.7 5.1 11.9 5.9C11.3 5.4 10.4 5.2 9.6 5.5C8.6 5.8 7.8 6.6 7.6 7.6C6.6 8 5.9 9 6 10.1C5.5 10.8 5.5 11.8 5.9 12.6C5.7 13.4 6 14.3 6.6 14.9C6.4 16.1 7.2 17.2 8.4 17.6C9.4 18 10.6 17.7 11.3 17C12 17.5 13 17.6 13.8 17.2C14.7 16.8 15.3 16 15.4 15C16.4 14.5 17 13.4 16.8 12.3C17.3 11.6 17.4 10.8 18.2 10.3ZM12 13.5C11.2 13.5 10.5 12.8 10.5 12C10.5 11.2 11.2 10.5 12 10.5C12.8 10.5 13.5 11.2 13.5 12C13.5 12.8 12.8 13.5 12 13.5Z"
        fill="white"
      />
    </svg>
  );
}

export function JetBrainsLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#000000" />
      <path d="M5 5H13V13H5V5Z" fill="#F9566A" />
      <path d="M11 11H19V19H11V11Z" fill="#FFC800" />
      <rect x="7" y="15" width="6" height="2" fill="white" />
    </svg>
  );
}

export function AdobeLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#FA0F00" />
      <path
        d="M14.5 5.5H19.5V18.5L14.5 5.5ZM9.5 5.5H4.5V18.5L9.5 5.5ZM12 11.8L14.4 18.5H12.6L11.8 16.2H9.8L12 11.8Z"
        fill="white"
      />
    </svg>
  );
}

export function SpotifyLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#1ED760" />
      <path
        d="M16.5 16.2C16.3 16.5 15.9 16.6 15.6 16.4C13.1 14.9 9.9 14.5 6.4 15.3C6 15.4 5.7 15.1 5.6 14.8C5.5 14.4 5.8 14.1 6.1 14C10 13.1 13.6 13.5 16.3 15.2C16.6 15.4 16.7 15.8 16.5 16.2ZM17.6 13.5C17.3 13.9 16.8 14 16.4 13.8C13.6 12.1 9.4 11.6 6.1 12.6C5.7 12.7 5.2 12.5 5.1 12C5 11.6 5.2 11.1 5.7 11C9.5 9.8 14.1 10.4 17.3 12.3C17.7 12.5 17.8 13.1 17.6 13.5ZM17.7 10.7C14.4 8.7 8.9 8.5 5.7 9.5C5.1 9.7 4.5 9.3 4.3 8.7C4.1 8.1 4.5 7.5 5.1 7.3C8.8 6.2 14.9 6.4 18.7 8.7C19.3 9 19.5 9.8 19.1 10.3C18.8 10.9 18.2 11 17.7 10.7Z"
        fill="white"
      />
    </svg>
  );
}

export function YouTubeLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#FF0000" />
      <path
        d="M17.6 8.5C17.4 7.7 16.8 7.1 16 6.9C14.6 6.5 12 6.5 12 6.5C12 6.5 9.4 6.5 8 6.9C7.2 7.1 6.6 7.7 6.4 8.5C6 9.9 6 12 6 12C6 12 6 14.1 6.4 15.5C6.6 16.3 7.2 16.9 8 17.1C9.4 17.5 12 17.5 12 17.5C12 17.5 14.6 17.5 16 17.1C16.8 16.9 17.4 16.3 17.6 15.5C18 14.1 18 12 18 12C18 12 18 9.9 17.6 8.5ZM10.5 14.3V9.7L14.5 12L10.5 14.3Z"
        fill="white"
      />
    </svg>
  );
}

export function NetflixLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#000000" />
      <path
        d="M7 6H9.5V18H7V6ZM14.5 6H17V18H14.5V6Z"
        fill="#B81D24"
      />
      <path
        d="M7 6H9.5L17 18H14.5L7 6Z"
        fill="#E50914"
      />
    </svg>
  );
}

export function getProductLogo(productId: string, className = "w-7 h-7") {
  switch (productId) {
    case "linkedin-premium":
      return <LinkedInLogo className={className} />;
    case "coursera-plus":
      return <CourseraLogo className={className} />;
    case "canva-pro":
      return <CanvaLogo className={className} />;
    case "github-student-pack":
      return <GitHubLogo className={className} />;
    case "autodesk":
      return <AutoDeskLogo className={className} />;
    case "azure-portal":
      return <AzureLogo className={className} />;
    case "chatgpt-plus":
      return <ChatGPTLogo className={className} />;
    case "jetbrains-pack":
      return <JetBrainsLogo className={className} />;
    case "adobe-creative-cloud":
      return <AdobeLogo className={className} />;
    case "spotify-premium":
      return <SpotifyLogo className={className} />;
    case "youtube-premium":
      return <YouTubeLogo className={className} />;
    case "netflix-uhd":
      return <NetflixLogo className={className} />;
    default:
      return null;
  }
}
