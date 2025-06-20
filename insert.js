// Вкарваме 10 документа в колекцията students. 
db.students.insertMany([
  { name: "Иван Иванов", email: "ivan@example.com", interests: ["Математика", "Наука"], profile: { age: 21, city: "София" } },
  { name: "Мария Георгиева", email: "maria@example.com", interests: ["История", "Литература"], profile: { age: 22, city: "Пловдив" } },
  { name: "Георги Петров", email: "georgi@example.com", interests: ["Програмиране"], profile: { age: 24, city: "Варна" } },
  { name: "Анна Стоянова", email: "anna@example.com", interests: ["Наука"], profile: { age: 20, city: "Русе" } },
  { name: "Никола Симеонов", email: "nikola@example.com", interests: ["Физика", "Математика"], profile: { age: 23, city: "София" } },
  { name: "Даниела Йорданова", email: "daniela@example.com", interests: ["Биология"], profile: { age: 22, city: "Плевен" } },
  { name: "Кирил Георгиев", email: "kiril@example.com", interests: ["Литература"], profile: { age: 19, city: "Пловдив" } },
  { name: "Силвия Иванова", email: "silvia@example.com", interests: ["Химия", "Наука"], profile: { age: 20, city: "Стара Загора" } },
  { name: "Борислав Костов", email: "boris@example.com", interests: ["Математика"], profile: { age: 21, city: "София" } },
  { name: "Елена Тодорова", email: "elena@example.com", interests: ["История"], profile: { age: 23, city: "Варна" } }
]);

// Вкарваме 10 документа в колекцията teachers. 
db.teachers.insertMany([
  { name: "Д-р Петров", email: "petrov@example.com", subjects: ["Математика", "Физика"], details: { degree: "PhD", experience: 10 } },
  { name: "Д-р Стоева", email: "stoeva@example.com", subjects: ["Биология"], details: { degree: "PhD", experience: 8 } },
  { name: "Инж. Георгиев", email: "ingeorgiev@example.com", subjects: ["Програмиране", "Алгоритми"], details: { degree: "MSc", experience: 12 } },
  { name: "М. Стефанова", email: "mstefanova@example.com", subjects: ["Литература"], details: { degree: "MA", experience: 6 } },
  { name: "Д. Александров", email: "dalexandrov@example.com", subjects: ["История", "Етика"], details: { degree: "BA", experience: 5 } },
  { name: "С. Николова", email: "snikolova@example.com", subjects: ["Химия"], details: { degree: "PhD", experience: 11 } },
  { name: "Т. Тодоров", email: "ttodorov@example.com", subjects: ["Физика"], details: { degree: "PhD", experience: 7 } },
  { name: "Г. Димитрова", email: "gdimova@example.com", subjects: ["Математика"], details: { degree: "MSc", experience: 9 } },
  { name: "И. Захариев", email: "izh@example.com", subjects: ["Програмиране"], details: { degree: "BSc", experience: 4 } },
  { name: "Л. Лазарова", email: "llazarova@example.com", subjects: ["Литература"], details: { degree: "MA", experience: 10 } }
]);

// Вкарваме 10 документа в колекцията courses. 
db.courses.insertMany([
  { title: "Алгебра", category: "Математика", teacherId: "6852dfdac80ffce3ad8fb23a", tags: ["алгебра", "математика"], info: { level: "Начинаещ", description: "Основи на алгебрата" } },
  { title: "Биология за начинаещи", category: "Биология", teacherId: "6852dfdac80ffce3ad8fb23b", tags: ["биология"], info: { level: "Начинаещ", description: "Основни концепции в биологията" } },
  { title: "Програмиране с Python", category: "Програмиране", teacherId: "6852dfdac80ffce3ad8fb242", tags: ["Python", "кодиране"], info: { level: "Средно", description: "Основи на Python програмиране" } },
  { title: "История на България", category: "История", teacherId: "6852dfdac80ffce3ad8fb23e", tags: ["история", "българия"], info: { level: "Начинаещ", description: "Преглед на историческите събития" } },
  { title: "Физика - Механика", category: "Физика", teacherId: "6852dfdac80ffce3ad8fb240", tags: ["физика"], info: { level: "Средно", description: "Механика за ученици" } },
  { title: "Химия за напреднали", category: "Химия", teacherId: "6852dfdac80ffce3ad8fb23f", tags: ["химия"], info: { level: "Напреднал", description: "Подготовка за състезания" } },
  { title: "Алгоритми", category: "Програмиране", teacherId: "6852dfdac80ffce3ad8fb23c", tags: ["алгоритми"], info: { level: "Напреднал", description: "Сложност и алгоритмични техники" } },
  { title: "Литература - Възраждане", category: "Литература", teacherId: "6852dfdac80ffce3ad8fb243", tags: ["литература"], info: { level: "Начинаещ", description: "Българска литература" } },
  { title: "Етика и право", category: "Етика", teacherId: "6852dfdac80ffce3ad8fb23e", tags: ["етика", "право"], info: { level: "Средно", description: "Морални и юридически норми" } },
  { title: "Геометрия", category: "Математика", teacherId: "6852dfdac80ffce3ad8fb241", tags: ["геометрия"], info: { level: "Средно", description: "Теореми и задачи" } }
]);

