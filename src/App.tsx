import React, { useState } from 'react';
import Axios from 'axios';
interface Checkbox {
	name: string;
	label: string
	key: string;
}

interface FormData {
	employeeName: string;
	employeeEmail: string;
	reasons: string[];
	dateFrom: string,
	dateTo: string,
	managerName: string,
	managerEmail: string
}
const App: React.FC = () => {
	const [values, setValues] = useState<any>({
		"employeeName": "",
		"employeeEmail": "",
		"othersReasons": "",
		"dateFrom": "",
		"dateTo": "",
		"managerName": "",
		"managerEmail": ""
	});

	const [checkBoxValues, setCheckBoxValues] = useState<any>({
		"anaualLeave": false,
		"sickLeave": false,
		"unpaidLeave": false,
		"othersLeave": false,
	});
	const handleChange = (e: any) => {

		setValues({
			...values,
			[e.target.name]: e.target.value
		});
	}

	const handleCheckBox = (e: any) => {

		setCheckBoxValues({
			...checkBoxValues,
			[e.target.name]: e.target.checked
		});
	}

	const handleSubmit = (e: any) => {
		e.preventDefault();

		const reasons = Object.keys(checkBoxValues)
			.filter((key: string) => checkBoxValues[key])
			.map((key: string) => key === "othersLeave" ? values["othersReasons"] : key);

		const data: FormData = {
			employeeName: values.employeeName,
			employeeEmail: values.employeeEmail,
			reasons: reasons,
			dateFrom: values.dateFrom,
			dateTo: values.dateTo,
			managerName: values.managerName,
			managerEmail: values.managerEmail
		}

		Axios.post("https://prod-13.southeastasia.logic.azure.com:443/workflows/c9b743e0b3564ba0ae4778a03cf2235f/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=i8qd8_R5CnAz9eGaA3iFB4rYBixEdUuNVNX4H9m7u18",
			data).then(()=>{
				console.log("Success");
			});

	}

	const checkboxList: Checkbox[] = [
		{
			name: "anaualLeave",
			label: "Anaual Leave",
			key: "0"
		},
		{
			name: "sickLeave",
			label: "Sick Leave",
			key: "1"
		},
		{
			name: "unpaidLeave",
			label: "Unpaid Leave",
			key: "2"
		},
		{
			name: "othersLeave",
			label: "Others",
			key: "3"
		}
	];

	return (
		<div>
			<h2>Leave Request Form</h2>
			<form className="dummy-form">
				<label>Requested Employee Information</label>
				<div>
					<label>Name</label>
					<input name="employeeName" type="text" onChange={handleChange} />
					<label>Email</label>
					<input name="employeeEmail" type="text" onChange={handleChange} />
				</div>
				<div>
					<label>Reason for Requested Leave</label>
					<div>
						{
							checkboxList.map(item =>
								<div key={item.key}>
									<input name={item.name} type="checkbox" checked={checkBoxValues[item.name]} onChange={handleCheckBox} />
									<label>{item.label}</label>
								</div>
							)
						}
						{checkBoxValues["othersLeave"] && <div><textarea name="othersReason" rows={4} cols={50} onChange={handleChange} /> </div>}
					</div>
				</div>
				<div>
					<label>Date Requested</label>
					<div>
						<label>From</label>
						<input type="date" name="dateFrom" onChange={handleChange} />
						<label>To</label>
						<input type="date" name="dateTo" onChange={handleChange} />
					</div>
				</div>
				<div>
					<label>Manager Information for Approval</label>
					<div>
						<label>Name</label>
						<input type="text" name="managerName" onChange={handleChange} />
						<label>Email</label>
						<input type="text" name="managerEmail" onChange={handleChange} />
					</div>
				</div>
				<button onClick={handleSubmit}>Submit</button>
			</form>
		</div>
	);
}

export default App;
