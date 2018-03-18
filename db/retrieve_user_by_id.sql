SELECT
users.id as user_id
, agency_employee.agency_id as agency_id
, agency_employee.id as agency_employee_id
, username
, first_name 
, last_name
, email
, phone
, position
, primary_contact
FROM users
JOIN agency_employee ON users.agency_employee_id=agency_employee.id
WHERE users.id = $1;