// Вкарваме 10 документа в колекцията grades. 
db.grades.insertMany([
  { studentId: "6852dedcc80ffce3ad8fb22e", courseId: "6852e68bc80ffce3ad8fb24c", grade: 5.50, feedback: "Отлична работа!" },
  { studentId: "6852dedcc80ffce3ad8fb22f", courseId: "6852e68bc80ffce3ad8fb24f", grade: 4.75, feedback: "Добро представяне." },
  { studentId: "6852dedcc80ffce3ad8fb230", courseId: "6852e68bc80ffce3ad8fb24e", grade: 6.00, feedback: "Безупречно!" },
  { studentId: "6852dedcc80ffce3ad8fb231", courseId: "6852e68bc80ffce3ad8fb250", grade: 3.90, feedback: "Има нужда от подобрение." },
  { studentId: "6852dedcc80ffce3ad8fb232", courseId: "6852e68bc80ffce3ad8fb250", grade: 5.20, feedback: "Справя се добре." },
  { studentId: "6852dedcc80ffce3ad8fb233", courseId: "6852e68bc80ffce3ad8fb24d", grade: 4.00, feedback: "Средно ниво." },
  { studentId: "6852dedcc80ffce3ad8fb234", courseId: "6852e68bc80ffce3ad8fb253", grade: 5.90, feedback: "Почти перфектно." },
  { studentId: "6852dedcc80ffce3ad8fb235", courseId: "6852e68bc80ffce3ad8fb251", grade: 4.50, feedback: "Може по-добре." },
  { studentId: "6852dedcc80ffce3ad8fb236", courseId: "6852e68bc80ffce3ad8fb255", grade: 5.00, feedback: "Добро усилие." },
  { studentId: "6852dedcc80ffce3ad8fb237", courseId: "6852e68bc80ffce3ad8fb24f", grade: 6.00, feedback: "Изключителен успех!" }
]);

// Вкарваме 10 документа в колекцията enrollments. 
db.enrollments.insertMany([
  { studentId: "6852dedcc80ffce3ad8fb22e", courseId: "6852e68bc80ffce3ad8fb24c", enrolledAt: "2025-01-10", status: "Активен" },
  { studentId: "6852dedcc80ffce3ad8fb22f", courseId: "6852e68bc80ffce3ad8fb24f", enrolledAt: "2025-01-11", status: "Активен" },
  { studentId: "6852dedcc80ffce3ad8fb230", courseId: "6852e68bc80ffce3ad8fb24e", enrolledAt: "2025-01-12", status: "Активен" },
  { studentId: "6852dedcc80ffce3ad8fb231", courseId: "6852e68bc80ffce3ad8fb250", enrolledAt: "2025-01-13", status: "Активен" },
  { studentId: "6852dedcc80ffce3ad8fb232", courseId: "6852e68bc80ffce3ad8fb250", enrolledAt: "2025-01-14", status: "Активен" },
  { studentId: "6852dedcc80ffce3ad8fb233", courseId: "6852e68bc80ffce3ad8fb24d", enrolledAt: "2025-01-15", status: "Активен" },
  { studentId: "6852dedcc80ffce3ad8fb234", courseId: "6852e68bc80ffce3ad8fb253", enrolledAt: "2025-01-16", status: "Активен" },
  { studentId: "6852dedcc80ffce3ad8fb235", courseId: "6852e68bc80ffce3ad8fb251", enrolledAt: "2025-01-17", status: "Активен" },
  { studentId: "6852dedcc80ffce3ad8fb236", courseId: "6852e68bc80ffce3ad8fb255", enrolledAt: "2025-01-18", status: "Активен" },
  { studentId: "6852dedcc80ffce3ad8fb237", courseId: "6852e68bc80ffce3ad8fb24f", enrolledAt: "2025-01-19", status: "Активен" }
]);