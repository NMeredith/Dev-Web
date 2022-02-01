//TO DO : date, style
export interface Titre{
  id?: string;
  title?: string;
  description?: string;
  album?: string;
  artist?: string;
  duration?: string;
  picture?: string | ArrayBuffer | null;
  style?: string[];
  chefId?: string | null;
}
