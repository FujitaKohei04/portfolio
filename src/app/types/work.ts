import { StaticImageData } from "next/image";

export type WorkContent = {
  workName: string;
  workDescription: string;
  examples: {
    img: StaticImageData;
    description: string;
  }[];
}