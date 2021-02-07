שלום,
על מנת להריץ את הפרויקט יש לבצע אחר השלבים הבאים:
פרויקט יישלח בכל זאת עם הסיסמאות.
Open a new Terminal.
Split a terminal.

cd client  > npm install.
cd server > npm install.

change a username and password in URI_Mongoose.js file: const URI =
`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.ooadp.mongodb.net/<dbname>?retryWrites=true&w=majority`;

Enter Any string or password in Api/CreateUser.js file > line : jwt.verify(req.token, process.env.LOGIN_PASSWORD, (err, authData) => {
In Api/CreateMessage.js file – Enter any Email address "to:": to: 'chenyaa89@gmail.com', // change The Email Address to check it

cd client > npm start.
cd server > npm start.

במידה והנך מתחבר דרך ה-Username שלך דרך mongoose  - הפרויקט יהיה ריק – ללא חופשות וללא מאגר משתמשים.

בדף החופשות ניתן ליצור חופשות עם מחיר נמוך מ- 300$ - כדי לקבל כותרת של "חופשה במחיר טוב".
ברגע שמספר העוקבים לכל חופשה הוא מעל ל-5 נקבל כותרת של "יעד חם".
ניתן לשלוח ב- footer הודעה באמצעות אימייל שמקודד בקוד.


לא מצליח להסתיר את הכניסה ליתר הדפים, מלבד ה-login ו-register למשתמשים שאינם רשומים,
אך כן ניתן לבצע register – עם unique username ו-login – תופיע הודעת שגיאה/אישור על כניסה/הרשמה תקינה/לא תקינה.
