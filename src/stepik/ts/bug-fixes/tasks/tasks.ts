// Task 1 — any
// Write the correct version
function sum(a: number, b: number): number;
function sum(a: string, b: string): string;

function sum(a: unknown, b: unknown): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }

  throw new TypeError("Arguments must have the same type");
}

// Examples
console.log(sum(5, 3)); // 8
console.log(sum("5", "3")); // "53"
// console.log(sum(5, "3")); // "Error"

// Task 3 - Replace enum with const object

const Status = {
  Active: "active",
  Inactive: "inactive",
  Pending: "pending",
} as const;

type Status = (typeof Status)[keyof typeof Status];

function setStatus(status: Status) {
  console.log(status);
}

setStatus(Status.Active);
setStatus("active");

// Task 4 — Fix the function with unknown

function processInput(input: unknown): string | null {
  if (typeof input === "string") {
    return input.toUpperCase();
  }

  return null;
}

// Examples
console.log(processInput("hello")); // "HELLO"
console.log(processInput(123)); // null

// Task 5 — Fix an unnecessary overload

function double(value: number | string): number | string {
  if (typeof value === "number") return value * 2;

  return value + value;
}

// Examples
console.log(double(5)); // 10
console.log(double("5")); // "55"

// Task 6 — Fix the API response typing

type UserTask6 = {
  id: number;
  name: string;
  email: string;
};

type ApiResponse = {
  status: string;
  data: UserTask6;
};

async function fetchUser(id: number): Promise<ApiResponse> {
  const response = await fetch(`/api/users/${id}`);
  const data: ApiResponse = await response.json();
  return data as ApiResponse;
}

// Task 7 — Fix a function with any number of parameters

function sumAll(...args: number[]) {
  return args.reduce((acc, val) => acc + val, 0);
}

// Examples
console.log(sumAll(1, 2, 3)); // 6
// console.log(sumAll(1, "2", 3));

// Task 8 — Fix a function

function processValue(value: number): number | string {
  if (value > 0) {
    return value * 2;
  }

  return String(value).toUpperCase();
}

// Task 9 — Refactoring a complex type

type BaseUser = {
  id: number;
  name: string;
  email: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
};

type AdminUser = BaseUser & {
  isAdmin: true;
  permissions: string[];
};

type RegularUser = BaseUser & {
  isAdmin?: false;
};

type User = AdminUser | RegularUser;

// Task 10 — Refactoring a Configuration Type

type ApiConfig = {
  apiUrl: string;
  timeout?: number;
  retries?: number;
  cacheTTL?: number;
  useCache?: boolean;
};

type Logging = {
  enableLogging?: boolean;
  logLevel?: "debug" | "info" | "warn" | "error";
};

type Sentry = {
  sentryDSN?: string;
  sentryEnv?: string;
  sentryRelease?: string;
};

type Database = {
  databaseHost?: string;
  databasePort?: number;
  databaseName?: string;
  databaseUser?: string;
  databasePassword?: string;
};

type Redis = {
  redisHost?: string;
  redisPort?: number;
  redisPassword?: string;
};

type Config = ApiConfig & Logging & Sentry & Database & Redis;

// Task 11 — Refactoring the API Response Type

type PaginationMeta = {
  page?: number;
  limit?: number;
  total?: number;
  sort?: string;
  filter?: string;
};

type SuccessResponse<T> = {
  success: true;
  data: T;
  meta?: PaginationMeta;
};

type ErrorResponse = {
  success: false;
  error: {
    code: number;
    message: string;
    details?: unknown;
  };
};

type ApiResponseTask11<T> = SuccessResponse<T> | ErrorResponse;

// Task 12 — Refactoring the Form Type
// Task 12 — Refactoring the Form Type

type BaseFormField = {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
};

type TextFormField = BaseFormField & {
  type: "text";
  value: string;
};

type NumberFormField = BaseFormField & {
  type: "number";
  value: number;
  min?: number;
  max?: number;
  step?: number;
};

type SelectOption = {
  value: string;
  label: string;
};

type SelectFormField = BaseFormField & {
  type: "select";
  value: string | string[];
  options: SelectOption[];
  multiple?: boolean;
};

type CheckboxFormField = BaseFormField & {
  type: "checkbox";
  value: boolean;
};

type FileFormField = BaseFormField & {
  type: "file";
  value: File | File[] | null;
  accept?: string;
  multiple?: boolean;
};

type TextareaFormField = BaseFormField & {
  type: "textarea";
  value: string;
  rows?: number;
  cols?: number;
};

type FormField =
  | TextFormField
  | NumberFormField
  | SelectFormField
  | CheckboxFormField
  | FileFormField
  | TextareaFormField;

// Task 13 — Refactoring the Event Type

type BaseEvent = {
  target: EventTarget;
  timestamp: number;
};

type ClickEvent = BaseEvent & {
  type: "click";
  x: number;
  y: number;
};

type KeypressEvent = BaseEvent & {
  type: "keypress";
  key: string;
  code: string;
  shiftKey: boolean;
  ctrlKey: boolean;
  altKey: boolean;
};

type ScrollEvent = BaseEvent & {
  type: "scroll";
  deltaX: number;
  deltaY: number;
};

type DragEventData = BaseEvent & {
  type: "drag";
  x: number;
  y: number;
};

type UploadEvent = BaseEvent & {
  type: "upload";
  file?: File;
  files?: File[];
  progress: number;
  loaded: number;
  total: number;
};

type EventType =
  | ClickEvent
  | KeypressEvent
  | ScrollEvent
  | DragEventData
  | UploadEvent;

// Task 14 - Refactoring a UI Component Type

type BaseButtonProps = {
  text: string;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
};

type EventsButtonProps = {
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

type FormButtonProps = {
  form?: string;
  name?: string;
  value?: string;
};

type LinkButtonProps = {
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  download?: string;
};

type ButtonProps = BaseButtonProps &
  EventsButtonProps &
  FormButtonProps &
  LinkButtonProps;
