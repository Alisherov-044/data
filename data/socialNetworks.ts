import { SocialNetworkI } from "@/interface";
import { Facebook, Instagram, Telegram, YouTube } from "@/assets";

export const socialNetworks: SocialNetworkI[] = [
  {
    id: 1,
    link: "https://www.youtube.com/@datatalimstansiyasi",
    Icon: YouTube,
  },
  {
    id: 2,
    link: "https://t.me/data_talim_stansiyasi",
    Icon: Telegram,
  },
  {
    id: 3,
    link: "https://www.instagram.com/data_talim_stansiyasi/",
    Icon: Instagram,
  },
  {
    id: 4,
    link: "https://www.facebook.com/datainnovatsionmarkazi?mibextid=LQQJ4d",
    Icon: Facebook,
  },
];
