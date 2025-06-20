// Извеждане информация за всичките ученици.
db.students.find();

// Извеждане на информация за учениците, които са от София.
db.students.find({ "profile.city": "София" });

// Извеждане на информация за учениците, които са от София и са над 21-годишна възраст.
db.students.find({ "profile.city": "София", "profile.age": { $gt: 21 } });

// Актулизиране на възрастта на ученик с имейл: ivan@example.com.
db.students.updateOne({ email: "ivan@example.com" }, { $set: { "profile.age": 22 } });

// Изтриване на ученик с имейл: boris@example.com.
db.students.deleteOne({ email: "boris@example.com" });

// Извеждане на информация за средната възраст и бройката на учениците в даден град в низходящ ред.
db.students.aggregate([
  { $group: { _id: "$profile.city", avgAge: { $avg: "$profile.age" }, count: { $sum: 1 } } },
  { $sort: { avgAge: -1 } }]);

// Извеждане информация за всичките учители.  
db.teachers.find();

// Извеждане на информация за учителите, които са с PhD.
db.teachers.find({ "details.degree": "PhD" });

// Извеждане на информация за учителите, които са с PhD и имат повече от 9 години стаж.
db.teachers.find({ "details.degree": "PhD", "details.experience": { $gt: 9 } });

// Актулизиране на стажа на учител с имейл: ingeorgiev@example.com.
db.teachers.updateOne({ email: "ingeorgiev@example.com" }, { $set: { "details.experience": 15 } });

// Изтриване на учител с имейл: izh@example.com.
db.teachers.deleteOne({ email: "izh@example.com" });

// Извеждане на информация за средния стаж и бройката на учителите с дадено образование в низходящ ред.
db.teachers.aggregate([
  { $group: { _id: "$details.degree", avgExperience: { $avg: "$details.experience" }, total: { $sum: 1 } } },
  { $sort: { total: -1 } }]);

// Извеждане информация за всичките курсове.
db.courses.find();

// Извеждане на информация за всички курсове с категория Математика.
db.courses.find({ category: "Математика" });

// Извеждане на информация за всички курсове с категория Програмиране и ниво Напреднал.
db.courses.find({ category: "Програмиране", "info.level": "Напреднал" });

// Актулизиране на нивото на трудност на курс с име Геометрия.
db.courses.updateOne({ title: "Геометрия" }, { $set: { "info.level": "Напреднал" } });

// Изтриване на курс с име Етика и право.
db.courses.deleteOne({ title: "Етика и право" });

// Извеждане на информация за бройката на курсовете с дадена категория в низходящ ред.
db.courses.aggregate([
  { $group: { _id: "$category", count: { $sum: 1 } } },
  { $sort: { count: -1 } }]);

// Извеждане на информация за всичките оценки.
db.grades.find();

// Извеждане на информация за оценки, по-високи или равни на 5.50.
db.grades.find({ grade: { $gte: 5.50 } });

// Извеждане на информация за оценки, по-високи или равни на 5.00 и с обратна връзка, съдържаща добро.
db.grades.find({ grade: { $gte: 5.00 }, feedback: /добро/i });

// Актуализиране на обратната връзка с Подобрение е необходимо. за оценка 3.90.
db.grades.updateOne({ grade: 3.90 }, { $set: { feedback: "Подобрение е необходимо." } });

// Изтриване на оценка, по-малка от 4.00.
db.grades.deleteOne({ grade: { $lt: 4.00 } });

// Извеждане на информация за средния успех и най-високата оценка в даден курс в низходящ ред.
db.grades.aggregate([
  { $group: { _id: "$courseId", avgGrade: { $avg: "$grade" }, maxGrade: { $max: "$grade" } } },
  { $sort: { avgGrade: -1 } }]);

// Извеждане на информация за всичките записвания.
db.enrollments.find();

// Извеждане на информация за записвания със статус Активен.
db.enrollments.find({ status: "Активен" });

// Извеждане на информация за записвания със статус Активен и дата на записване, по-късна или равна на 15.01.2025. 
db.enrollments.find({ status: "Активен", enrolledAt: { $gte: "2025-01-15" } });

// Актулизиране на статус към Завършен на ученик с ид 6852dedcc80ffce3ad8fb22f.
db.enrollments.updateOne({ studentId: "6852dedcc80ffce3ad8fb22f" }, { $set: { status: "Завършен" } });

// Изтриване на записвания с дата 10.01.2025.
db.enrollments.deleteOne({ enrolledAt: "2025-01-10" });

// Извеждане на информация за бройката на записванията на даден курс в низходящ ред.
db.enrollments.aggregate([
  { $group: { _id: "$courseId", totalEnrolled: { $sum: 1 } } },
  { $sort: { totalEnrolled: -1 } }]);