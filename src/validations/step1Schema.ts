import { object , string , mixed , InferType, ObjectSchema } from 'yup';



// interface DataType{
// 	name : string;
// 	dob : string;
// 	mob : string;
// 	govtId : string;
// 	sex : 'Male' | 'Female';
// 	idType : 'Aadhar' | 'Pan';
// }




export const step1Schema = object({
	name : string().required('Please enter your name').min(3 , 'Name must contain atleast 3 characters').trim(),
	dob : string().test(
			'dob-test',
			'Date of Birth or Age is invalid',
			(value:string) => {

				const regex = /^([0-3][0-9]\/[0-1][0-9]\/[1-2][0-9][0-9][0-9])$/

				if(regex.test(value)){

					return true
				}
				else{

					const age = Number(value);

					if(isNaN(age)){
						return false
					}
					else{
						return age > 0 && age <= 100
					}
				}
			}
		).required('Please enter your Date of Birth or Age'),
	mob : string().test(
			'mob-test',
			'Mobile Number is invalid',
			(value:string) => {

				if(value === ''){
					return true;
				}
				else{

					const mobileRegex = /^\+91\s[0-9]{10}$/;

					return mobileRegex.test(value);
				}
			}
		).optional(),
	govtId : string().test(
			'govtId-test',
			'Invalid Govt Id',
			function (value:string){

				const idType = this.parent.idType;

				switch(idType){
					case 'Pan':
						const panRegex = /^([0-9|a-z]){10}$/;

						if(panRegex.test(value)){
							return true;
						}
						else{
							return this.createError({
								message : 'Invalid Pan Id',
								path : 'govtId'
							});
						}

					case 'Aadhar':

						const adharRegex = /^[1-9]{12}$/;


						if(adharRegex.test(value)){
							return true
						}
						else{
							return this.createError({
								message : 'Invalid Aadhar Id',
								path : 'govtId'
							});
						}

					default:
							if(value !== undefined){
								return this.createError({
									message : "Please select id type",
									path : 'govtId'
								})
							}

							return true;
				}
			}
		),
	sex : string().test(
			'sex-test',
			'Please select you sex',
			function(value:string){

				if(value === ''){
					return this.createError({
						message : 'Please select sex',
						path: 'sex'
					});
				}
				else{
					if(value === 'Male' || value === 'Female'){
						return true;
					}
					else{
						return this.createError({
							message : 'Please select the value from the given options',
							path : 'sex'
						});
					}
				}
			}
		).oneOf(['Male' , 'Female' , '']).required(),
	idType : mixed<'Aadhar' | 'Pan'>().optional()
})

// type User = InferType<typeof dataSchema>;