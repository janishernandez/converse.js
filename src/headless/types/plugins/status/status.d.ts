declare const XMPPStatus_base: {
    new (...args: any[]): {
        setColor(): Promise<void>;
        getIdentifier(): any;
        getColor(): Promise<string>;
        getAvatarStyle(append_style?: string): Promise<string>;
        cid: any;
        attributes: {};
        validationError: string;
        collection: any;
        changed: {};
        browserStorage: Storage;
        _browserStorage: Storage;
        readonly idAttribute: string;
        readonly cidPrefix: string;
        preinitialize(): void;
        initialize(): void;
        validate(attrs: object, options?: object): string;
        toJSON(): any;
        sync(method: "create" | "update" | "patch" | "delete" | "read", model: Model, options: import("@converse/skeletor/src/types/model.js").Options): any;
        get(attr: string): any;
        keys(): string[];
        values(): any[];
        pairs(): [string, any][];
        entries(): [string, any][];
        invert(): any;
        pick(...args: any[]): any;
        omit(...args: any[]): any;
        isEmpty(): any;
        has(attr: string): boolean;
        matches(attrs: import("@converse/skeletor/src/types/model.js").Attributes): boolean;
        set(key: string | any, val?: string | any, options?: import("@converse/skeletor/src/types/model.js").Options): false | any;
        _changing: boolean;
        _previousAttributes: any;
        id: any;
        _pending: boolean | import("@converse/skeletor/src/types/model.js").Options;
        unset(attr: string, options?: import("@converse/skeletor/src/types/model.js").Options): false | any;
        clear(options: import("@converse/skeletor/src/types/model.js").Options): false | any;
        hasChanged(attr?: string): any;
        changedAttributes(diff: any): any;
        previous(attr?: string): any;
        previousAttributes(): any;
        fetch(options?: import("@converse/skeletor/src/types/model.js").Options): any;
        save(key?: string | import("@converse/skeletor/src/types/model.js").Attributes, val?: boolean | number | string | import("@converse/skeletor/src/types/model.js").Options, options?: import("@converse/skeletor/src/types/model.js").Options): any;
        destroy(options?: import("@converse/skeletor/src/types/model.js").Options): boolean;
        url(): any;
        parse(resp: import("@converse/skeletor/src/types/model.js").Options, options?: import("@converse/skeletor/src/types/model.js").Options): import("@converse/skeletor/src/types/model.js").Options;
        isNew(): boolean;
        isValid(options?: import("@converse/skeletor/src/types/model.js").Options): boolean;
        _validate(attrs: import("@converse/skeletor/src/types/model.js").Attributes, options?: import("@converse/skeletor/src/types/model.js").Options): boolean;
        on(name: string, callback: (event: any, model: Model, collection: import("@converse/skeletor").Collection, options: Record<string, any>) => any, context: any): any;
        _events: any;
        _listeners: {};
        listenTo(obj: any, name: string, callback?: (event: any, model: Model, collection: import("@converse/skeletor").Collection, options: Record<string, any>) => any): any;
        _listeningTo: {};
        _listenId: any;
        off(name: string, callback: (event: any, model: Model, collection: import("@converse/skeletor").Collection, options: Record<string, any>) => any, context?: any): any;
        stopListening(obj?: any, name?: string, callback?: (event: any, model: Model, collection: import("@converse/skeletor").Collection, options: Record<string, any>) => any): any;
        once(name: string, callback: (event: any, model: Model, collection: import("@converse/skeletor").Collection, options: Record<string, any>) => any, context: any): any;
        listenToOnce(obj: any, name: string, callback?: (event: any, model: Model, collection: import("@converse/skeletor").Collection, options: Record<string, any>) => any): any;
        trigger(name: string, ...args: any[]): any;
        constructor: Function;
        toString(): string;
        toLocaleString(): string;
        valueOf(): Object;
        hasOwnProperty(v: PropertyKey): boolean;
        isPrototypeOf(v: Object): boolean;
        propertyIsEnumerable(v: PropertyKey): boolean;
    };
} & typeof Model;
export default class XMPPStatus extends XMPPStatus_base {
    constructor(attributes: any, options: any);
    vcard: any;
    defaults(): {
        status: any;
    };
    /**
     * @param {string|Object} key
     * @param {string|Object} [val]
     * @param {Object} [options]
     */
    set(key: string | any, val?: string | any, options?: any): false | this;
    getDisplayName(): any;
    getNickname(): any;
    getFullname(): string;
    /** Constructs a presence stanza
     * @param {string} [type]
     * @param {string} [to] - The JID to which this presence should be sent
     * @param {string} [status_message]
     */
    constructPresence(type?: string, to?: string, status_message?: string): Promise<any>;
}
import { Model } from '@converse/skeletor';
export {};
//# sourceMappingURL=status.d.ts.map