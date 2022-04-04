export interface Homepage {
  title: Title[];
}

export interface Title {
  type: string;
  text: string;
  spans: string[];
}
