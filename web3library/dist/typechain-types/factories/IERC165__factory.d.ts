import { type ContractRunner } from "ethers";
import type { IERC165, IERC165Interface } from "../IERC165";
export declare class IERC165__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "supportsInterface";
        readonly inputs: readonly [{
            readonly name: "interfaceID";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IERC165Interface;
    static connect(address: string, runner?: ContractRunner | null): IERC165;
}
