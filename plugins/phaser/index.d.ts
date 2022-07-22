export default phaserPlugin;
declare const phaserPlugin: {
    phaserObject: {
        operator: () => any;
        oncreate: (node: any) => void;
    };
    game: {
        operator: (config: any) => any;
    };
    config: {
        config: {};
        operator: (node: any) => any;
    };
    button: typeof button;
    data: typeof data;
    ".brainsatplay": {
        package: any;
        graph: any;
    };
};
import button from "./plugins/button/index.js";
import data from "./plugins/data/index.js";
