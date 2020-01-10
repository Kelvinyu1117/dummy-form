import React, { useState } from 'react';

interface Checkbox {
	name: string;
	label: string
	key: string;
}

interface FormData {
	
}
const App: React.FC = () => {
	const [values, setValues] = useState<any>({
		"employeeName": "",
		"employeeEmail": "",
		"anaualLeave": false,
		"sickLeave": false,
		"unpaidLeave": false,
		"othersLeave": false,
		"othersReasons": "",
		"dateFrom": "",
		"dateTo": "",
		"managerName": "",
		"managerEmail": ""
	});

	const handleChange = (e: any) => {

		setValues({
			...values,
			[e.target.name]: e.target.value
		});
		console.log(values);
	}

	const handleClick = (e: any) => {

		setValues({
			...values,
			[e.target.name]: e.target.checked
		});
		console.log(values);
	}

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const data: FormData = {

		}
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
									<input name={item.name} type="checkbox" checked={values[item.name]} onClick={handleClick} />
									<label>{item.label}</label>
								</div>
							)
						}
					</div>
				</div>
				<div>
					<label>Date Requested</label>
					<div>
						<label>From</label>
						<input type="text" name="dateFrom" onChange={handleChange} />
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
						<input type="date" name="managerEmail" onChange={handleChange} />
					</div>
				</div>
				<button onSubmit={handleSubmit}>Submit</button>
			</form>
		</div>
	);
}

export default App;
