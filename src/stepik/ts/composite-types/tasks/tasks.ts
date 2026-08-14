/*
 * Task 1 — Book Typing
 */

interface Book {
  title: string;
  author: string;
  year: number;
  isAvailable: boolean;
}

const myBook: Book = {
  title: "Война и мир",
  author: "Лев Толстой",
  year: 1869,
  isAvailable: true,
};

/*
 * Task 2 — Movies Typing
 */

type Movie = {
  title: string;
  director: string;
  releaseYear: number;
  rating?: number;
};

const myMovie = {
  title: "Интерстеллар",
  director: "Кристофер Нолан",
  releaseYear: 2014,
};

/*
 * Task 3 — Address and User Typing
 */

interface Address {
  city: string;
  street: string;
  coordinates?: [number, number];
}

interface User {
  name: string;
  email: string;
  address: Address;
}

const userAddress: Address = {
  city: "Санкт-Петербург",
  street: "Невский проспект",
  coordinates: [59.93, 30.31],
};

const user: User = {
  name: "Anna",
  email: "anna@example.com",
  address: userAddress,
};

/*
 * Task 4 — Employee Typing
 */

interface Employee {
  name: string;
  position: string;
  salary?: number;
  skills?: string[];
}

const employee: Employee = {
  name: "Sherlock Holmes",
  position: "Developer",
  salary: 120000,
  skills: ["TypeScript", "React", "Node.js"],
};

/*
 * Task 5 — Products Typing
 */

type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

const products: Product[] = [
  { id: 1, name: "Laptop", price: 50000, inStock: true },
  { id: 2, name: "Mouse", price: 1500, inStock: false },
];

/*
 * Task 6 - Typing props for a React component
 */

interface CardProps {
  title: string;
  description: string;
  onClick: () => void;
  isActive?: boolean;
}

function Card({ title, description, onClick, isActive }: CardProps) {
  return null;
}

// <Card
// title="Title"
// description="Card description"
// onClick={() => console.log("Click-Click!")}
// />

/*
 * Task 7 - University Typification
 */

interface Department {
  name: string;
  professors: string[];
}

interface University {
  name: string;
  departments: Department[];
}

const myUniversity: University = {
  name: "Ruhr University Bochum",
  departments: [
    { name: "Mathematics", professors: ["Ivanov", "Petrov", "Sidorova"] },
    { name: "Physics", professors: ["Kuznetsov", "Vasilieva"] },
  ],
};

/*
 * Task 8 - Order typification and counting functions
 */

interface OrderItem {
  product: string;
  quantity: number;
  price: number;
}

interface Order {
  id: number;
  customerName: string;
  items: OrderItem[];
}

const orders: Order[] = [
  {
    id: 1,
    customerName: "ALex",
    items: [
      { product: "Book", quantity: 2, price: 500 },
      { product: "Pen", quantity: 5, price: 100 },
    ],
  },
];

/*
 * Task 9 - Blog and Post Typification
 */

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  tags: string[];
  publishedAt: Date;
}

interface Blog {
  name: string;
  posts: BlogPost[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Introduction to TypeScript",
    content: "TypeScript is typed JavaScript...",
    author: "Stepan Kukushnik",
    tags: ["TypeScript", "Programming"],
    publishedAt: new Date("2027-06-10"),
  },
  {
    id: 2,
    title: "How to Write Clean Code",
    content: "Clean code is code that is easy to read and maintain...",
    author: "Ivan Ivanov",
    tags: ["Clean Code", "Best Practices"],
    publishedAt: new Date("2027-04-11"),
  },
];

const myBlog: Blog = {
  name: "My Tech Blog",
  posts: blogPosts,
};

/*
 * Task 10 - Task and task board categorization (Kanban)
 */

interface Task {
  id: number;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Done";
  assignee?: string;
  dueDate?: Date;
}

interface KanbanBoard {
  name: string;
  tasks: Task[];
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Write a lesson on TypeScript",
    description: "Prepare materials",
    status: "In Progress",
    assignee: "Vasya",
    dueDate: new Date("2026-03-15"),
  },
  {
    id: 2,
    title: "Test new functionality",
    description: "Check API operation",
    status: "To Do",
    dueDate: new Date("2026-03-18"),
  },
];

const kanbanBoard: KanbanBoard = {
  name: "Project: TypeScript Course",
  tasks: tasks,
};
