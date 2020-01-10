import React, { useState } from 'react';

const App: React.FC = () => {
	const checkBoxList = [
		"Anaual Leave",
		"Sick Leave",
		"Unpaid Leave",
	];

	return (
		<div>
			<h2>Leave Request Form</h2>
			<form className="dummy-form">
				<label>Requested Employee Information</label>
				<div>
					<label>Name</label>
					<input name="name" type="text" />
					<label>Email</label>
					<input name="email" type="text" />
				</div>
				<div>
					<label>Reason for Requested Leave</label>
					<div>
						{
							checkBoxList.map(s =>
								<div>
									<input type="checkbox" />
									<label>{s}</label>
								</div>
							)
						}
						<div>
							<input type="checkbox" />
							<label>Other</label>
							{}
						</div>
					</div>
				</div>
				<div>
					<label>Date Requested</label>
					<div>
						<label>From</label>
						<input type="text" name="date-from" />
						<label>To</label>
						<input type="date" name="date-to" />
					</div>
				</div>
				<div>
					<label>Manager Information for Approval</label>
					<div>
						<label>Name</label>
						<input type="text" name="date-from" />
						<label>Email</label>
						<input type="date" name="date-to" />
					</div>
				</div>
			</form>
		</div>
	);
}

export default App;
