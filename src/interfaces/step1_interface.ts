export interface Step1Interface{
	name : string;
	dob : string;
	mob? : string | undefined;
	sex : 'Male' | 'Female'|'';
	idType? : 'Aadhar' | 'Pan';
	govtId? : string;
}