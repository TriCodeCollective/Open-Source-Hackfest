export function LoginForm() {
  return (
    <div>
      <h1 className="display-6 mb-3">Login</h1>
      <form>
        <div className="mb-3">
          <Field
            className="form-control"
            id="username"
            name="username"
            placeholder="Username"
            aria-describedby="usernameHelp"
          />
        </div>

        <div className="mb-3">
          <Field
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            type="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
