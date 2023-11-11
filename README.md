# E-Commerce_Platform


ER DIAGRAM:
https://lucid.app/lucidchart/5fe36f3a-497d-4b8a-bad5-fdab822eb4af/edit?invitationId=inv_517969ec-011f-446b-8ce9-ee4e782c860a&page=csPD4nJPbBT3#

POSTMAN WORKSPACE:
https://app.getpostman.com/join-team?invite_code=fb5d3b608c81860e6665c14654f04d4c&target_code=bb547d9e8bd9fac3c4199697d36fce30



# Backend Setup
# Item Server (Spring Boot)
cd backend/item-server
# Run the Spring Boot server

# Node Servers (Order Management, Delivery Management, User Management)
# For each server (order management, delivery management, user management):
cd backend/order-management
npm install
npm start

# Frontend Setup
cd frontend
yarn install
yarn run dev

# Open your web browser and visit http://localhost:your_port to access the Shopfusion application.

# Important Notes
# Ensure that all backend servers are running before accessing the frontend.
# Replace your_port with the actual port number specified during the application startup.
# The frontend relies on the backend servers, so ensure they are up and running to experience the full functionality.

