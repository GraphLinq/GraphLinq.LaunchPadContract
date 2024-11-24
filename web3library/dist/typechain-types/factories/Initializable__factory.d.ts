import { type ContractRunner } from "ethers";
import type { Initializable, InitializableInterface } from "../Initializable";
export declare class Initializable__factory {
    static readonly abi: readonly [{
        readonly type: "event";
        readonly name: "Initialized";
        readonly inputs: readonly [{
            readonly name: "version";
            readonly type: "uint64";
            readonly indexed: false;
            readonly internalType: "uint64";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "InvalidInitialization";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotInitializing";
        readonly inputs: readonly [];
    }];
    static createInterface(): InitializableInterface;
    static connect(address: string, runner?: ContractRunner | null): Initializable;
}
