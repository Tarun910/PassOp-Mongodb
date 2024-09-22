# Password Manager using React, Tailwind CSS, MongoDB, and Express

This is a **Password Manager** application built using **React** for the frontend, styled with **Tailwind CSS**, and powered by a **MongoDB** database with an **Express.js** backend. The project allows users to securely store, view, and manage their passwords with a user-friendly interface.

## Features

- **Responsive UI**: Built with React and styled using Tailwind CSS for an elegant and responsive design.
- **Password Storage**: Save passwords securely using local storage and MongoDB.
- **Password Management**: Add, edit, delete, and view passwords with ease.
- **Password Toggling**: Toggle password visibility in input fields.
- **Interactive Elements**: Includes animated **Lord Icons** and dynamic hover effects.
- **Toast Notifications**: Provides feedback on actions like adding, copying, and deleting passwords.
- **Form Validation**: Ensures password and username fields meet minimum length requirements.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Icons**: Lord Icons
- **Toast Notifications**: react-toastify

## Installation & Usage

```bash
# 1. Clone the repository:
git clone https://github.com/your-username/password-manager.git

# 2. Install dependencies for both frontend and backend:
cd password-manager
npm install
cd backend
npm install

# 3. Start the MongoDB server and run the backend:
npm run dev

# 4. Run the React frontend:
cd ..
npm start

# Usage:
# - Input your website URL, username, and password to save it.
# - Manage saved passwords: Edit, delete, or copy them to the clipboard.
# - Toggle password visibility for secure viewing.
