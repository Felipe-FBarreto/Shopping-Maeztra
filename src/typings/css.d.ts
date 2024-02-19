declare module "*.css" {
  type Styles = {
    [selector: string]: string;
  };

  const styles: Styles;

  export default styles;
}

declare module "*.scss" {
  type Styles = {
    [selector: string]: string;
  };

  const styles: Styles;

  export default styles;
}
