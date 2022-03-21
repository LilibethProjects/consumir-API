export interface ResponseRequest{
  page: number;
  ad: Ad;
  per_page: number;
  total: number;
  total_page: number;
  data: UserRegisterList[];
}

interface UserRegisterList {
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  id: string;
}
interface Ad {
company: string;
url: string;
text: string;
}
