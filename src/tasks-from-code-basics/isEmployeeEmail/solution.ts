namespace Company {
  export function isEmployeeEmail(
    email: string,
    companyDomain: string,
  ): boolean {
    return email.endsWith(`@${companyDomain}`);
  }
}

type User = {
  email: string;
};

function authorize(user: User | null): boolean {
  const companyDomain = "hexlet.io";

  const email = user?.email ?? "";

  return Company.isEmployeeEmail(email, companyDomain);
}

Company.isEmployeeEmail("tirion@hexlet.io", "hexlet.io");
// true

Company.isEmployeeEmail("user@example.com", "hexlet.io");
// false
