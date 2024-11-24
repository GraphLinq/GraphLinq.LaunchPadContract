export class FundraiserError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "FundraiserError";
    }
}

export class UnknownError extends FundraiserError {
    constructor(message: string) {
        super(`Unknown error occurred: ${message}`);
        this.name = "UnknownError";
    }
}

export class InvalidArgument extends FundraiserError {
    constructor(message: string) {
        super(`Argument incorrect: ${message}`);
        this.name = "InvalidArgument";
    }
}

export class AllowanceError extends FundraiserError {
    constructor(message: string) {
        super(`Insufficient allowance: ${message}`);
        this.name = "AllowanceError";
    }
}

export class FinalizationError extends FundraiserError {
    constructor(message: string) {
        super(`Finalization error: ${message}`);
        this.name = "FinalizationError";
    }
}

export class ClaimingError extends FundraiserError {
    constructor(message: string) {
        super(`Claiming error: ${message}`);
        this.name = "ClaimingError";
    }
}

export class InitSwapPairError extends FundraiserError {
    constructor(message: string) {
        super(`Init swap pair error: ${message}`);
        this.name = "InitSwapPairError";
    }
}

/**
 * Maps decoded EVM revert reasons to specific error types.
 * @param reason The decoded revert reason from the EVM.
 * @returns The corresponding custom error type.
 */
export function mapRevertReasonToError(reason: string): FundraiserError {
    if (reason.includes("Price per token must be greater than zero")) {
        return new InvalidArgument("Price per token must be greater than zero.");
    }

    if (reason.includes("Invalid campaign type")) {
        return new InvalidArgument("Invalid campaign type.");
    }

    if (reason.includes("Insufficient allowance")) {
        return new AllowanceError("Make sure you have approved the correct amount of tokens.");
    }

    if (reason.includes("Fundraising still ongoing")) {
        return new FinalizationError("Fundraiser end time hasn't been reached.");
    }

    if (reason.includes("Minimum goal not met")) {
        return new FinalizationError("Fundraiser minimum goal isn't reached (fair launch campaign).");
    }

    if (reason.includes("Minimum goal met")) {
        return new FinalizationError("Can't cancel a fundraiser when minimum goal is met (fair launch campaign).");
    }

    if (reason.includes("Swap pair not created")) {
        return new ClaimingError("Wait for the fundraiser creator to initialize the swap pair.");
    }

    if (reason.includes("Fundraising not finalized")) {
        return new InitSwapPairError("You must first finalize the fundraiser.");
    }

    if (reason.includes("Tokens already claimed")) {
        return new ClaimingError("User already claimed the tokens.");
    }

    // Default to a generic RevertError for unhandled reasons
    return new UnknownError(reason);
}

