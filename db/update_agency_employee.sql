UPDATE agency_employee
SET 
	first_name = $1
	, last_name = $2
	, email = $3
	, phone = $4
	, position = $5
WHERE id = $6;