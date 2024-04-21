
In this Assignment, we design a Job portal application which shows user role specific web pages.<br/>
<br/>
Features: <br/>
1. Building Admin Functionalities: <br/>
*User Registration with '/user/create' API endpoint was created.
Designed a Register page with full name, email, password and type. The "type" field has value of either "employee" or "admin".<br/>
*User retrieval API: An API endpoint '/user/getAll' was created to retrieve use details from the database.<br/>
Built an admin page “Employees” and displayed user details such as email, name, and type in tabular format.<br/>
*Changes in Login API and Routing:<br/>
Designed a Login page and restricted the routing access based on user type (admin or employee).<br/><br/>
2. Functionalities for Admin Portal: <br/>
*Job Creation API: An API endpoint '/job/create' was created to add new jobs to the portal.<br/>
* Also designed a form with fields - Company name, job title, description, and salary. Upon submission, a new record is added to the collection.<br/><br/>
3. Functionalities for Employee Portal: <br/>
*Job Retrieval API: An API endpoint '/job/getAll' was created to retrieve the list of available jobs from the database.<br/>
*Also designed a Jobs Page to display all the available jobs retrieved from the database.<br/><br/>
4. Others<br/> 
*The webpages were designed using Bootstrap 5 and Material UI.<br/>
*Redux states were added to the Login page.<br/>
<br/>
<hr/>



