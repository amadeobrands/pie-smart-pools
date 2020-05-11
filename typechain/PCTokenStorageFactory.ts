/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { PCTokenStorage } from "./PCTokenStorage";

export class PCTokenStorageFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(): Promise<PCTokenStorage> {
    return super.deploy() as Promise<PCTokenStorage>;
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction();
  }
  attach(address: string): PCTokenStorage {
    return super.attach(address) as PCTokenStorage;
  }
  connect(signer: Signer): PCTokenStorageFactory {
    return super.connect(signer) as PCTokenStorageFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PCTokenStorage {
    return new Contract(address, _abi, signerOrProvider) as PCTokenStorage;
  }
}

const _abi = [
  {
    inputs: [],
    name: "ptSlot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060b08061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063ec565ffe14602d575b600080fd5b60336045565b60408051918252519081900360200190f35b604080517f5043546f6b656e2e73746f726167652e6c6f636174696f6e0000000000000000815290519081900360180190208156fea2646970667358221220df79c5e43cd826dfb4261668ab3b7cac53111315566bcf1f1f6b026553eaf37564736f6c63430006040033";
