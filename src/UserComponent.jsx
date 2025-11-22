// UserComponent.jsx

// Named export
export function UserDetails() {
  return (
    <div>
      <h3>User Details</h3>
      <p>Email: prakhar@example.com</p>
    </div>
  );
}

// Named export
export function UserAddress() {
  return (
    <div>
      <h3>User Address</h3>
      <p>Tindwari, Banda, UP, India</p>
    </div>
  );
}

// Default export
export default function UserComponent() {
  return (
    <div>
      <h2>User Component Loaded!</h2>
      <p>This is the default UserComponent.</p>
    </div>
  );
}
