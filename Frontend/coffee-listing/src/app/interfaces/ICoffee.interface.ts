export interface ICoffee {
  id:        number;
  name:      string;
  image:     string;
  price:     string;
  rating:    number;
  votes:     number;
  popular:   boolean;
  available: boolean;
}

export interface ICoffeeImgInfo extends Pick<ICoffee, 'image' | 'popular' | 'name'>  {}

export interface ICoffeeLabel extends Pick<ICoffee, 'price' | 'name'>  {}

export interface ICoffeeRating extends Pick<ICoffee, 'rating' | 'votes' | 'available'>  {}
