import { type ContractRunner } from "ethers";
import type { ITransparentUpgradeableProxy, ITransparentUpgradeableProxyInterface } from "../../TransparentUpgradeableProxy.sol/ITransparentUpgradeableProxy";
export declare class ITransparentUpgradeableProxy__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "upgradeToAndCall";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AdminChanged";
        readonly inputs: readonly [{
            readonly name: "previousAdmin";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "newAdmin";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BeaconUpgraded";
        readonly inputs: readonly [{
            readonly name: "beacon";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Upgraded";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): ITransparentUpgradeableProxyInterface;
    static connect(address: string, runner?: ContractRunner | null): ITransparentUpgradeableProxy;
}
