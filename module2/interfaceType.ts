{
    interface User1 {
        name: string;
        id: number;
    }

    interface userWithRole2 extends User1 {
        role: string;
    }

  const user1: userWithRole2 = {
    name: 'John',
    id: 1,
    role: 'admin'
  }
}