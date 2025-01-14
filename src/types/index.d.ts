declare module "*.module.css" {
    const content: Record<string, string>;
    export default content;
}

declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module "*.jpg" {
    const value: string;
    export default value;
}