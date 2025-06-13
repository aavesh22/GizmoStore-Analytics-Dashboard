import { mockUsers } from '../data/mockData';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

// Mock login function simulating API call with 500ms delay
export const loginUser = (email: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find(
        (user) => user.email === email && user.password === password
      );
      
      if (user) {
        // Omit password from returned user data
        const { password, ...userWithoutPassword } = user;
        resolve(userWithoutPassword as User);
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 500);
  });
};