export default defaultConfig;
declare function defaultConfig(): {
    type: any;
    width: string;
    height: string;
    physics: {
        default: string;
        arcade: {
            gravity: {
                y: number;
            };
            debug: boolean;
        };
    };
    scene: {
        key: string;
        preload: typeof preload;
        create: typeof create;
        update: typeof update;
    };
};
declare function preload(): void;
declare function create(): void;
declare function update(time: any, delta: any): void;
