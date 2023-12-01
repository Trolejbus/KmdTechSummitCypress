import { LeasingType } from "../types/leasing-type.type";

export interface CreateApplicationDto {
    referenceNo: string;
    applicantName: string;
    applicantSurname: string;
    applicantPhone: string;
    applicantEmail: string;
    loanAmount: number;
    monthlyPaymentAmount: number;
    initialPayment: number;
    type: LeasingType;
}
