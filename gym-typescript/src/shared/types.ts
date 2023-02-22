export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus",
  }  

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}

// adding the questionmark makes it option to add a description
export interface ClassType {
    name: string;
    description?: string;
    image: string;
}