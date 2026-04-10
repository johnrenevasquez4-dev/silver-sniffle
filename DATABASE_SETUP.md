# DATABASE_SETUP.md

## Setting Up Supabase Database Tables for the RidePride App

This document provides instructions for setting up the necessary database tables for the Silver Sniffle RidePride application using Supabase.

### Prerequisites
- A Supabase account
- A project created in Supabase 

### Steps to Set Up the Database Tables

1. **Login to Supabase**  
   Go to [Supabase](https://app.supabase.com) and log in with your account credentials.

2. **Create a New Project**  
   If you haven’t created a project yet, click on "New Project" and fill in the necessary details.

3. **Access the SQL Editor**  
   Navigate to the SQL section in the left sidebar to access the SQL editor where you can run SQL commands.

4. **Create Tables**  
   Use the following SQL commands to create the necessary tables for the RidePride app:
   ```sql
   -- Create users table
   CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       email VARCHAR(255) UNIQUE NOT NULL,
       password_hash VARCHAR(255) NOT NULL,
       created_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp
   );

   -- Create rides table
   CREATE TABLE rides (
       id SERIAL PRIMARY KEY,
       user_id INTEGER REFERENCES users(id),
       start_location POINT NOT NULL,
       end_location POINT NOT NULL,
       ride_time TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp
   );
   
   -- Create drivers table
   CREATE TABLE drivers (
       id SERIAL PRIMARY KEY,
       user_id INTEGER REFERENCES users(id),
       vehicle_info JSON NOT NULL,
       is_available BOOLEAN DEFAULT TRUE
   );
   ```

5. **Run the SQL Commands**  
   Execute the SQL commands by clicking on the "RUN" button in the SQL editor.

6. **Verify Table Creation**  
   After running the commands, navigate to the "Table Editor" section to verify that the tables have been created successfully. You should see `users`, `rides`, and `drivers` listed.

### Conclusion
You have successfully set up the Supabase database tables for the RidePride app. You can now proceed to integrate these tables into your application and start building your features.
