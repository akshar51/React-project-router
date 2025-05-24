# React Employee Management App Documentation

## Overview
This React application allows users to manage employee records. Users can add, view, edit, and delete employee details. The application uses `localStorage` for data persistence and `react-router-dom` for client-side routing.

---

## File Structure
```
/src
 ├── App.js
 ├── components/
 │    ├── Header.js
 │    ├── Employee.js
 │    └── EmployeeData.js
```

---

## Component Details

---

### 1. App.js

**Purpose**  
Main component that holds the app's state and manages routing between views.

**Key State Variables**
- `employee`: Object holding form input data.
- `list`: Array of employee objects.
- `editId`: Holds the ID of the employee being edited.

**Hooks**
- `useEffect`: Loads employee data from `localStorage` on mount.
- `useNavigate`: Used to navigate between routes.

**Main Functions**
- `handleChange`: Updates form input fields.
- `handleSubmit`: Adds new or updates existing employee data.
- `handleDelete`: Deletes an employee record.
- `handleEdit`: Populates form fields with data for editing.

**Routes**
- `/`: Renders the `Employee` component (form view).
- `/view`: Renders the `EmployeeData` component (list view).

---

### 2. components/Header.js

**Purpose**  
Navigation bar allowing users to navigate between the form and view pages.

**Note**  
Use `react-router-dom`'s `Link` instead of `"react-router"` to prevent errors:
```js
import { Link } from "react-router-dom";
```

**UI Elements**
- Bootstrap-based navbar
- Navigation links for:
  - Home (`/`)
  - View (`/view`)

---

### 3. components/Employee.js

**Purpose**  
Form component for adding or editing employee data.

**Props**
- `employee`: Current form data.
- `onChange`: Handler for input change.
- `onSubmit`: Form submission handler.

**Form Fields**
- Name (`ename`)
- Post (`post`)
- Salary (`salary`)

**UI**
- Bootstrap form
- `Add Data` button triggers `onSubmit`

---

### 4. components/EmployeeData.js

**Purpose**  
Displays employee records in a tabular format with options to edit or delete.

**Props**
- `list`: Array of employee records.
- `handleDelete`: Function to remove an employee.
- `handleEdit`: Function to load data for editing.

**UI Elements**
- Bootstrap table
- Buttons:
  - `Edit`: Loads data into form
  - `Delete`: Removes record

---

## Data Storage
Uses **`localStorage`** to persist employee data:
- Key: `"Employee"`
- Stored as: JSON string

---

## Routing
Handled using `react-router-dom`'s `Routes` and `Route`:
```jsx
<Routes>
  <Route path="/" element={<Employee ... />} />
  <Route path="/view" element={<EmployeeData ... />} />
</Routes>
```

---

