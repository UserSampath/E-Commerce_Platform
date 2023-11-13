# Shopfusion Supermarket Management System

Shopfusion is a modern, cloud-based supermarket management system that revolutionizes the shopping experience for customers, streamlines inventory management, and optimizes delivery processes. This unified platform provides a secure and personalized environment for seamless interactions tailored to each user's role.

**ER Diagram:** https://lucid.app/lucidchart/5fe36f3a-497d-4b8a-bad5-fdab822eb4af/edit?invitationId=inv_517969ec-011f-446b-8ce9-ee4e782c860a&page=csPD4nJPbBT3#

**Setup:**

1. Run the Spring Boot item server: `cd backend/item-server && ./gradlew bootRun`
2. Run the Node.js servers:
    * Order management: `cd backend/order-management && npm start`
    * Delivery management: `cd backend/delivery-management && npm start`
    * User management: `cd backend/user-management && npm start`
3. Run the frontend server: `cd frontend && yarn start`

**Access:**

Open your web browser and visit `http://localhost:3000` to access the E-Commerce Platform application.

**Notes:**

* Ensure that all backend servers are running before accessing the frontend.
* Replace `3000` with the actual port number specified during the frontend startup.
* The frontend relies on the backend servers, so ensure they are up and running to experience the full functionality.


Features:

* Customers:
    * Intuitive web and mobile interfaces for registration, login, and product browsing
    * Real-time order tracking and status updates for a streamlined and transparent shopping experience
* Delivery Personnel:
    * Comprehensive views of customer orders, assignments, and delivery routes
    * Enhanced visibility and control for managing the entire delivery lifecycle
* Inventory Keepers:
    * Robust tools for adding, updating, and removing products
    * Real-time insights into stock levels, ordered items, and order fulfillment status
    * Automated inventory management workflows to optimize efficiency and reduce errors

Benefits:

* Improved customer satisfaction: Shopfusion provides a seamless and convenient shopping experience for customers, with features like real-time order tracking and status updates.
* Increased operational efficiency: Shopfusion streamlines inventory management and delivery processes, helping supermarkets to operate more efficiently and profitably.
* Reduced costs: Shopfusion can help supermarkets to reduce costs associated with manual inventory management, delivery errors, and lost sales.
