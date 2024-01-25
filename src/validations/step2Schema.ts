import { object , string , number } from 'yup';

export const step2Schema = object({
	address : string().optional().trim(),
	country:string().optional().trim(),
	state : string().test(
			'state-test',
			'Invalid state name',
			function(value:string){

				const countryName = this.parent.country;

				if(countryName){
					// IF USER HAS SELECTED ANY COUNTRY
					return true
				}
				else{
					if(value === undefined){
						return true;
					}
					else{
						return this.createError({
							message : 'Please select a country',
							path : 'state'
						})
					}
				}
			}
		).optional().trim(),
	city : string().test(
			'city-test',
			'Invalid city name',
			function(value:string){

				const countryName = this.parent.country;

				if(countryName){
					// IF USER HAS SELECTED ANY COUNTRY
					return true
				}
				else{

					if(value === undefined){
						return true;
					}
					else{
						return this.createError({
							message : 'Please select a country',
							path : 'city'
						})
					}
				}
			}
		).optional().trim(),
	pincode : string().test(
			'pincode-test',
			'Pincode is invalid',
			function(value:string){

				if(value === ''){
					return true;
				}
				else{

					const pincodeTransform = Number(value);

					if(isNaN(pincodeTransform)){
						return false
					}
					else{

						if(value.length === 6){
							return true;
						}
						else{
							return this.createError({
								message : 'Pincode must contain 6 digits',
								path : 'pincode'
							});
						}
					}
				}

				return false;
			}
		).trim()
})