declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
    }
}

declare module '*.bmp' {
    const src: string;
    export default src;
}

declare module '*.gif' {
    const src: string;
    export default src;
}

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.jpeg' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

    const src: string;
    export default src;
}

declare module '*.module.css' {
    const css: { [key: string]: string };
    export default css;
}

declare module 'browser-lang';
declare module '@manuel-bieh/ui/es';
