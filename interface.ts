export interface CampgroundItem {
  _id: string;
  name: string;
  address: string;
  district: string;
  province: string;
  postalcode: string;
  tel: string;
  picture: string;
  breakfast: boolean;  // Indicating if breakfast is available
  __v: number;
  id: string;
}

export interface CampgroundsJson {
  success: boolean;
  count: number;
  pagination: Object;
  data: CampgroundItem[];
}

export interface BookingItem {
  _id: string,
  checkInDate: string;   // Added check-in date
  checkOutDate: string;  // Added check-out date
  breakfast: boolean;    // Added breakfast option
  campground: CampgroundItem;
  apptDate: string | number | Date;
  user:string;

  tel: string;
  
  
}
