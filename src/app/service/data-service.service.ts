import { Injectable } from '@angular/core';

export interface Employee {
  id: number;
  name: string;
  address: string;
  department: {
    id: number;
    name: string;
  };
  salary: {
    basic: number;
    allowances: {
      housing: number;
      transportation: number;
    };
    deductions: {
      tax: number;
      insurance: number;
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private employees =  [
      {
        "id": 1,
        "name": "John Doe",
        "address": "123 Main St, City A, State X",
        "department": {
          "id": 101,
          "name": "Human Resources"
        },
        "salary": {
          "basic": 50000,
          "allowances": {
            "housing": 10000,
            "transportation": 5000
          },
          "deductions": {
            "tax": 7500,
            "insurance": 3000
          }
        }
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "address": "456 Park Ave, City B, State Y",
        "department": {
          "id": 102,
          "name": "Finance"
        },
        "salary": {
          "basic": 55000,
          "allowances": {
            "housing": 12000,
            "transportation": 6000
          },
          "deductions": {
            "tax": 8000,
            "insurance": 3500
          }
        }
      },
      {
        "id": 3,
        "name": "Michael Johnson",
        "address": "789 Oak St, City C, State Z",
        "department": {
          "id": 103,
          "name": "Marketing"
        },
        "salary": {
          "basic": 60000,
          "allowances": {
            "housing": 15000,
            "transportation": 7000
          },
          "deductions": {
            "tax": 8500,
            "insurance": 4000
          }
        }
      },
      {
        "id": 4,
        "name": "Emily Brown",
        "address": "101 Elm St, City D, State W",
        "department": {
          "id": 104,
          "name": "IT"
        },
        "salary": {
          "basic": 65000,
          "allowances": {
            "housing": 18000,
            "transportation": 8000
          },
          "deductions": {
            "tax": 9000,
            "insurance": 4500
          }
        }
      },
      {
        "id": 5,
        "name": "William Wilson",
        "address": "202 Pine St, City E, State V",
        "department": {
          "id": 105,
          "name": "Operations"
        },
        "salary": {
          "basic": 70000,
          "allowances": {
            "housing": 20000,
            "transportation": 9000
          },
          "deductions": {
            "tax": 9500,
            "insurance": 5000
          }
        }
      },
      {
        "id": 6,
        "name": "Olivia Martinez",
        "address": "303 Maple St, City F, State U",
        "department": {
          "id": 106,
          "name": "Sales"
        },
        "salary": {
          "basic": 75000,
          "allowances": {
            "housing": 22000,
            "transportation": 10000
          },
          "deductions": {
            "tax": 10000,
            "insurance": 5500
          }
        }
      },
      {
        "id": 7,
        "name": "James Lee",
        "address": "404 Birch St, City G, State T",
        "department": {
          "id": 107,
          "name": "Engineering"
        },
        "salary": {
          "basic": 80000,
          "allowances": {
            "housing": 25000,
            "transportation": 12000
          },
          "deductions": {
            "tax": 10500,
            "insurance": 6000
          }
        }
      },
      {
        "id": 8,
        "name": "Sophia Clark",
        "address": "505 Cedar St, City H, State S",
        "department": {
          "id": 108,
          "name": "Product Management"
        },
        "salary": {
          "basic": 85000,
          "allowances": {
            "housing": 28000,
            "transportation": 14000
          },
          "deductions": {
            "tax": 11000,
            "insurance": 6500
          }
        }
      },
      {
        "id": 9,
        "name": "Benjamin Hernandez",
        "address": "606 Oak St, City I, State R",
        "department": {
          "id": 109,
          "name": "Quality Assurance"
        },
        "salary": {
          "basic": 90000,
          "allowances": {
            "housing": 30000,
            "transportation": 16000
          },
          "deductions": {
            "tax": 11500,
            "insurance": 7000
          }
        }
      },
      {
        "id": 10,
        "name": "Isabella Lewis",
        "address": "707 Pine St, City J, State Q",
        "department": {
          "id": 110,
          "name": "Customer Support"
        },
        "salary": {
          "basic": 95000,
          "allowances": {
            "housing": 32000,
            "transportation": 18000
          },
          "deductions": {
            "tax": 12000,
            "insurance": 7500
          }
        }
      }
    ];

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  getSingleEmployee(emp_id : any) {
    let employee = this.employees.filter(({ id }) => id == emp_id);
    return employee[0];
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  updateEmployee(updatedEmployee: any) {
    const index = this.employees.findIndex(emp => emp.id === updatedEmployee.id);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
    }
  }
}
