declare var _default: {
    datastreams: {
        start: {
            tag: string;
            operator: (constraints: any) => Promise<any>;
        };
        load: {
            tag: string;
            operator: (info: any) => Promise<any>;
        };
        ".brainsatplay": {
            package: any;
            graph: any;
            plugins: any;
        };
    };
    ui: {
        button: {
            operator: () => HTMLButtonElement;
            element: HTMLButtonElement;
            innerHTML: string;
            style: {};
        };
        data: {
            operator: (input: any) => HTMLDivElement;
            element: HTMLDivElement;
            style: {
                background: string;
                width: string;
                height: string;
            };
        };
        ".brainsatplay": {
            package: any;
            graph: any;
            plugins: any;
        };
    };
    synthetic: {
        operator: () => {
            label: string;
            onconnect: (device: any) => void;
            ondisconnect: (device: any) => Promise<boolean>;
            ondata: (channels: any) => any;
            protocols: any[];
        };
    };
    ganglion: {
        operator: () => any;
    };
    ".brainsatplay": {
        package: any;
        graph: any;
        plugins: any;
    };
};
export default _default;
