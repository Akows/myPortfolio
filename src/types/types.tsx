export interface Project {
  id: number;
  title: string;
  date: string;
  techs: string[];
  features: string[];
  githubLink: string;
  deployLink: string;
  detailedFeatures: string[];
  icon: string;
  image: string;
  detailedDescriptions: {
    title: string;
    contents: { subTitle: string; description: string }[];
  }[];
}
