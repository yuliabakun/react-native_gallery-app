interface UserProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface UserProfileLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
}

interface UserProfile {
  id: string;
  username: string;
  name: string;
  portfolio_url: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  instagram_username: string;
  twitter_username: string;
  profile_image: UserProfileImage;
  links: UserProfileLinks;
}

interface PhotoCollection {
  id: number;
  title: string;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  cover_photo: any;
  user: any;
}

interface PhotoUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

interface PhotoLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface UnsplashPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  user: UserProfile;
  current_user_collections: PhotoCollection[];
  urls: PhotoUrls;
  links: PhotoLinks;
}
