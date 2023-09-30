# Car Rental Service Application Documentation

This application is a car rental service built using React. It provides users with the ability to browse available cars, book a ride, plan a trip, and more. The application is composed of several pages and components, each with its own functionality.

## Pages

### Home Page

The Home page is the main landing page of the application. It includes several sections such as booking a ride, planning a trip, viewing the fleet of cars, saving big, and downloading the app. It also includes a testimonials section.

### About Page

The About page provides information about the company. It includes a hero section, a company description, and a list of company statistics. It also includes a PlanTrip component.

### Team Page

The Team page showcases the members of the team behind the car rental service. Each team member is represented with a card that includes their image, name, and role in the company.

### Contact Page

The Contact page provides a form for users to send a message to the company. It also includes the company's contact information, such as phone number and email address.

### Testimonials Page

The Testimonials page displays testimonials from customers. Each testimonial is represented with a card that includes the customer's name, their testimonial, and their rating of the service.

## Components

### Hero

The Hero component is a reusable component that displays a hero image and title. It is used on multiple pages.

### Booking

The Booking component allows users to book a ride. It includes a form for entering trip details and a button for submitting the form.

### PlanTrip

The PlanTrip component allows users to plan a trip. It includes a form for entering trip details and a button for submitting the form.

### Reservation

The Reservation component is conditionally rendered based on whether a reservation has been made. It displays the details of the reservation and provides a button for cancelling the reservation.

### Fleet

The Fleet component displays a list of available cars. Each car is represented by a card that includes an image of the car, its name, and its price.

### SaveBig

The SaveBig component provides information about discounts and special offers.

### WCU

The WCU (Why Choose Us) component provides information about the benefits of choosing this car rental service.

### TestimonialCard

The TestimonialCard component displays a testimonial from a customer. It includes the customer's name, their testimonial, and their rating of the service.

### Faq

The Faq (Frequently Asked Questions) component displays a list of common questions and their answers.

### Download

The Download component provides links for downloading the car rental service's mobile app.

### ContactForm

The ContactForm component provides a form for users to send a message to the company. It includes fields for the user's name, email address, subject, and message.

### TeamMember

The TeamMember component represents a member of the team. It includes the team member's image, name, and role in the company.

## Hooks

The application uses several hooks from React, including `useEffect`, `useState`, and `useRef`. It also uses `useOutletContext` from `react-router-dom` for routing purposes.

## Assets

The application imports several assets for use in the components, including images and UI components.

## Export

Each component and page is exported as a default export.